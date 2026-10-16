
import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import app from "./app.js";

test("GET /api/health returns a healthy response", async () => {
  const response = await request(app).get("/api/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.status, "ok");
  assert.equal(response.body.message, "UNInet API is healthy");
});

test("GET /api/health returns a request ID", async () => {
  const response = await request(app).get("/api/health");

  assert.equal(response.status, 200);
  assert.ok(response.headers["x-request-id"]);
});

test("Unknown routes return a 404 response", async () => {
  const response = await request(app).get("/api/does-not-exist");

  assert.equal(response.status, 404);
  assert.equal(response.body.status, "error");
  assert.match(response.body.message, /Route not found/);
});
