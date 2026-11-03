import { test, expect } from '@playwright/test';

// Freeze the calendar month so fixture coverage does not depend on the execution date.
test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-11-03T06:00:00Z'));
  await page.goto('/reservations');
});

test('calendar marks booked dates and opens sorted customer details in a drawer', async ({
  page,
}) => {
  const date = page.getByRole('button', {
    name: 'Thursday, November 5, 2026, 2 active reservations',
    exact: true,
  });
  await expect(date).toContainText('2 booked');
  await page.screenshot({ path: 'test-results/reservation-calendar-desktop.png' });
  await date.click();
  const drawer = page.getByRole('dialog');
  await expect(drawer).toHaveAccessibleName('Thursday, November 5, 2026');
  const bookings = drawer.getByRole('listitem');
  await expect(bookings).toHaveCount(2);
  await expect(bookings.nth(0)).toContainText('Jennifer Brooks');
  await expect(bookings.nth(0)).toContainText('10:45 AM – 12:15 PM');
  await expect(bookings.nth(1)).toContainText('Sadia Rahman');
  await expect(bookings.nth(1)).toContainText('2:00 PM – 3:30 PM');
  await expect(drawer.getByRole('link', { name: '+1 212 555 0104', exact: true })).toHaveAttribute(
    'href',
    'tel:+12125550104',
  );
  await page.keyboard.press('Escape');
  await expect(drawer).toHaveCount(0);
  await expect(date).toBeFocused();
});

test('month navigation, cancelled dates, empty dates and search work', async ({ page }) => {
  await page.getByRole('button', { name: 'Next month', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'December 2026', exact: true })).toBeVisible();
  await page
    .getByRole('button', { name: 'Tuesday, December 15, 2026, 1 active reservations', exact: true })
    .click();
  await expect(page.getByRole('dialog')).toContainText('John Doe');
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Today', exact: true }).click();
  await page
    .getByRole('button', {
      name: 'Saturday, November 7, 2026, 0 active reservations, cancelled bookings only',
      exact: true,
    })
    .click();
  await expect(page.getByRole('dialog')).toContainText('Daniel Mitchell');
  await expect(page.getByRole('dialog')).toContainText('cancelled');
  await page.keyboard.press('Escape');
  await page
    .getByRole('button', { name: 'Tuesday, November 10, 2026, 0 active reservations', exact: true })
    .click();
  await expect(
    page.getByRole('dialog').getByRole('heading', { name: 'No reservations', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Close reservations drawer', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search reservations' }).fill('0113');
  await page
    .getByRole('button', { name: 'Thursday, November 5, 2026, 1 active reservations', exact: true })
    .click();
  await expect(page.getByRole('dialog').getByRole('listitem')).toHaveCount(1);
  await expect(page.getByRole('dialog')).toContainText('Sadia Rahman');
});

test('mobile calendar and drawer fit the viewport and Add New still opens', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole('button', { name: 'Thursday, November 5, 2026, 2 active reservations', exact: true })
    .click();
  await expect(
    page.getByRole('dialog').getByRole('link', { name: '+1 212 555 0104', exact: true }),
  ).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  await expect.poll(async () => {
    const box = await page.getByRole('dialog').boundingBox();
    return box ? Math.round(box.x) : -1;
  }).toBe(0);
  await page.screenshot({ path: 'test-results/reservation-drawer-mobile.png' });
  await page.keyboard.press('Escape');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  await page.getByRole('button', { name: 'Add New', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
});
