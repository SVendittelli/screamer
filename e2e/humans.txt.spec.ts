import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("should serve humans.txt", async ({ page }) => {
  await page.goto("/humans.txt");
  const html = await page.innerText("pre");

  const expected = readFileSync("./public/humans.txt", "utf8");

  expect(html).toEqual(expected);
});
