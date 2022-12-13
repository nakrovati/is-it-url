import { describe, it, expect } from "vitest";
import isMailtoUrl from "@/isMailtoUrl";

describe("valid", () => {
  it("mailto URL", () => {
    expect(isMailtoUrl("mailto:user@example.com")).toBe(true);
  });

  it("mailto URL with three email addresses", () => {
    expect(
      isMailtoUrl(
        "mailto:user@example.com, second-user@example.com, third-user@example.com"
      )
    ).toBe(true);
  });

  it("mailto URL and headers", () => {
    expect(
      isMailtoUrl(
        "mailto:user@example.com?subject=This%20is%20the%20subject&cc=second_user@example.com&body=This%20is%20the%20body"
      )
    ).toBe(true);
  });
});

describe("unvalid", () => {
  it("email without mailto protocol", () => {
    // @ts-ignore
    expect(isMailtoUrl("user@example.com")).toBe(false);
  });

  it("just mailto protocol", () => {
    // @ts-ignore
    expect(isMailtoUrl("mailto:")).toBe(false);
  });

  it("mailto URL without domain address in email adress", () => {
    expect(isMailtoUrl("mailto:user@")).toBe(false);
  });
  it("mailto URL without user name in email adress", () => {
    expect(isMailtoUrl("mailto:@example.com")).toBe(false);
  });

  it("other protocol", () => {
    expect(isMailtoUrl("http://example.com")).toBe(false);
  });

  /* Common unvalid values */

  it("number", () => {
    // @ts-ignore
    expect(isMailtoUrl(100)).toBe(false);
  });

  it("empty string", () => {
    expect(isMailtoUrl("")).toBe(false);
  });

  it("non URL string", () => {
    expect(isMailtoUrl("example")).toBe(false);
  });

  it("array", () => {
    // @ts-ignore
    expect(isMailtoUrl([])).toBe(false);
  });

  it("object", () => {
    // @ts-ignore
    expect(isMailtoUrl({})).toBe(false);
  });

  it("undefined", () => {
    // @ts-ignore
    expect(isMailtoUrl(undefined)).toBe(false);
  });

  it("null", () => {
    // @ts-ignore
    expect(isMailtoUrl(null)).toBe(false);
  });

  it("NaN", () => {
    // @ts-ignore
    expect(isMailtoUrl(NaN)).toBe(false);
  });
});
