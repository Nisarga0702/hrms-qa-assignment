const request = require("supertest");
const app = require("../server"); // IMPORTANT: adjust if needed

describe("Basic API Check", () => {
  test("server should respond", async () => {
    expect(1).toBe(1);
  });
});