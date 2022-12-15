import { describe, it, expect } from "vitest";
import isTelUrl from "@/isTelUrl";

describe("valid", () => {
  it("URL", () => {
    // @ts-ignore
    expect(isTelUrl("tel:995555151515")).toBe(true);
  });

  it("URL with '+' character", () => {
    // @ts-ignore
    expect(isTelUrl("tel:+995555151515")).toBe(true);
  });
});

describe("unvalid", () => {
  it("just tel protocol", () => {
    // @ts-ignore
    expect(isTelUrl("tel:")).toBe(false);
  });

  it("other protocol", () => {
    expect(isTelUrl("https://example.com")).toBe(false);
  });

  /* Common unvalid values */

  it("number", () => {
    // @ts-ignore
    expect(isTelUrl(100)).toBe(false);
  });

  it("empty string", () => {
    expect(isTelUrl("")).toBe(false);
  });

  it("non url string", () => {
    expect(isTelUrl("example")).toBe(false);
  });

  it("array", () => {
    // @ts-ignore
    expect(isTelUrl([])).toBe(false);
  });

  it("object", () => {
    // @ts-ignore
    expect(isTelUrl({})).toBe(false);
  });

  it("undefined", () => {
    // @ts-ignore
    expect(isTelUrl(undefined)).toBe(false);
  });

  it("null", () => {
    // @ts-ignore
    expect(isTelUrl(null)).toBe(false);
  });

  it("NaN", () => {
    // @ts-ignore
    expect(isTelUrl(NaN)).toBe(false);
  });
});
