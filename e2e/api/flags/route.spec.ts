import { expect, test } from "@playwright/test";

test("should return the feature flags successfully", async ({ request }) => {
  const flags = await request.get("/api/flags");
  expect(flags.ok()).toBeTruthy();
  expect(flags.status()).toBe(200);

  // Note: playwright tests are run against live environments
  expect(await flags.json()).toEqual(
    expect.objectContaining({
      beta: expect.any(Boolean),
      maintenance: expect.any(Boolean),
    }),
  );
});
