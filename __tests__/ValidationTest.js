import validatePurchaseAmount from "../src/utils/validation";

describe("validatePurchaseAmount", () => {
  test.each([
    ["1000", 1000],
    ["8000", 8000],
  ])("정상 입력 시 숫자로 반환 (%s)", (input, expected) => {
    expect(validatePurchaseAmount(input)).toBe(expected);
  });

  test("숫자가 아닐 경우 예외 발생", () => {
    expect(() => validatePurchaseAmount("abc")).toThrow("[ERROR]");
  });

  test("0 이하일 경우 예외 발생", () => {
    expect(() => validatePurchaseAmount("0")).toThrow("[ERROR]");
    expect(() => validatePurchaseAmount("-1000")).toThrow("[ERROR]");
  });

  test("1,000원 단위가 아닐 경우 예외 발생", () => {
    expect(() => validatePurchaseAmount("1500")).toThrow("[ERROR]");
  });
});
