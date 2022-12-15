import { describe, it, expect } from "vitest";
import isChromeUrl from "@/isChromeUrl";

describe("valid", () => {
  // In Chrome it redirects to chtome://version
  it("just Chrome protocol", () => {
    // @ts-ignore
    expect(isChromeUrl("chrome://")).toBe(true);
  });

  it("URL", () => {
    expect(isChromeUrl("chrome://version")).toBe(true);
  });
});

describe("unvalid", () => {
  it("other protocol", () => {
    expect(isChromeUrl("https://example.com")).toBe(false);
  });

  /* Common unvalid values */

  it("number", () => {
    // @ts-ignore
    expect(isChromeUrl(100)).toBe(false);
  });

  it("empty string", () => {
    expect(isChromeUrl("")).toBe(false);
  });

  it("non url string", () => {
    expect(isChromeUrl("example")).toBe(false);
  });

  it("array", () => {
    // @ts-ignore
    expect(isChromeUrl([])).toBe(false);
  });

  it("object", () => {
    // @ts-ignore
    expect(isChromeUrl({})).toBe(false);
  });

  it("undefined", () => {
    // @ts-ignore
    expect(isChromeUrl(undefined)).toBe(false);
  });

  it("null", () => {
    // @ts-ignore
    expect(isChromeUrl(null)).toBe(false);
  });

  it("NaN", () => {
    // @ts-ignore
    expect(isChromeUrl(NaN)).toBe(false);
  });
});
