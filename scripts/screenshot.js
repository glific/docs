#!/usr/bin/env node
/**
 * Playwright screenshot runner for Glific docs.
 *
 * Usage:
 *   node scripts/screenshot.js flows     — run one recipe by slug
 *   node scripts/screenshot.js           — run all recipes in scripts/recipes/
 *
 * Requires: playwright, js-yaml, dotenv (install with: yarn add --dev playwright js-yaml)
 * Also run:  npx playwright install chromium
 *
 * Credentials (.env at repo root, gitignored):
 *   GLIFIC_URL=https://glific.test:3000
 *   GLIFIC_PHONE=+91XXXXXXXXXX
 *   GLIFIC_PASSWORD=your_password
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

const GLIFIC_URL = (process.env.GLIFIC_URL || 'https://glific.test:3000').replace(/\/$/, '');
const GLIFIC_PHONE = process.env.GLIFIC_PHONE;
const GLIFIC_PASSWORD = process.env.GLIFIC_PASSWORD;

if (!GLIFIC_PHONE || !GLIFIC_PASSWORD) {
  console.error('Missing GLIFIC_PHONE or GLIFIC_PASSWORD in .env');
  process.exit(1);
}

async function authenticate(page) {
  console.log('  Authenticating...');
  await page.goto(`${GLIFIC_URL}/login`, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-testid="AuthContainer"]', { timeout: 10000 });

  // PhoneInput renders a text input with name="phoneNumber"
  await page.fill('input[name="phoneNumber"]', GLIFIC_PHONE);
  await page.fill('input[name="password"]', GLIFIC_PASSWORD);
  await page.click('[data-testid="SubmitButton"]');

  // Wait for redirect to /chat after successful login
  await page.waitForURL(`${GLIFIC_URL}/chat**`, { timeout: 15000 });
  console.log('  Authenticated.');
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
    await page.screenshot({ path: snapPath, fullPage: false });
    console.log(`    ✓ ${step.snap}`);
  }
}

async function runRecipe(recipePath) {
  const content = fs.readFileSync(recipePath, 'utf-8');
  const recipe = yaml.load(content);

  const outputDir = path.join(STATIC_IMG, recipe.output_dir);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\nRecipe: ${recipe.name}`);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  try {
    await authenticate(page);

    for (const flow of recipe.flows) {
      console.log(`  Flow: ${flow.name} — ${flow.description}`);
      try {
        for (const step of flow.steps) {
          await runStep(page, step, outputDir);
        }
      } catch (err) {
        if (flow.required) {
          throw new Error(`Required flow "${flow.name}" failed: ${err.message}`);
        } else {
          console.warn(`  Warning: optional flow "${flow.name}" skipped — ${err.message}`);
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`  Done → static/img/${recipe.output_dir}/`);
}

async function main() {
  const arg = process.argv[2];

  let recipes;
  if (arg) {
    const recipePath = path.join(RECIPES_DIR, `${arg}.yaml`);
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
    await runRecipe(recipePath);
  }

  console.log('\nAll done.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
