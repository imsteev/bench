import { expect, test } from "bun:test";
import { Mux } from "./mux";

const tUrl = (path: string) => `http://example.com${path}`;

test("Mux", () => {
  const m = new Mux();
  m.get("/ids/(?<id>\\d+)", (_, path) => {
    return new Response(JSON.stringify(path));
  });
  assertPathParams(m, "/ids/0", { id: "0" });
  assertPathParams(m, "/ids/00", { id: "00" }); // we don't parse ints (yet)
  assertPathParams(m, "/ids/123", { id: "123" });
  assertBadRequest(m, "/ids/-123");
  assertBadRequest(m, "/ids/");
});

const assertPathParams = (
  mux: Mux,
  path: string,
  expectedParams?: Record<string, string>
) =>
  expect(
    Promise.resolve(mux.handle(new Request(tUrl(path)))).then((r) => r.json())
  ).resolves.toEqual(expectedParams);

const assertBadRequest = (mux: Mux, path: string) =>
  expect(
    Promise.resolve(mux.handle(new Request(tUrl(path)))).then((r) => r.text())
  ).resolves.toBe("bad request");
