import BonusNumber from "../src/domain/BonusNumber";
import WinningNumbers from "../src/domain/WinningNumbers";

describe("BonusNumber", () => {
  test("정상 입력: 보너스 번호를 숫자로 변환한다", () => {
    const winningNumbers = new WinningNumbers("1,2,3,4,5,6");
    const bonusNumber = new BonusNumber("7", winningNumbers.getNumbers());

    expect(bonusNumber.getNumber()).toBe(7);
  });

  test("예외: 숫자가 아닌 입력일 경우 예외를 던진다", () => {
    const winningNumbers = new WinningNumbers("1,2,3,4,5,6");
    expect(() => new BonusNumber("abc", winningNumbers.getNumbers())).toThrow(
      "[ERROR] 보너스 번호가 올바르지 않습니다."
    );
  });

  test("예외: 1~45 범위를 벗어난 경우 예외를 던진다", () => {
    const winningNumbers = new WinningNumbers("1,2,3,4,5,6");

    expect(() => new BonusNumber("0", winningNumbers.getNumbers())).toThrow(
      "[ERROR] 보너스 번호가 올바르지 않습니다."
    );

    expect(() => new BonusNumber("46", winningNumbers.getNumbers())).toThrow(
      "[ERROR] 보너스 번호가 올바르지 않습니다."
    );
  });

  test("예외: 당첨 번호와 중복될 경우 예외를 던진다", () => {
    const winningNumbers = new WinningNumbers("1,2,3,4,5,6");

    expect(() => new BonusNumber("1", winningNumbers.getNumbers())).toThrow(
      "[ERROR] 보너스 번호가 올바르지 않습니다."
    );
  });
});
