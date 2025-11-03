import ResultCalculator from "../src/domain/ResultCalculator";

describe("ResultCalculator", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test("1등: 6개 번호 일치 시 1등 반환", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const result = ResultCalculator.calculateRank(lotto, winningNumbers, bonusNumber);
    expect(result.rank).toBe(1);
    expect(result.prize).toBe(2000000000);
  });

  test("2등: 5개 번호 + 보너스 번호 일치 시 2등 반환", () => {
    const lotto = [1, 2, 3, 4, 5, 7];
    const result = ResultCalculator.calculateRank(lotto, winningNumbers, bonusNumber);
    expect(result.rank).toBe(2);
    expect(result.prize).toBe(30000000);
  });

  test("3등: 5개 번호 일치 시 3등 반환", () => {
    const lotto = [1, 2, 3, 4, 5, 8];
    const result = ResultCalculator.calculateRank(lotto, winningNumbers, bonusNumber);
    expect(result.rank).toBe(3);
    expect(result.prize).toBe(1500000);
  });

  test("4등: 4개 번호 일치 시 4등 반환", () => {
    const lotto = [1, 2, 3, 4, 8, 9];
    const result = ResultCalculator.calculateRank(lotto, winningNumbers, bonusNumber);
    expect(result.rank).toBe(4);
    expect(result.prize).toBe(50000);
  });

  test("5등: 3개 번호 일치 시 5등 반환", () => {
    const lotto = [1, 2, 3, 8, 9, 10];
    const result = ResultCalculator.calculateRank(lotto, winningNumbers, bonusNumber);
    expect(result.rank).toBe(5);
    expect(result.prize).toBe(5000);
  });

  test("낙첨: 2개 이하 일치 시 null 반환", () => {
    const lotto = [1, 9, 10, 11, 12, 13];
    const result = ResultCalculator.calculateRank(lotto, winningNumbers, bonusNumber);
    expect(result.rank).toBeNull();
    expect(result.prize).toBe(0);
  });

  test("여러 로또 결과를 계산하면 등수별 개수를 반환", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
      [1, 2, 3, 4, 5, 8], // 3등
    ];

    const result = ResultCalculator.calculateStatistics(lottos, winningNumbers, bonusNumber);

    expect(result).toEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 0,
      5: 0,
      null: 0,
    });
  });

  test("총 수익률 계산 (소수점 둘째 자리 반올림)", () => {
    const totalPrize = 2030050000;
    const totalPurchaseAmount = 8000;
    const profitRate = ResultCalculator.calculateProfitRate(totalPrize, totalPurchaseAmount);
    expect(profitRate).toBe("25375625.00%");
  });
});
