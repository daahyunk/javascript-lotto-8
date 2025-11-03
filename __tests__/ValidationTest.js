import validatePurchaseAmount from "../src/utils/validation";

describe("구입 금액 입력 검증", () => {
  test("1000원 단위가 아닐 경우 예외를 던진다", () => {
    expect(() => validatePurchaseAmount("1500")).toThrow("[ERROR]");
  });
});