import { expect, test } from "@playwright/test";

test("should have the title 'Screamer'", async ({ page }) => {
  await page.goto("/");
  const title = await page.title();
  expect(title).toEqual("Screamer");
});

test("should navigate to '/demo' when the 'Demo' button is clicked", async ({
  page,
}) => {
  await page.goto("/");
  await page.click("text=Demo");
  await expect(page).toHaveURL("/demo");
  // The new page should contain an h1 with "Demo"
  await expect(page.locator("h1")).toContainText("Demo");
});
