import { describe, it, expect } from "vitest";
import isUrl from "@/isUrl";

describe("valid", () => {
  /* HTTP URL */

  it("URL", () => {
    expect(isUrl("http://example.com")).toBe(true);
  });

  it("URL with port", () => {
    expect(isUrl("http://example.com:80")).toBe(true);
  });

  it("URL with subdomain", () => {
    expect(isUrl("http://www.example.com")).toBe(true);
  });

  it("URL with subdomain and port", () => {
    expect(isUrl("http://www.example.com:80")).toBe(true);
  });

  it("URL with subdomain, port and path", () => {
    expect(isUrl("http://www.example.com:80/example-path")).toBe(true);
  });

  it("URL with subdomain, port and path to the file", () => {
    expect(isUrl("http://www.example.com:80/example-path/file.html")).toBe(
      true
    );
  });

  it("URL with subdomain, port, path to the file and query", () => {
    expect(
      isUrl("http://www.example.com:80/example-path/file.html?query=1")
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file and queries", () => {
    expect(
      isUrl("http://www.example.com:80/example-path/file.html?query=1&query=2")
    ).toBe(true);
  });

  it("URL with subdomain, port, path to the file, queries and anchor", () => {
    expect(
      isUrl(
        "http://www.example.com:80/example-path/file.html?query=1&query=2#anchor"
      )
    ).toBe(true);
  });

  /* Mailto URL */

  it("mailto URL", () => {
    expect(isUrl("mailto:user@example.com")).toBe(true);
  });

  it("mailto URL with three email addresses", () => {
    expect(
      isUrl(
        "mailto:user@example.com, second-user@example.com, third-user@example.com"
      )
    ).toBe(true);
  });

  it("mailto URL and headers", () => {
    expect(
      isUrl(
        "mailto:user@example.com?subject=This%20is%20the%20subject&cc=second_user@example.com&body=This%20is%20the%20body"
      )
    ).toBe(true);
  });
});

describe("unvalid", () => {
  /* Common unvalid values */

  it("number", () => {
    // @ts-ignore
    expect(isUrl(100)).toBe(false);
  });

  it("empty string", () => {
    expect(isUrl("")).toBe(false);
  });

  it("non URL string", () => {
    expect(isUrl("example")).toBe(false);
  });

  it("array", () => {
    // @ts-ignore
    expect(isUrl([])).toBe(false);
  });

  it("object", () => {
    // @ts-ignore
    expect(isUrl({})).toBe(false);
  });

  it("undefined", () => {
    // @ts-ignore
    expect(isUrl(undefined)).toBe(false);
  });

  it("null", () => {
    // @ts-ignore
    expect(isUrl(null)).toBe(false);
  });

  it("NaN", () => {
    // @ts-ignore
    expect(isUrl(NaN)).toBe(false);
  });
});
