import { describe, it, expect } from "vitest";
import isHttpsUrl from "@/isHttpsUrl";

describe("valid", () => {
  it("URL", () => {
    expect(isHttpsUrl("https://example.com")).toBe(true);
  });

  it("URL with port", () => {
    expect(isHttpsUrl("https://example.com:80")).toBe(true);
  });

  it("URL with subdomain", () => {
    expect(isHttpsUrl("https://www.example.com")).toBe(true);
  });

  it("URL with subdomain and port", () => {
    expect(isHttpsUrl("https://www.example.com:80")).toBe(true);
  });

  it("URL with subdomain, port and path", () => {
    expect(isHttpsUrl("https://www.example.com:80/example-path")).toBe(true);
  });

  it("URL with subdomain, port and path to the file", () => {
    expect(
      isHttpsUrl("https://www.example.com:80/example-path/file.html")
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file and query", () => {
    expect(
      isHttpsUrl("https://www.example.com:80/example-path/file.html?query=1")
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file and queries", () => {
    expect(
      isHttpsUrl(
        "https://www.example.com:80/example-path/file.html?query=1&query=2"
      )
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file, queries and anchor", () => {
    expect(
      isHttpsUrl(
        "https://www.example.com:80/example-path/file.html?query=1&query=2#anchor"
      )
    ).toBe(true);
  });
});

describe("unvalid", () => {
  it("just HTTPS port", () => {
    expect(isHttpsUrl("https:")).toBe(false);
  });

  it("other protocol", () => {
    expect(isHttpsUrl("http://example.com")).toBe(false);
  });

  /* Common unvalid values */

  it("number", () => {
    // @ts-ignore
    expect(isHttpsUrl(100)).toBe(false);
  });

  it("empty string", () => {
    expect(isHttpsUrl("")).toBe(false);
  });

  it("non url string", () => {
    expect(isHttpsUrl("example")).toBe(false);
  });

  it("array", () => {
    // @ts-ignore
    expect(isHttpsUrl([])).toBe(false);
  });

  it("object", () => {
    // @ts-ignore
    expect(isHttpsUrl({})).toBe(false);
  });

  it("undefined", () => {
    // @ts-ignore
    expect(isHttpsUrl(undefined)).toBe(false);
  });

  it("null", () => {
    // @ts-ignore
    expect(isHttpsUrl(null)).toBe(false);
  });

  it("NaN", () => {
    // @ts-ignore
    expect(isHttpsUrl(NaN)).toBe(false);
  });
});
