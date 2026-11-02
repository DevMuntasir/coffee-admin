import { test, expect } from '@playwright/test';
import manifest from '../../src/app/page-manifest.json' with { type: 'json' };
for (const route of manifest) {
  test(`${route.slug} renders without browser errors or missing assets`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(`/${route.slug}`);
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByText('Loading workspace…')).toHaveCount(0);
    await expect(page.getByText('This screen could not be loaded')).toHaveCount(0);
    await page.locator('img').evaluateAll(async (images) => {
      await Promise.all(
        images.map((image) =>
          image.complete
            ? undefined
            : new Promise<void>((resolve) => {
                image.onload = () => resolve();
                image.onerror = () => resolve();
              }),
        ),
      );
    });
    const brokenImages = await page
      .locator('img')
      .evaluateAll((images) =>
        images.filter((image) => !image.naturalWidth).map((image) => image.src),
      );
    expect(brokenImages).toEqual([]);
    expect(errors).toEqual([]);
  });
}
test('legacy routes resolve and dialogs open and close', async ({ page }) => {
  await page.goto('/categories.html');
  await expect(page).toHaveURL(/\/categories$/);
  await page.getByRole('button', { name: 'Add New', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});
test('theme and mobile navigation work without page overflow', async ({ page }) => {
  await page.goto('/dashboard');
  await page.getByRole('button', { name: 'Use dark theme' }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Open navigation' }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: 'Management', exact: true }).click();
  await dialog.getByRole('link', { name: 'Categories', exact: true }).click();
  await expect(page).toHaveURL(/\/categories$/);
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('heading', { name: /^Categories/ })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
});

test('visual previews and mobile screen sizing', async ({ page }) => {
  for (const slug of [
    'dashboard',
    'pos',
    'categories',
    'login',
    'orders',
    'reservations',
    'table',
    'role-permission',
  ]) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`/${slug}`);
    await expect(page.getByText('Loading workspace…')).toHaveCount(0);
    await page.screenshot({ path: `test-results/previews/${slug}-desktop.png` });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: `test-results/previews/${slug}-mobile.png` });
    const overflow = await page.evaluate(() => ({
      width: window.innerWidth,
      scroll: document.documentElement.scrollWidth,
      elements: [...document.querySelectorAll('main *')]
        .filter((el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.right > window.innerWidth &&
            getComputedStyle(el).position !== 'absolute' &&
            !el.closest('.overflow-x-auto')
          );
        })
        .slice(0, 12)
        .map((el) => `${el.tagName}.${el.className}`),
    }));
    expect(overflow.scroll, `${slug}: ${JSON.stringify(overflow)}`).toBeLessThanOrEqual(
      overflow.width,
    );
  }
});

test('original two-column sidebar dimensions and category selection', async ({ page }) => {
  await page.goto('/dashboard');
  const sidebar = page.getByRole('complementary', { name: 'Restaurant sidebar' });
  await expect(sidebar).toBeVisible();
  await expect(sidebar.getByRole('button', { name: 'Dashboard', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  expect(
    await sidebar.locator('.sidebar-minibar').evaluate((el) => el.getBoundingClientRect().width),
  ).toBe(62);
  expect(
    await sidebar.locator('.sidebar-menu-panel').evaluate((el) => el.getBoundingClientRect().width),
  ).toBe(214);
  expect(
    await sidebar
      .locator('.sidebar-store-header')
      .evaluate((el) => el.getBoundingClientRect().height),
  ).toBe(58);
  await expect(
    sidebar.getByRole('navigation', { name: 'Navigation categories' }).getByRole('button'),
  ).toHaveCount(6);
  await expect(sidebar.getByRole('heading', { name: 'MAIN', exact: true })).toBeVisible();
  await expect(sidebar.getByRole('link', { name: 'Reservation', exact: true })).toBeVisible();
  await expect(sidebar.getByRole('link', { name: 'Categories', exact: true })).toHaveCount(0);
  await page.evaluate(() => document.fonts.ready);
  await sidebar.screenshot({ path: 'test-results/previews/sidebar-original-layout.png' });
  await sidebar.getByRole('button', { name: 'Management', exact: true }).click();
  await expect(
    sidebar.getByRole('heading', { name: 'MENU MANAGEMENT', exact: true }),
  ).toBeVisible();
  await sidebar.getByRole('link', { name: 'Categories', exact: true }).click();
  await expect(page.getByRole('heading', { name: /^Categories/ })).toBeVisible();
  await sidebar.getByRole('button', { name: 'Collapse navigation', exact: true }).click();
  expect(await sidebar.evaluate((el) => el.getBoundingClientRect().width)).toBe(130);
  await sidebar.getByRole('button', { name: 'Expand navigation', exact: true }).click();
  expect(await sidebar.evaluate((el) => el.getBoundingClientRect().width)).toBe(276);
});
