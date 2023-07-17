import {describe, it, expect} from 'vitest';
import { ISBN } from "@/library/domain/ISBN.ts";

describe("ISBN", () => {
  it("Should not build without digits", () => {
    expect(() => ISBN.of("abcdefghij")).toThrow(
      "Non digits are not allowed for ISBN"
    );
  });

  it("Should not build with invalid size", () => {
    expect(() => ISBN.of("123")).toThrow("The ISBN size is not valid");
  });

  it("Should get for 10 digits", () => {
    expect(ISBN.of("0321125217").get()).toBe("0321125217");
  });

  it("Should get for 13 digits", () => {
    expect(ISBN.of("9780321125217").get()).toBe("9780321125217");
  });
});
