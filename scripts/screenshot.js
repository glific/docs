#!/usr/bin/env node
/**
 * Playwright screenshot + video runner for Glific docs.
 *
 * Usage:
 *   node scripts/screenshot.js flows          — screenshots only
 *   node scripts/screenshot.js flows --video  — screenshots + video recording
 *   node scripts/screenshot.js --video        — all recipes with video
 *
 * Requires: playwright, js-yaml, dotenv (install with: yarn add --dev playwright js-yaml)
 * Also run:  npx playwright install chromium
 *
 * Credentials (.env at repo root, gitignored):
 *   GLIFIC_URL=https://glific.test:3000
 *   GLIFIC_PHONE=+91XXXXXXXXXX
 *   GLIFIC_PASSWORD=your_password
 *
 * Videos are saved to static/videos/{output_dir}/ as .webm files.
 * Use in docs: <video controls src="/videos/{output_dir}/{flow_name}.webm" />
 */

'use strict';

const { chromium } = require('playwright');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const ROOT = path.join(__dirname, '..');
const RECIPES_DIR = path.join(__dirname, 'recipes');
const STATIC_IMG = path.join(ROOT, 'static', 'img');
const STATIC_VIDEO = path.join(ROOT, 'static', 'videos');

const GLIFIC_URL = (process.env.GLIFIC_URL || 'https://glific.test:3000').replace(/\/$/, '');
const GLIFIC_PHONE = process.env.GLIFIC_PHONE;
const GLIFIC_PASSWORD = process.env.GLIFIC_PASSWORD;

if (!GLIFIC_PHONE || !GLIFIC_PASSWORD) {
  console.error('Missing GLIFIC_PHONE or GLIFIC_PASSWORD in .env');
  process.exit(1);
}

const DIAL_CODE = '91';

// PhoneInput prepends the dial code asynchronously after mount and re-derives it
// from whatever is already in the field, so GLIFIC_PHONE must be reduced to its
// local part and the field must never be cleared before typing into it.
function localPhone(raw) {
  return raw.replace(/\D/g, '').slice(-10);
}

async function fillPhone(page, local) {
  const phoneInput = page.locator('input[name="phoneNumber"]');
  await phoneInput.waitFor({ state: 'visible' });

  // Dial code lands after mount — wait for a leading "+<digit>" before typing,
  // otherwise the value ends up with no dial code at all.
  await page.waitForFunction(() => {
    const el = document.querySelector('input[name="phoneNumber"]');
    return !!el && /^\+\d/.test(el.value);
  }, { timeout: 5000 });

  await phoneInput.click();
  await phoneInput.press('End');
  await phoneInput.pressSequentially(local);

  const value = await phoneInput.inputValue();
  if (value !== `+${DIAL_CODE}${local}`) {
    throw new Error(`Phone field shows "${value}", expected "+${DIAL_CODE}${local}"`);
  }
}

async function authenticate(browser) {
  console.log('  Authenticating...');
  const local = localPhone(GLIFIC_PHONE);

  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await context.newPage();
    try {
      await page.goto(`${GLIFIC_URL}/login`, { waitUntil: 'networkidle' });
      await page.waitForSelector('[data-testid="AuthContainer"]', { timeout: 10000 });

      await fillPhone(page, local);
      await page.fill('input[name="password"]', GLIFIC_PASSWORD);
      await page.click('[data-testid="SubmitButton"]');

      // First load after a deploy can be slow.
      await page.waitForURL(`${GLIFIC_URL}/chat**`, { timeout: 45000 });

      const storageState = await context.storageState();
      await context.close();
      console.log('  Authenticated.');
      return storageState;
    } catch (err) {
      lastErr = err;
      await context.close();
      console.warn(`  Login attempt ${attempt}/3 failed: ${err.message}`);
    }
  }
  throw new Error(`Authentication failed after 3 attempts: ${lastErr.message}`);
}

async function runStep(page, step, outputDir) {
  if (step.navigate !== undefined) {
    await page.goto(`${GLIFIC_URL}${step.navigate}`, { waitUntil: 'networkidle' });

  } else if (step.wait !== undefined) {
    await page.waitForSelector(step.wait, { timeout: 8000 });

  } else if (step.wait_text !== undefined) {
    await page.waitForFunction(
      (text) => document.body.innerText.includes(text),
      step.wait_text,
      { timeout: 8000 }
    );

  } else if (step.click !== undefined) {
    await page.click(step.click);

  } else if (step.sleep !== undefined) {
    await page.waitForTimeout(step.sleep);

  } else if (step.snap !== undefined) {
    const snapPath = path.join(outputDir, step.snap);
    if (step.element) {
      // Crop to a specific element — hides sidebar, nav, and unrelated UI
      await page.locator(step.element).screenshot({ path: snapPath });
    } else {
      await page.screenshot({ path: snapPath, fullPage: false });
    }
    console.log(`    ✓ ${step.snap}${step.element ? ` (cropped to ${step.element})` : ''}`);
  }
}

async function runRecipe(recipePath, recordVideo) {
  const content = fs.readFileSync(recipePath, 'utf-8');
  const recipe = yaml.load(content);

  const imgDir = path.join(STATIC_IMG, recipe.output_dir);
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

  const videoDir = path.join(STATIC_VIDEO, recipe.output_dir);
  if (recordVideo && !fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

  console.log(`\nRecipe: ${recipe.name}${recordVideo ? ' (+ video)' : ''}`);

  const browser = await chromium.launch({ headless: false });

  // Log in once for the whole recipe; every flow's context opens already
  // signed in via the captured storageState instead of re-authenticating.
  const storageState = await authenticate(browser);

  for (const flow of recipe.flows) {
    // Each flow gets its own context so videos are saved per-flow
    const contextOptions = {
      viewport: { width: 1440, height: 900 },
      ignoreHTTPSErrors: true,
      storageState,
    };
    if (recordVideo) {
      contextOptions.recordVideo = {
        dir: videoDir,
        size: { width: 1440, height: 900 },
      };
    }

    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();

    console.log(`  Flow: ${flow.name} — ${flow.description}`);
    try {
      for (const step of flow.steps) {
        await runStep(page, step, imgDir);
      }

      // Rename the auto-generated video to flow name
      if (recordVideo) {
        const videoPath = await page.video().path();
        await context.close();
        const dest = path.join(videoDir, `${flow.name}.webm`);
        fs.renameSync(videoPath, dest);
        console.log(`    ✓ video: ${flow.name}.webm`);
      } else {
        await context.close();
      }
    } catch (err) {
      await context.close();
      if (flow.required) {
        throw new Error(`Required flow "${flow.name}" failed: ${err.message}`);
      } else {
        console.warn(`  Warning: optional flow "${flow.name}" skipped — ${err.message}`);
      }
    }
  }

  await browser.close();
  console.log(`  Done → static/img/${recipe.output_dir}/${recordVideo ? ` + static/videos/${recipe.output_dir}/` : ''}`);
}

async function main() {
  const args = process.argv.slice(2);
  const recordVideo = args.includes('--video');
  const slug = args.find((a) => !a.startsWith('--'));

  let recipes;
  if (slug) {
    const recipePath = path.join(RECIPES_DIR, `${slug}.yaml`);
    if (!fs.existsSync(recipePath)) {
      console.error(`Recipe not found: ${recipePath}`);
      process.exit(1);
    }
    recipes = [recipePath];
  } else {
    recipes = fs.readdirSync(RECIPES_DIR)
      .filter((f) => f.endsWith('.yaml'))
      .map((f) => path.join(RECIPES_DIR, f));
  }

  for (const recipePath of recipes) {
    await runRecipe(recipePath, recordVideo);
  }

  console.log('\nAll done.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
