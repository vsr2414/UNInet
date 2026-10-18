
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


test("Oversized JSON requests return 413", async () => {
  const response = await request(app)
    .post("/")
    .set("Content-Type", "application/json")
    .send({ data: "x".repeat(11 * 1024) });

  assert.equal(response.status, 413);
  assert.equal(response.body.status, "error");
  assert.equal(response.body.message, "Request body is too large");
});


test("GET /api returns API information", async () => {
  const response = await request(app).get("/api");

  assert.equal(response.status, 200);
  assert.equal(response.body.name, "UNInet API");
  assert.equal(response.body.version, "1.0.0");
  assert.equal(
    response.body.endpoints.health,
    "/api/health"
  );
});

