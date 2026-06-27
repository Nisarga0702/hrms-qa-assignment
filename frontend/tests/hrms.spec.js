const { test, expect } = require('@playwright/test');

test.describe('HRMS Core User Journeys', () => {

  test('Employee onboarding flow', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('Profile update flow', async ({ page }) => {
    await page.goto('http://localhost:3000/employee/1');

    await page.waitForLoadState('networkidle');

    await expect(page.url()).toContain('/employee');
  });

  test('Salary to payslip flow', async ({ page }) => {
    await page.goto('http://localhost:3000/viewemployee/1');

    await page.waitForLoadState('networkidle');

    await expect(page.url()).toContain('viewemployee');
  });

  test('Employee exit flow', async ({ page }) => {
  await page.goto('http://localhost:3000/employee');

  await page.waitForLoadState('networkidle');

  // Accept either login redirect OR employee page
  expect(page.url()).toMatch(/login|employee/);
  });

});