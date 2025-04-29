const { test, expect } = require('@playwright/test');

test('Example: Google Search', async ({ page }) => {
  // Arrange
  await page.goto('https://www.google.com');

  // Act
  await page.locator('textarea[name="q"]').click();
  await page.locator('textarea[name="q"]').fill('Weather today');
  await page.keyboard.press('Enter');

  // Assert
  await expect(page).toHaveTitle(/Weather/);
});
