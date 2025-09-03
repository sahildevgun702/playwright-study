import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tsb.staging.thescore.bet/');
  await page.getByRole('button', { name: 'Log In', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('annafiani.qhasanah@thescore.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@02');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('iframe[title="Login"]').contentFrame().getByRole('button', { name: 'Yes, Continue' }).click();
  await page.getByRole('button', { name: 'Share Location' }).click();

await expect(page).toHaveURL('https://tsb.staging.thescore.bet/');   
await expect(page.getByRole('button',{name:'logged-in-nav-account-btn'})).toBeVisible();
console.log('Login test passed successfully');
});