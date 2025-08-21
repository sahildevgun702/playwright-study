// Playground Example: You can copy and modify this file.
// This is a safe space to experiment with Playwright

import { test, expect } from '@playwright/test';

test('Playground - Try your ideas here!', async ({ page }) => {
  // Example: Visit any website you want to test
  await page.goto('https://example.com');
  
  // Try different assertions
  await expect(page).toHaveTitle(/Example/);
  
  // Add your own experiments below:
  // - Try clicking buttons
  // - Fill out forms  
  // - Take screenshots
  // - Test different websites
  
  console.log('🎭 This is your playground - experiment freely!');
});

// Add more test cases here:
// test('My second experiment', async ({ page }) => {
//   // Your code here
// });
