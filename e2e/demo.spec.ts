import { expect, test } from "@playwright/test";

test("should have the title 'Demo | Screamer'", async ({ page }) => {
  await page.goto("/demo");
  const title = await page.title();
  expect(title).toEqual("Demo | Screamer");
});
