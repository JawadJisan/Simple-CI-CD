const { test, expect } = require("@playwright/test");

test("example API test", async ({ request }) => {
  const response = await request.get("https://hirelocal.airepro.in/");
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.success).toBe(true);
  expect(data.message).toBe("Hello from the hire server");
});
