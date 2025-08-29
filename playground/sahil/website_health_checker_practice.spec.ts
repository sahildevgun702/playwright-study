// Sahil's practice file to complete the Exercise Website Health Checker 
// in playwright-study/exercises/playwright-exercises
import {test, expect} from '@playwright/test';

test('Website Health Checker', async ({ page }) => {
  const websites = [
    'https://example.com',
    'https://playwright.dev',
    'https://nonexistentwebsite.xyz'
  ];

  for (const url of websites) {
    console.log(`Checking website: ${url}`);
    try {
      await page.goto(url);
      const title = await page.title();
      console.log(`The website title is: ${title}`);
      console.log(`✅ Website is working!`);
    } catch (error) {
      console.error(`❌ Website is not working: ${url}`);
    }
  }
});