// Steve's practice file to complete the Exercise Website Health Checker 
// in playwright-study/exercises/playwright-exercises

//testing


import { test, expect } from '@playwright/test';

//complete login
test('test', async ({ browser }) => {
  // Create context with location permissions granted
  const context = await browser.newContext({
    permissions: ['geolocation'],
    geolocation: { latitude: 43.6832, longitude: -79.3832 } // Toronto coordinates
  });

  const page = await context.newPage();
  await page.goto('https://tsb.uat.thescore.bet/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Log In', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('stephen.maxwell+cau2@thescore.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678a!');
  await page.getByRole('button', { name: 'Log In' }).click();


// eligble to play - confirm eligibility in iframe
  await page.locator('iframe[title="Login"]').contentFrame().getByRole('button', { name: 'Yes, Continue' }).click();
  
  
  // Verify user is logged in tapping wallet
   await page.getByTestId('logged-in-nav-account-btn').click();
    await page.getByRole('heading', { name: 'Wallet' }).click();



  //tap NFL comp
  await page.getByRole('link', { name: 'NFL' }).click();
  
  // Verify the title text
  await expect(page.getByTestId('title')).toHaveText('NFL');
  
  // Alternative ways to verify title text:
  // 1. Check if title contains specific text
  // await expect(page.getByTestId('title')).toContainText('NFL');
  
  // 2. Get the text and verify it
  // const titleText = await page.getByTestId('title').textContent();
  // expect(titleText).toBe('Expected Title Text');
  
  // 3. Verify title is visible and has text
  // await expect(page.getByTestId('title')).toBeVisible();
  // await expect(page.getByTestId('title')).not.toBeEmpty();

// Navigate back to Home
 await page.getByRole('button', { name: 'Toggle Menu' }).click();
  await page.getByLabel('Home').click();

  // Close the context
  await context.close();
});