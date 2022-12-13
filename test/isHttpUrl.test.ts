import { describe, it, expect } from "vitest";
import isHttpUrl from "@/isHttpUrl";

describe("valid", () => {
  /* HTTP URL */
  it("URL", () => {
    expect(isHttpUrl("http://example.com")).toBe(true);
  });

  it("URL with port", () => {
    expect(isHttpUrl("http://example.com:80")).toBe(true);
  });

  it("URL with subdomain", () => {
    expect(isHttpUrl("http://www.example.com")).toBe(true);
  });

  it("URL with subdomain and port", () => {
    expect(isHttpUrl("http://www.example.com:80")).toBe(true);
  });

  it("URL with subdomain, port and path", () => {
    expect(isHttpUrl("http://www.example.com:80/example-path")).toBe(true);
  });

  it("URL with subdomain, port and path to the file", () => {
    expect(isHttpUrl("http://www.example.com:80/example-path/file.html")).toBe(
      true
    );
  });

  it("URL with subdomain, port, path to the file and query", () => {
    expect(
      isHttpUrl("http://www.example.com:80/example-path/file.html?query=1")
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file and queries", () => {
    expect(
      isHttpUrl(
        "http://www.example.com:80/example-path/file.html?query=1&query=2"
      )
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file, queries and anchor", () => {
    expect(
      isHttpUrl(
        "http://www.example.com:80/example-path/file.html?query=1&query=2#anchor"
      )
    ).toBe(true);
  });
});

describe("unvalid", () => {
  it("just HTTPS protocol", () => {
    // @ts-ignore
    expect(isHttpUrl("https://")).toBe(false);
  });

  it("other protocol", () => {
    expect(isHttpUrl("https://example.com")).toBe(false);
  });

  /* Common unvalid values */

  it("number", () => {
    // @ts-ignore
    expect(isHttpUrl(100)).toBe(false);
  });

  it("empty string", () => {
    expect(isHttpUrl("")).toBe(false);
  });

  it("non url string", () => {
    expect(isHttpUrl("example")).toBe(false);
  });

  it("array", () => {
    // @ts-ignore
    expect(isHttpUrl([])).toBe(false);
  });

  it("object", () => {
    // @ts-ignore
    expect(isHttpUrl({})).toBe(false);
  });

  it("undefined", () => {
    // @ts-ignore
    expect(isHttpUrl(undefined)).toBe(false);
  });

  it("null", () => {
    // @ts-ignore
    expect(isHttpUrl(null)).toBe(false);
  });

  it("NaN", () => {
    // @ts-ignore
    expect(isHttpUrl(NaN)).toBe(false);
  });
});
