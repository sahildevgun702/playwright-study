// Exercise 1: Open a Web Page
// We will open a browser and visit a website.

import { test, expect } from '@playwright/test';

// The 'test' function is used to define a test case.
test('Open Google homepage', async ({ page }) => {
  // 'page' is like a browser tab. We can use it to interact with websites.

  // This line tells Playwright to go to Google's homepage.
  await page.goto('https://www.google.com');

  // Let's check if the page's title contains the word 'Google'.
  // 'expect' is used to make sure something is true.
  await expect(page).toHaveTitle(/Google/);

  // That's it! You have just automated opening a web page and checking its title.
});

// Try running this test. If it works, you have completed your first automation exercise.
// If you want, change the URL to another website and see what happens.
