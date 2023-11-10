import { expect, test } from "@playwright/test";

test("should have the title 'Screamer'", async ({ page }) => {
  await page.goto("/");
  const title = await page.title();
  expect(title).toEqual("Screamer");
});

test("should navigate to home when header title is clicked", async ({
  page,
}) => {
  await page.goto("/");
  await page.click("text=Screamer");
  await expect(page).toHaveURL("/");
});

test("should navigate to '/demo' when the 'Try demo' button is clicked", async ({
  page,
}) => {
  await page.goto("/");
  await page.click("text=Try demo");
  await expect(page).toHaveURL("/demo");
});
