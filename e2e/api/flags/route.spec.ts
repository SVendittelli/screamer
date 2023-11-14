import { expect, test } from "@playwright/test";

test("should return the feature flags successfully", async ({ request }) => {
  const flags = await request.get("/api/flags");
  expect(flags.ok()).toBeTruthy();
  expect(flags.status()).toBe(200);
  // Note, playwright tests are run against the preview environment. Tests will fail if the preview feature flags are altered.
  expect(await flags.json()).toEqual({
    beta: true,
    maintenance: false,
  });
});
