import { describe, expect, it } from "vitest";

import { dynamic, GET } from "../app/api/health/route";

describe("GET /api/health", () => {
  it("returns an uncached healthy response", async () => {
    const response = GET();

    expect(dynamic).toBe("force-dynamic");
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/json");
    expect(response.headers.get("cache-control")).toBe("no-store, max-age=0");
    await expect(response.json()).resolves.toEqual({
      service: "matangi",
      status: "ok",
    });
  });
});
