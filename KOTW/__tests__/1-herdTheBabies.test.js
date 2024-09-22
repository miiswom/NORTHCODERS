const herdTheBabies = require("../katas/1-heardTheBabies");

describe("herdTheBabies()", () => {
  test("if passed with a string containing a single argument, it should return that argument", () => {
    expect(herdTheBabies("a")).toBe("a")
  });
  test("if passed with a string containing arguments that are the same but some are uppercase and the others are lowercase, it should return the string with uppercase first", () => {
    expect(herdTheBabies("aA")).toBe("Aa");
    expect(herdTheBabies("aaaA")).toBe("Aaaa")
  });
  test("if passed with a string containing different characters, it shouldd return them in alphabetical order", () => {
    expect(herdTheBabies("bac")).toBe("abc");
    expect(herdTheBabies("BAC")).toBe("ABC")
  });
  test("if passed with a string containing different characters with some uppercase and the others are lowercase, it should return the string in alphabetic order. With uppercase always coming first", () => {
    expect(herdTheBabies("aABb")).toBe("AaBb")
  })
})