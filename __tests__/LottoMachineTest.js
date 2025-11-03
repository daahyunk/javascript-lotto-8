import LottoMachine from "../src/domain/LottoMachine";

describe("LottoMachine", () => {
  test("구입 금액에 따라 구매 가능한 로또 개수를 계산한다", () => {
    const lottoMachine = new LottoMachine();
    const tickets = lottoMachine.issue(8000);

    expect(tickets.length).toBe(8);
  });

  test("각 로또는 1~45 사이의 중복되지 않은 6개 숫자를 가진다", () => {
    const lottoMachine = new LottoMachine();
    const tickets = lottoMachine.issue(1000);

    const numbers = tickets[0].getNumbers();
    const uniqueNumbers = new Set(numbers);

    expect(numbers.length).toBe(6);
    expect(uniqueNumbers.size).toBe(6);
    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(45);
    });
  });
});
