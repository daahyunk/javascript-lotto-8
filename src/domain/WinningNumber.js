import { LOTTO_SIZE, MIN_NUMBER, MAX_NUMBER } from './constants.js';

class WinningNumbers {
  #numbers;

  constructor(input) {
    const numbers = this.#parseInput(input);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #parseInput(input) {
    return input
      .split(',')
      .map((num) => Number(num.trim()))
      .filter((num) => !Number.isNaN(num));
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_SIZE) {
      throw new Error('[ERROR] 당첨 번호 형식이 올바르지 않습니다.');
    }

    const isInRange = numbers.every((num) => num >= MIN_NUMBER && num <= MAX_NUMBER);
    if (!isInRange) {
      throw new Error('[ERROR] 당첨 번호 형식이 올바르지 않습니다.');
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호 형식이 올바르지 않습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default WinningNumbers;
