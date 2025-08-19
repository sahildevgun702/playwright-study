/**
 * Example Playwright test file for manual testers.
 */
import { test, expect } from '@playwright/test';

// Test suite (like a TestNG class)
test.describe('Basic suite', () => {
  
  // beforeAll hook (runs once before all tests)
  test.beforeAll(async ({}, testInfo) => {
    // Setup steps before the suite runs
    // e.g., initialize resources, log test start
  });

  // afterAll hook (runs once after all tests)
  test.afterAll(async ({}, testInfo) => {
    // Cleanup steps after the suite runs
    // e.g., close connections, log test end
  });

  // beforeEach hook (runs before every test)
  test.beforeEach(async ({ page }, testInfo) => {
    // Each test gets a fresh browser page
    // Useful for navigation, login, or setup
    await page.goto('https://example.com');
  });

  // afterEach hook (runs after every test)
  test.afterEach(async ({}, testInfo) => {
    // Teardown steps after each test
    // e.g., clear data, logout
  });

  // Example test case
  test('should have correct page title', async ({ page }) => {
    // Expect page title to be "Example Domain"
    await expect(page).toHaveTitle('Example Domain');
  });

  // Add more test cases below as needed
});