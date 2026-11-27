#!/usr/bin/env node
/**
 * glific-browser — read-only, redacting wrapper around `playwright-cli` for the
 * update-docs skill. Zero dependencies: Node built-ins + the preinstalled
 * `playwright-cli` binary only.
 *
 *   node .claude/skills/update-docs/scripts/glific-browser.mjs <command> [args]
 *
 * Commands:
 *   preflight                 Check env, CLI, browser, guard, redaction and login. Run first.
 *   start                     Open (or reuse) the guarded, logged-in session.
 *   status                    Is the session alive and the guard active?
 *   shot <out.png> [--target <ref|css>] [--mask <css>]... [--hide <css>]...
 *                             Redact the page, verify nothing sensitive is left, then screenshot.
 *   blocked [--ack]           Show write attempts the guard blocked (exit 3 if any need attention).
 *   lint [files...]           Check new/changed images came from `shot` and /img refs resolve.
 *   stop                      Close the session.
 *
 * Credentials come from env: GLIFIC_URL, GLIFIC_PHONE, GLIFIC_PASSWORD.
 * They are never printed. The agent should never handle them directly.
 */

import { spawnSync } from 'node:child_process';
import { createHash, randomBytes } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SESSION = 'glific-docs';
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const CONFIG = path.join(SCRIPT_DIR, 'cli.config.json');
const ROOT = findRoot();
const WORK = path.join(ROOT, '.playwright-cli');
const TMP = path.join(WORK, 'tmp');
const MANIFEST = path.join(WORK, 'redacted-manifest.json');
const MARK = 'GLIFIC_DOCS_READONLY_BLOCKED';
const GUARD_COOKIE_URL = 'https://docs-guard.invalid';

// Hosts the Glific UI legitimately POSTs to for *reads*. Superset (Analytics
// page) runs with a read-only guest token and fetches chart data via POST.
const READ_ONLY_POST_HOSTS = ['moonshine.projecttech4dev.org'];

function findRoot() {
  const r = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.trim() : process.cwd();
}

// ---------------------------------------------------------------------------
// playwright-cli plumbing
// ---------------------------------------------------------------------------

function cli(args, { quiet = false, timeout = 180000 } = {}) {
  const r = spawnSync('playwright-cli', [`-s=${SESSION}`, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout,
    env: process.env,
  });
  const out = `${r.stdout || ''}${r.stderr || ''}`;
  if (!quiet) process.stdout.write(scrub(out));
  return { status: r.status, out, error: r.error };
}

// Runs a Playwright function in the session. The code is written to a private
// temp file and the CLI echo (which repeats the code) is never printed, so
// credentials embedded in the code don't leak into the transcript.
function runCode(code) {
  fs.mkdirSync(TMP, { recursive: true, mode: 0o700 });
  const file = path.join(TMP, `rc-${randomBytes(6).toString('hex')}.js`);
  fs.writeFileSync(file, code, { mode: 0o600 });
  try {
    const rel = path.relative(ROOT, file);
    const { out, status } = cli(['run-code', `--filename=${rel}`], { quiet: true });
    return { raw: out, status, result: parseResult(out) };
  } finally {
    fs.rmSync(file, { force: true });
  }
}

function parseResult(out) {
  const m = out.match(/### Result\s*\n([\s\S]*?)(?:\n###|$)/);
  if (!m) return null;
  let v = m[1].trim();
  for (let i = 0; i < 2 && typeof v === 'string'; i += 1) {
    try { v = JSON.parse(v); } catch { break; }
  }
  return v;
}

function scrub(text) {
  let t = String(text);
  for (const key of ['GLIFIC_PASSWORD', 'GLIFIC_PHONE']) {
    const val = process.env[key];
    if (val && val.length >= 4) t = t.split(val).join(`<${key}>`);
  }
  return t;
}

function sessionAlive() {
  const { out, status } = cli(['eval', '1'], { quiet: true, timeout: 30000 });
  return status === 0 && !/is not open/.test(out);
}

// ---------------------------------------------------------------------------
// Env
// ---------------------------------------------------------------------------

function env() {
  const url = (process.env.GLIFIC_URL || '').trim().replace(/\/+$/, '');
  const phone = (process.env.GLIFIC_PHONE || '').replace(/\D/g, '');
  const password = process.env.GLIFIC_PASSWORD || '';
  return { url, phone, password };
}

function hostOf(url) {
  try { return new URL(url).hostname; } catch { return ''; }
}

// ---------------------------------------------------------------------------
// In-browser code (serialised into run-code snippets)
// ---------------------------------------------------------------------------

function guardCode(glificHost) {
  return `async page => {
  const ctx = page.context();
  const MARK = ${JSON.stringify(MARK)};
  const GLIFIC_HOST = ${JSON.stringify(glificHost)};
  const COOKIE_URL = ${JSON.stringify(GUARD_COOKIE_URL)};
  const READ_ONLY_POST_HOSTS = ${JSON.stringify(READ_ONLY_POST_HOSTS)};
  const SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS'];
  // REST endpoints that only authenticate or read.
  const ALLOWED_POST_PATHS = [/^\\/api\\/v1\\/session\\/?$/, /^\\/api\\/v1\\/session\\/renew\\/?$/,
    /^\\/api\\/v1\\/session\\/name\\/?$/, /^\\/api\\/v1\\/get-embed-token\\/?$/];
  // Fired automatically by the UI; still blocked, but not a reason to stop.
  const PASSIVE = [/^\\/api\\/v1\\/session\\/tracker/, /\\bmarkContactMessagesAsRead\\b/, /\\bmarkNotificationAsRead\\b/];
  // Queries with server-side side effects: the simulator reserves a shared simulator contact.
  const SIDE_EFFECT_FIELDS = /\\b(simulatorGet|simulatorRelease)\\b/;
  // The one exception to read-only: the flow editor lock. flowGet takes the docs account's
  // edit lock on that flow (with isForced — the "Take Over" button — it takes it from
  // whoever holds it); flowRelease (fired by the flow list) gives it back.
  const FLOW_EDITOR_FIELDS = /\\b(flowGet|flowRelease)\\b/;
  const isTakeOver = body => {
    try {
      return [].concat(JSON.parse(body)).some(op => (op && op.variables && op.variables.isForced === true)
        || /isForced\\s*:\\s*true/.test((op && op.query) || ''));
    } catch (e) { return false; }
  };

  const isGlific = h => !!GLIFIC_HOST && (h === GLIFIC_HOST || h.endsWith('.' + GLIFIC_HOST));

  const gqlVerdict = body => {
    let payload;
    try { payload = JSON.parse(body); } catch { return 'unparseable GraphQL body'; }
    for (const op of Array.isArray(payload) ? payload : [payload]) {
      if (!op || typeof op.query !== 'string') return 'GraphQL request without query text';
      const q = op.query.replace(/#[^\\n]*/g, '');
      if (/\\bmutation\\b/.test(q)) return 'GraphQL mutation ' + (op.operationName || (q.match(/mutation\\s+(\\w+)/) || [])[1] || '');
      if (/\\bsubscription\\b/.test(q)) return 'GraphQL subscription over HTTP';
      const side = q.match(SIDE_EFFECT_FIELDS);
      if (side) return 'side-effect query ' + side[1] + ' (reserves the simulator)';
    }
    return null;
  };

  // Blocked and allowed-exception events go to separate cookies so frequent allowed
  // events (flowGet re-fires on every tab focus) can never push a blocked one out.
  const record = async (why, req, cookie = 'blocked') => {
    const body = req.postData() || '';
    if (body.includes('DocsGuardCanary')) return;
    const u = new URL(req.url());
    const passive = PASSIVE.some(r => r.test(u.pathname) || r.test(body));
    const entry = { at: new Date().toISOString(), method: req.method(), host: u.hostname, path: u.pathname, why, passive };
    try {
      const prev = (await ctx.cookies(COOKIE_URL)).find(c => c.name === cookie);
      let list = prev ? JSON.parse(decodeURIComponent(prev.value)) : [];
      list.push(entry);
      list = list.slice(-8);
      await ctx.addCookies([{ name: cookie, value: encodeURIComponent(JSON.stringify(list)), url: COOKIE_URL }]);
    } catch (e) {}
  };

  await ctx.route('**/*', async route => {
    const req = route.request();
    const method = req.method().toUpperCase();
    let u;
    try { u = new URL(req.url()); } catch { return route.fallback(); }
    if (!/^https?:$/.test(u.protocol)) return route.fallback();

    let why = null;
    if (SAFE_METHODS.includes(method)) {
      let search = u.search;
      try { search = decodeURIComponent(search); } catch (e) {}
      if (/\\bmutation\\b/.test(search)) why = 'GraphQL mutation via GET';
    } else if (READ_ONLY_POST_HOSTS.includes(u.hostname)) {
      why = null;
    } else if (!isGlific(u.hostname)) {
      // Third-party writes (telemetry, CDNs). Drop quietly.
      return route.fulfill({ status: 204, headers: { 'access-control-allow-origin': req.headers()['origin'] || '*' } });
    } else if (method === 'POST' && ALLOWED_POST_PATHS.some(r => r.test(u.pathname))) {
      why = null;
    } else if (method === 'POST' && /^\\/api\\/?$/.test(u.pathname)) {
      const ct = req.headers()['content-type'] || '';
      why = ct.includes('json') ? gqlVerdict(req.postData() || '') : 'non-JSON GraphQL request (file upload?)';
    } else {
      why = method + ' ' + u.pathname + ' is a write';
    }
    if (!why) {
      const body = method === 'POST' ? req.postData() || '' : '';
      const lock = body.match(FLOW_EDITOR_FIELDS);
      if (lock) {
        let what = ' (flow editor lock released)';
        if (lock[1] === 'flowGet') what = isTakeOver(body) ? ' TAKE OVER (lock taken from another user)' : ' (flow editor lock taken)';
        await record('allowed ' + lock[1] + what, req, 'allowed');
      }
      return route.fallback();
    }

    await record(why, req);
    const origin = req.headers()['origin'];
    const headers = { 'content-type': 'application/json', 'access-control-allow-origin': origin || '*' };
    if (origin) headers['access-control-allow-credentials'] = 'true';
    const message = MARK + ': ' + why + ' — blocked by the docs skill (read-only mode)';
    if (/^\\/api\\/?$/.test(u.pathname)) {
      return route.fulfill({ status: 200, headers, body: JSON.stringify({ data: null, errors: [{ message }] }) });
    }
    return route.fulfill({ status: 403, headers, body: JSON.stringify({ error: message }) });
  });

  // Absinthe socket carries subscriptions only; drop anything else that looks like a write.
  try {
    await ctx.routeWebSocket(/\\/socket\\//, ws => {
      const server = ws.connectToServer();
      ws.onMessage(msg => {
        const text = typeof msg === 'string' ? msg : '';
        if (/\\bmutation\\b/.test(text) || SIDE_EFFECT_FIELDS.test(text) || FLOW_EDITOR_FIELDS.test(text)) return;
        server.send(msg);
      });
    });
  } catch (e) {}

  return 'GUARD_INSTALLED';
}`;
}

function canaryCode(target) {
  return `async page => {
  const res = await page.evaluate(async url => {
    try {
      const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'text/plain' },
        body: JSON.stringify({ query: 'mutation DocsGuardCanary { __typename }' }) });
      return await r.text();
    } catch (e) { return 'FETCH_ERROR ' + e.message; }
  }, ${JSON.stringify(target)});
  return res.includes(${JSON.stringify(MARK)}) ? 'GUARD_OK' : 'GUARD_MISSING';
}`;
}

function loginCode({ url, phone, password }) {
  const local = phone.slice(-10);
  const dial = phone.slice(0, -10) || '91';
  return `async page => {
  const BASE = ${JSON.stringify(url)};
  const LOCAL = ${JSON.stringify(local)};
  const DIAL = ${JSON.stringify(dial)};
  const PASSWORD = ${JSON.stringify(password)};
  let last = '';
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await page.goto(BASE + '/login', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1500);
      if (new URL(page.url()).pathname.startsWith('/chat')) return JSON.stringify({ ok: true, already: true });
      await page.waitForSelector('[data-testid="AuthContainer"]', { timeout: 20000 });
      const phone = page.locator('input[name="phoneNumber"]');
      await phone.waitFor({ state: 'visible' });
      // PhoneInput prepends the dial code after mount; type the local part after it.
      await page.waitForFunction(() => {
        const el = document.querySelector('input[name="phoneNumber"]');
        return !!el && /^\\+\\d/.test(el.value);
      }, null, { timeout: 10000 });
      await phone.click();
      await phone.press('End');
      await phone.pressSequentially(LOCAL);
      if ((await phone.inputValue()).replace(/\\D/g, '') !== DIAL + LOCAL) throw new Error('phone field did not accept GLIFIC_PHONE');
      await page.fill('input[name="password"]', PASSWORD);
      await page.click('[data-testid="SubmitButton"]');
      await page.waitForURL(u => u.pathname.startsWith('/chat'), { timeout: 45000 });
      return JSON.stringify({ ok: true, attempt });
    } catch (e) {
      last = String((e && e.message) || e).split(PASSWORD).join('***').split(LOCAL).join('***');
    }
  }
  let onPage = '';
  try { onPage = (await page.locator('[data-testid="AuthContainer"]').innerText()).slice(0, 300); } catch (e) {}
  return JSON.stringify({ ok: false, error: last.slice(0, 400), page: onPage.split(LOCAL).join('***') });
}`;
}

// Runs inside every frame. Replaces PII in place; returns counts.
function redactInFrame(opts) {
  const counts = { phone: 0, email: 0, secret: 0, name: 0, message: 0, input: 0, masked: 0, media: 0 };
  const PHONE_RE = /(?<![\w.\/-])\+?\d[\d\s().-]{8,18}\d(?![\w.\/-])/g;
  const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
  const SECRET_RE = /\b(?=[A-Za-z0-9_-]*\d)(?=[A-Za-z0-9_-]*[A-Za-z])[A-Za-z0-9_-]{28,}\b/g;
  const SENSITIVE_INPUT = /pass|secret|token|api.?key|credential|auth|private/i;
  const NAME_HEADERS = /^(name|contact|contact name|contacts|beneficiary|staff|staff name|user|user name|member|members|full name|assigned to|owner)$/i;
  const NAME_SELECTORS = [
    '[data-testid="name"]', '[data-testid="contact-name"]', '[data-testid="beneficiaryName"]',
    '[data-testid="profileHeader"]', '[class*="ContactName"]', '[class*="ChatName"]',
  ];
  const STAFF_SELECTORS = ['[data-testid="user-account"]', '[class*="UserName"]', '[class*="StaffName"]'];
  const MESSAGE_SELECTORS = [
    '[data-testid="message"] [data-testid="content"]', '[data-testid="chatInfo"] [data-testid="content"]',
    '[class*="MessageContent"]', '[data-testid="text-content"]',
  ];
  const MEDIA_SELECTORS = [
    '[data-testid="imageMessage"]', '[data-testid="videoMessage"]', '[data-testid="stickerMessage"]',
    '[data-testid="documentMessage"]', '[data-testid="locationMessage"]', '[data-testid="audioMessage"]',
    '.MuiAvatar-root', 'img[class*="vatar"]', 'img[src^="blob:"]',
  ];

  const digits = s => s.replace(/\D/g, '').length;
  const scrubText = s => {
    let out = s.replace(EMAIL_RE, m => {
      if (m === 'user@example.org') return m;
      counts.email += 1;
      return 'user@example.org';
    });
    out = out.replace(PHONE_RE, m => {
      const n = digits(m);
      if (n < 10 || n > 15) return m;
      counts.phone += 1;
      return '+91 XXXXX XXXXX';
    });
    out = out.replace(SECRET_RE, () => { counts.secret += 1; return '••••••••'; });
    return out;
  };
  const textNodes = root => {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
    });
    const list = [];
    while (w.nextNode()) list.push(w.currentNode);
    return list;
  };
  const relabel = (el, label, key) => {
    const nodes = textNodes(el);
    // Compare text, not a marker: React may re-render the node with the real value.
    if (!nodes.length || nodes[0].nodeValue === label) return;
    nodes[0].nodeValue = label;
    for (const n of nodes.slice(1)) n.nodeValue = scrubText(n.nodeValue);
    counts[key] += 1;
  };
  const q = sel => { try { return Array.from(document.querySelectorAll(sel)); } catch (e) { return []; } };

  if (!document.body) return counts;

  for (const sel of NAME_SELECTORS) q(sel).forEach(el => relabel(el, 'Contact Name', 'name'));
  for (const sel of STAFF_SELECTORS) q(sel).forEach(el => relabel(el, 'Staff Member', 'name'));
  for (const sel of MESSAGE_SELECTORS) q(sel).forEach(el => relabel(el, 'Sample message text', 'message'));

  // Name-like table columns.
  for (const table of q('table')) {
    const heads = Array.from(table.querySelectorAll('thead th, thead td'));
    heads.forEach((th, idx) => {
      if (!NAME_HEADERS.test((th.innerText || '').trim())) return;
      table.querySelectorAll('tbody tr').forEach((tr, i) => {
        const cell = tr.children[idx];
        if (cell) relabel(cell, `Contact ${i + 1}`, 'name');
      });
    });
  }

  for (const n of textNodes(document.body)) {
    const next = scrubText(n.nodeValue);
    if (next !== n.nodeValue) n.nodeValue = next;
  }

  const setValue = (el, v) => {
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    setter.call(el, v);
  };
  for (const el of q('input, textarea')) {
    if (!el.value) continue;
    const hint = [el.type, el.name, el.id, el.placeholder, el.getAttribute('aria-label')].join(' ');
    if (el.type === 'password' || SENSITIVE_INPUT.test(hint)) {
      if (el.type !== 'password') setValue(el, '••••••••••');
      counts.input += 1;
      continue;
    }
    const next = scrubText(el.value);
    if (next !== el.value) { setValue(el, next); counts.input += 1; }
  }

  for (const sel of MEDIA_SELECTORS) {
    q(sel).forEach(el => { el.style.filter = 'blur(14px)'; counts.media += 1; });
  }
  for (const sel of opts.hide || []) {
    q(sel).forEach(el => {
      textNodes(el).forEach(n => { n.nodeValue = '█'.repeat(Math.min(12, Math.max(4, n.nodeValue.trim().length))); });
      el.querySelectorAll('img, video, canvas, svg').forEach(m => { m.style.filter = 'blur(14px)'; });
      counts.masked += 1;
    });
  }
  return counts;
}

// Runs inside every frame after redaction. Returns leak descriptions (never the values).
function verifyInFrame(opts) {
  const PHONE_RE = /(?<![\w.\/-])\+?\d[\d\s().-]{8,18}\d(?![\w.\/-])/g;
  const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
  const leaks = [];
  if (!document.body) return leaks;
  let clip = null;
  if (opts.isMain) {
    if (opts.clip) clip = opts.clip;
    else clip = { x: 0, y: 0, width: innerWidth, height: innerHeight };
  }
  const visible = el => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return false;
    if (!clip) return true;
    return r.right > clip.x && r.left < clip.x + clip.width && r.bottom > clip.y && r.top < clip.y + clip.height;
  };
  const where = el => {
    const t = el.closest('[data-testid]');
    return t ? `[data-testid="${t.dataset.testid}"]` : el.tagName.toLowerCase();
  };
  const check = (text, el) => {
    if (!text || !visible(el)) return;
    if ((text.match(EMAIL_RE) || []).some(m => m !== 'user@example.org')) leaks.push({ kind: 'email', where: where(el) });
    for (const m of text.match(PHONE_RE) || []) {
      const n = m.replace(/\D/g, '').length;
      if (n >= 10 && n <= 15) { leaks.push({ kind: 'phone', where: where(el) }); break; }
    }
  };
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) check(w.currentNode.nodeValue, w.currentNode.parentElement);
  document.querySelectorAll('input, textarea').forEach(el => {
    if (el.type !== 'password') check(el.value, el);
  });
  return leaks.slice(0, 10);
}

function shotCode({ out, target, hide, masks }) {
  const MEDIA = [
    '[data-testid="imageMessage"]', '[data-testid="videoMessage"]', '[data-testid="stickerMessage"]',
    '[data-testid="documentMessage"]', '[data-testid="locationMessage"]', '.MuiAvatar-root',
  ];
  return `async page => {
  const OUT = ${JSON.stringify(out)};
  const TARGET = ${JSON.stringify(target || null)};
  const HIDE = ${JSON.stringify(hide)};
  const MASKS = ${JSON.stringify([...masks, ...MEDIA])};
  const redact = ${redactInFrame.toString()};
  const verify = ${verifyInFrame.toString()};

  const loc = TARGET ? page.locator(/^(f\\d+)?e\\d+$/.test(TARGET) ? 'aria-ref=' + TARGET : TARGET).first() : null;
  let clip = null;
  if (loc) {
    await loc.scrollIntoViewIfNeeded();
    clip = await loc.boundingBox();
    if (!clip) return JSON.stringify({ ok: false, error: 'target not visible: ' + TARGET });
  }
  await page.waitForTimeout(300);

  const counts = {};
  const errors = [];
  for (let pass = 0; pass < 2; pass += 1) {
    for (const f of page.frames()) {
      try {
        const c = await f.evaluate(redact, { hide: HIDE });
        for (const [k, v] of Object.entries(c)) counts[k] = (counts[k] || 0) + (pass === 0 ? v : 0);
      } catch (e) {
        if (pass === 1 && f.url() !== 'about:blank') errors.push('could not redact frame ' + new URL(f.url()).host);
      }
    }
    await page.waitForTimeout(150);
  }
  if (errors.length) return JSON.stringify({ ok: false, error: errors.join('; ') });

  const leaks = [];
  for (const f of page.frames()) {
    try {
      const l = await f.evaluate(verify, { isMain: f === page.mainFrame(), clip });
      leaks.push(...l);
    } catch (e) {}
  }
  if (leaks.length) return JSON.stringify({ ok: false, error: 'sensitive data still visible after redaction', leaks });

  const mask = MASKS.map(s => page.locator(s));
  const opts = { path: OUT, animations: 'disabled', caret: 'hide', mask, maskColor: '#C9CED6' };
  if (loc) await loc.screenshot(opts);
  else await page.screenshot(opts);
  return JSON.stringify({ ok: true, counts, url: new URL(page.url()).pathname });
}`;
}

const readLogCode = name => `async page => {
  const c = (await page.context().cookies(${JSON.stringify(GUARD_COOKIE_URL)})).find(x => x.name === ${JSON.stringify(name)});
  return c ? decodeURIComponent(c.value) : '[]';
}`;

const ackBlockedCode = `async page => {
  await page.context().clearCookies({ name: 'blocked', domain: 'docs-guard.invalid' });
  return 'ACKED';
}`;

const REDACTION_FIXTURE = `<!doctype html><html><body>
<div data-testid="chatInfo"><div data-testid="name">Asha Kumari</div><div data-testid="content">My son's results came today</div></div>
<p>Call +91 98765 43210 or 919876543210 or email asha.k@example.com</p>
<p>Token docsfixture9aB3xY7qLmN2pQ4rS6tU8vW0</p>
<table><thead><tr><th>Name</th><th>Phone</th></tr></thead><tbody><tr><td>Ravi Patel</td><td>+91-99887-66554</td></tr></tbody></table>
<input name="apiKey" value="abcdef123456"><input name="search" value="9123456780">
<p>Date 2026-10-10, count 12345, flow id 42</p>
</body></html>`;

function redactionSelfTestCode() {
  return `async page => {
  const redact = ${redactInFrame.toString()};
  const verify = ${verifyInFrame.toString()};
  await page.setContent(${JSON.stringify(REDACTION_FIXTURE)});
  await page.evaluate(redact, { hide: [] });
  const leaks = await page.evaluate(verify, { isMain: true, clip: null });
  const text = await page.evaluate(() => document.body.innerText + ' ' + Array.from(document.querySelectorAll('input')).map(i => i.value).join(' '));
  const survivors = ['Asha', 'Ravi', 'results', '98765', '99887', 'docsfixture', 'abcdef123456', '9123456780'].filter(s => text.includes(s));
  const keptBenign = ['2026-10-10', '12345', 'flow id 42'].every(s => text.includes(s));
  await page.goto('about:blank');
  return JSON.stringify({ ok: !leaks.length && !survivors.length && keptBenign, leaks, survivors, keptBenign });
}`;
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

function line(ok, label, detail = '') {
  const tag = ok === true ? 'PASS' : ok === false ? 'FAIL' : 'INFO';
  console.log(`[${tag}] ${label}${detail ? ` — ${detail}` : ''}`);
}

function openSession() {
  const { status, out } = cli(['open', `--config=${path.relative(ROOT, CONFIG)}`, 'about:blank'], { quiet: true });
  if (status !== 0) {
    const reason = scrub(out).split('\n').find(l => /Error|not installed|not found/i.test(l)) || 'unknown error';
    return { ok: false, reason: reason.trim() };
  }
  return { ok: true };
}

function installGuard(host) {
  const g = runCode(guardCode(host));
  return g.result === 'GUARD_INSTALLED';
}

function canary(url) {
  return runCode(canaryCode(`${url}/api`)).result === 'GUARD_OK';
}

function login(e) {
  const r = runCode(loginCode(e));
  const res = r.result && typeof r.result === 'object' ? r.result : { ok: false, error: scrub(r.raw).slice(-400) };
  return res;
}

// Opens a fresh guarded session, or validates an existing one. Never leaves an
// unguarded session running.
function start({ verbose = true } = {}) {
  const e = env();
  if (!e.url || !e.phone || !e.password) {
    line(false, 'env', 'GLIFIC_URL, GLIFIC_PHONE and GLIFIC_PASSWORD must all be set');
    return false;
  }
  const host = hostOf(e.url);

  if (sessionAlive()) {
    if (canary(e.url)) {
      if (verbose) line(true, 'session', `reusing guarded session "${SESSION}"`);
      return true;
    }
    line(null, 'session', 'existing session has no guard — closing it');
    cli(['close'], { quiet: true });
  }

  const o = openSession();
  if (!o.ok) { line(false, 'browser launch', o.reason); return false; }
  if (!installGuard(host) || !canary(e.url)) {
    line(false, 'read-only guard', 'could not install/verify — closing session');
    cli(['close'], { quiet: true });
    return false;
  }
  if (verbose) line(true, 'read-only guard', 'installed before any page load');

  const res = login(e);
  if (!res.ok) {
    line(false, 'login', `${res.error || 'failed'}${res.page ? ` | page says: ${res.page.replace(/\s+/g, ' ')}` : ''}`);
    return false;
  }
  if (!canary(e.url)) {
    line(false, 'read-only guard', 'not active after login — closing session');
    cli(['close'], { quiet: true });
    return false;
  }
  if (verbose) line(true, 'login', `signed in to ${host}`);
  return true;
}

function preflight() {
  console.log('update-docs preflight\n');
  let ok = true;

  const node = process.versions.node;
  line(Number(node.split('.')[0]) >= 18, 'node', node);

  const e = env();
  const missing = ['GLIFIC_URL', 'GLIFIC_PHONE', 'GLIFIC_PASSWORD'].filter(k => !process.env[k]);
  if (missing.length) { line(false, 'env', `missing ${missing.join(', ')}`); ok = false; }
  else line(true, 'env', `GLIFIC_URL=${e.url}, phone ends ••${e.phone.slice(-2)}, password set`);
  if (e.url && !/^https?:\/\/[^/]+$/.test(e.url)) { line(false, 'GLIFIC_URL', 'must be an origin like https://org.glific.com'); ok = false; }
  if (e.phone && (e.phone.length < 10 || e.phone.length > 13)) { line(false, 'GLIFIC_PHONE', 'expected 10–13 digits, e.g. 91XXXXXXXXXX'); ok = false; }

  const v = spawnSync('playwright-cli', ['--version'], { encoding: 'utf8' });
  if (v.error || v.status !== 0) {
    line(false, 'playwright-cli', 'not on PATH — this skill needs the cloud environment with @playwright/cli preinstalled');
    ok = false;
  } else line(true, 'playwright-cli', v.stdout.trim());
  line(null, 'PLAYWRIGHT_BROWSERS_PATH', process.env.PLAYWRIGHT_BROWSERS_PATH || '(default cache)');

  if (!ok) { console.log('\nPREFLIGHT FAILED'); return 1; }

  // Fresh session so every check runs against a clean browser.
  if (sessionAlive()) cli(['close'], { quiet: true });
  const o = openSession();
  if (!o.ok) {
    line(false, 'browser launch', o.reason);
    console.log('\nPREFLIGHT FAILED');
    return 1;
  }
  line(true, 'browser launch', 'chromium headless');

  if (!installGuard(hostOf(e.url)) || !canary(e.url)) {
    line(false, 'read-only guard', 'canary mutation was NOT blocked');
    cli(['close'], { quiet: true });
    console.log('\nPREFLIGHT FAILED');
    return 1;
  }
  line(true, 'read-only guard', 'canary mutation blocked');

  const st = runCode(redactionSelfTestCode()).result;
  if (!st || !st.ok) {
    line(false, 'redaction self-test', JSON.stringify(st));
    cli(['close'], { quiet: true });
    console.log('\nPREFLIGHT FAILED');
    return 1;
  }
  line(true, 'redaction self-test', 'phones, emails, names, messages, secrets removed');

  const res = login(e);
  if (!res.ok) {
    line(false, 'login', `${res.error || 'failed'}${res.page ? ` | page says: ${res.page.replace(/\s+/g, ' ')}` : ''}`);
    console.log('\nPREFLIGHT FAILED');
    return 1;
  }
  line(true, 'login', `signed in to ${hostOf(e.url)}`);

  if (!canary(e.url)) {
    line(false, 'read-only guard', 'not active after login');
    cli(['close'], { quiet: true });
    console.log('\nPREFLIGHT FAILED');
    return 1;
  }
  line(true, 'read-only guard', 'still active after login');
  runCode(ackBlockedCode);
  console.log(`\nPREFLIGHT OK — session "${SESSION}" is open, logged in, read-only.`);
  return 0;
}

function status() {
  const e = env();
  if (!sessionAlive()) { line(false, 'session', 'not open — run `glific-browser start`'); return 1; }
  if (!canary(e.url)) { line(false, 'read-only guard', 'MISSING — run `glific-browser stop` then `glific-browser start`'); return 1; }
  line(true, 'session', 'open and guarded');
  return blocked([]) === 3 ? 3 : 0;
}

function readLog(name) {
  const r = runCode(readLogCode(name)).result;
  try { return Array.isArray(r) ? r : JSON.parse(r || '[]'); } catch { return []; }
}

// True when the last flow-editor lock event was flowGet with no flowRelease after it.
function flowLockHeld() {
  const allowed = readLog('allowed');
  const last = allowed[allowed.length - 1];
  return !!last && /flowGet/.test(last.why);
}

function releaseFlowLock() {
  if (!flowLockHeld()) return;
  // Loading the flow list fires flowRelease for this account's locks.
  cli(['goto', `${env().url}/flow`], { quiet: true });
  cli(['eval', 'new Promise(r => setTimeout(r, 3000))'], { quiet: true });
  if (flowLockHeld()) line(false, 'flow editor lock', 'still held — open /flow in the session to release it');
  else line(true, 'flow editor lock', 'released');
}

function blocked(args) {
  if (!sessionAlive()) { line(null, 'blocked', 'session not open'); return 0; }
  const list = readLog('blocked');
  if (!args.includes('--quiet')) {
    for (const a of readLog('allowed')) console.log(`  allowed ${a.at} ${a.why}`);
    if (flowLockHeld()) console.log('  NOTE    flow editor lock is held by the docs account — go back to /flow when done');
  }
  if (args.includes('--ack')) { runCode(ackBlockedCode); line(null, 'blocked', `cleared ${list.length} entr${list.length === 1 ? 'y' : 'ies'}`); return 0; }
  if (!list.length) { if (!args.includes('--quiet')) line(true, 'blocked', 'no write attempts'); return 0; }
  const active = list.filter(b => !b.passive);
  for (const b of list) {
    console.log(`${b.passive ? '  passive' : '  STOP   '} ${b.at} ${b.method} ${b.host}${b.path} — ${b.why}`);
  }
  if (active.length) {
    console.log(`\nREAD-ONLY GUARD TRIPPED: ${active.length} write attempt(s) were blocked.\n` +
      'STOP. Tell the user which action caused this, then wait for their go-ahead.\n' +
      'After reporting, clear with: glific-browser blocked --ack');
    return 3;
  }
  if (!args.includes('--quiet')) line(null, 'blocked', 'only passive background writes (blocked, safe to continue)');
  return 0;
}

function parseFlags(args) {
  const pos = [];
  const flags = { hide: [], masks: [], target: null };
  for (let i = 0; i < args.length; i += 1) {
    const a = args[i];
    const needsValue = ['--target', '--hide', '--mask'].includes(a);
    if (needsValue && (i + 1 >= args.length || !args[i + 1])) throw new Error(`${a} needs a value`);
    if (a === '--target') flags.target = args[++i];
    else if (a === '--hide') flags.hide.push(args[++i]);
    else if (a === '--mask') flags.masks.push(args[++i]);
    else pos.push(a);
  }
  return { pos, flags };
}

function shot(args) {
  const { pos, flags } = parseFlags(args);
  const outArg = pos[0];
  if (!outArg || !outArg.endsWith('.png')) { console.error('usage: glific-browser shot <static/img/feature/name.png> [--target <ref|css>] [--mask <css>] [--hide <css>]'); return 2; }
  const out = path.resolve(ROOT, outArg);
  if (!out.startsWith(path.join(ROOT, 'static', 'img') + path.sep)) {
    console.error('screenshots must be written under static/img/');
    return 2;
  }
  if (!sessionAlive() || !canary(env().url)) { line(false, 'session', 'not open or not guarded — run `glific-browser start`'); return 1; }
  if (blocked(['--quiet']) === 3) return 3;

  fs.mkdirSync(path.dirname(out), { recursive: true });
  const r = runCode(shotCode({ out, target: flags.target, hide: flags.hide, masks: flags.masks }));
  const res = r.result;
  if (!res || typeof res !== 'object' || !res.ok) {
    fs.rmSync(out, { force: true });
    line(false, 'shot', res && res.error ? res.error : scrub(r.raw).slice(-500));
    if (res && res.leaks) {
      for (const l of res.leaks) console.log(`  leak: ${l.kind} in ${l.where}`);
      console.log('Add --hide "<css>" for that area (or --target a tighter element) and retry.');
    }
    return 1;
  }
  if (!fs.existsSync(out)) { line(false, 'shot', 'screenshot file not written'); return 1; }

  const sha = createHash('sha256').update(fs.readFileSync(out)).digest('hex');
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  manifest[path.relative(ROOT, out)] = { sha256: sha, at: new Date().toISOString(), url: res.url, counts: res.counts };
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));

  const c = Object.entries(res.counts || {}).filter(([, v]) => v).map(([k, v]) => `${k}:${v}`).join(' ');
  line(true, 'shot', `${path.relative(ROOT, out)} (redacted ${c || 'nothing'})`);
  console.log('Now open the PNG with the Read tool and visually confirm no names, numbers or message text remain.');
  return 0;
}

function gitLines(args) {
  const r = spawnSync('git', args, { cwd: ROOT, encoding: 'utf8' });
  return r.status === 0 ? r.stdout.split('\n').filter(Boolean) : [];
}

function lint(files) {
  let ok = true;
  const changed = new Set([
    ...gitLines(['diff', '--name-only', '--diff-filter=AM', 'main...HEAD']),
    ...gitLines(['diff', '--name-only', '--diff-filter=AM']),
    ...gitLines(['diff', '--name-only', '--cached', '--diff-filter=AM']),
    ...gitLines(['ls-files', '--others', '--exclude-standard']),
  ]);
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};

  for (const f of changed) {
    if (!/^static\/img\/.*\.(png|jpe?g|gif|webp)$/i.test(f)) continue;
    const abs = path.join(ROOT, f);
    if (!fs.existsSync(abs)) continue;
    const sha = createHash('sha256').update(fs.readFileSync(abs)).digest('hex');
    if (!manifest[f] || manifest[f].sha256 !== sha) {
      line(false, 'image provenance', `${f} was not produced by \`glific-browser shot\` (unredacted?)`);
      ok = false;
    }
  }

  const docs = files.length ? files : [...changed].filter(f => /^docs\/.*\.mdx?$/.test(f));
  for (const f of docs) {
    const abs = path.resolve(ROOT, f);
    if (!fs.existsSync(abs)) continue;
    const text = fs.readFileSync(abs, 'utf8');
    for (const m of text.matchAll(/\]\((\/img\/[^)\s]+)\)|src=["'](\/img\/[^"']+)["']/g)) {
      const ref = decodeURI(m[1] || m[2]);
      if (!fs.existsSync(path.join(ROOT, 'static', ref))) {
        line(false, 'image ref', `${f} → ${ref} does not exist`);
        ok = false;
      }
    }
    // onBrokenLinks is "ignore" in docusaurus.config.js, so the build won't catch these.
    for (const m of text.matchAll(/\]\(((?!https?:|mailto:|#|\/)[^)\s]+?\.mdx?)(#[^)\s]*)?\)/g)) {
      let target;
      try { target = decodeURIComponent(m[1]); } catch { target = m[1]; }
      if (!fs.existsSync(path.resolve(path.dirname(abs), target))) {
        line(false, 'doc link', `${f} → ${m[1]} does not exist`);
        ok = false;
      }
    }
    if (/static\/img\//.test(text)) { line(false, 'image path', `${f} uses static/img/ — use /img/`); ok = false; }
    if (/user-images\.githubusercontent\.com/.test(text) && changed.has(f) && !gitLines(['ls-files', f]).length) {
      line(false, 'image host', `${f} is new but uses GitHub CDN images`);
      ok = false;
    }
  }
  if (ok) line(true, 'lint', `${docs.length} doc(s) checked`);
  return ok ? 0 : 1;
}

const [cmd, ...args] = process.argv.slice(2);
let code = 0;
try {
switch (cmd) {
  case 'preflight': code = preflight(); break;
  case 'start': code = start() ? 0 : 1; break;
  case 'status': code = status(); break;
  case 'shot': code = shot(args); break;
  case 'blocked': code = blocked(args); break;
  case 'lint': code = lint(args); break;
  case 'stop':
    if (sessionAlive()) releaseFlowLock();
    cli(['close'], { quiet: true });
    line(null, 'session', 'closed');
    break;
  default:
    console.log('usage: glific-browser <preflight|start|status|shot|blocked|lint|stop>');
    code = cmd ? 2 : 0;
}
} catch (err) {
  console.error(`glific-browser ${cmd}: ${scrub(err.message)}`);
  code = 2;
}
process.exit(code);
