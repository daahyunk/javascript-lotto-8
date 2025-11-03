import WinningNumbers from "../src/domain/WinningNumber";

describe("WinningNumbers", () => {
  test("쉼표로 구분된 6개의 숫자를 입력하면 배열로 변환된다", () => {
    const winningNumbers = new WinningNumbers("1,2,3,4,5,6");
    expect(winningNumbers.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("숫자가 6개가 아니면 예외를 발생시킨다", () => {
    expect(() => new WinningNumbers("1,2,3,4,5")).toThrow(
      "[ERROR] 당첨 번호 형식이 올바르지 않습니다."
    );
  });

  test("숫자가 범위를 벗어나면 예외를 발생시킨다", () => {
    expect(() => new WinningNumbers("0,2,3,4,5,6")).toThrow(
      "[ERROR] 당첨 번호 형식이 올바르지 않습니다."
    );
    expect(() => new WinningNumbers("1,2,3,4,5,46")).toThrow(
      "[ERROR] 당첨 번호 형식이 올바르지 않습니다."
    );
  });

  test("중복된 숫자가 포함되어 있으면 예외를 발생시킨다", () => {
    expect(() => new WinningNumbers("1,2,3,3,4,5")).toThrow(
      "[ERROR] 당첨 번호 형식이 올바르지 않습니다."
    );
  });

  test("숫자가 아닌 값이 포함되어 있으면 예외를 발생시킨다", () => {
    expect(() => new WinningNumbers("1,2,a,4,5,6")).toThrow(
      "[ERROR] 당첨 번호 형식이 올바르지 않습니다."
    );
  });
});
