import { test, expect } from '@playwright/test';

test.describe('GUI', () => {
  //this is good
  test('gui test-1', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    const pageTitle = await page.title();
    expect(pageTitle).toEqual('STORE');
  });

  //this is asserting that promise is equal to STORE
  test('gui test-2', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    const pageTitle = page.title();
    expect(pageTitle).toEqual('STORE');
  });

  test('test name', async function f({ page }) {
    await page.goto('https://demoblaze.com/');
    const pageTitle = page.title();
    expect(pageTitle).toEqual('STORE');
  })

  //this is good
  test('gui test-3', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    console.log(page.title());
    await expect(page).toHaveTitle('STORE');
  });

  test('get Attribute', async ({ page }) => {
    await page.goto("http://www.yahoo.com")
    const attribute = await page.locator(".class").getAttribute('value')
    console.log(attribute)
  })

});



// Asynchronous Matchers: These matchers return a promise and need await to ensure that the test waits for the assertion to complete. Common examples include:

// expect(page).toHaveTitle()
// expect(page).toHaveURL()
// expect(locator).toHaveText()
// expect(locator).toBeVisible()
// Synchronous Matchers: These matchers do not return a promise and do not require await. Examples include:

// expect(value).toEqual()
// expect(array).toContain()
