import { expect, test } from "@playwright/test";
import { readFileSync } from "fs";

test("should serve security.txt", async ({ page }) => {
  await page.goto("/.well-known/security.txt");
  const html = await page.innerText("pre");

  const expected = readFileSync("./public/.well-known/security.txt", "utf8");

  expect(html).toEqual(expected);
});

test("should serve dnt-policy.txt", async ({ page }) => {
  await page.goto("/.well-known/dnt-policy.txt");
  const html = await page.innerText("pre");

  const expected = readFileSync("./public/.well-known/dnt-policy.txt", "utf8");

  expect(html).toEqual(expected);
});
