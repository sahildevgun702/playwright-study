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



  

  // Close the context
  await context.close();
});