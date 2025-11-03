import { LOTTO_SIZE, MIN_NUMBER, MAX_NUMBER, ERROR_MESSAGE } from './constants.js';

class WinningNumbers {
  #numbers;

  constructor(input) {
    const numbers = this.#parseInput(input);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #parseInput(input) {
    return input.split(',').map((num) => Number(num.trim()));
  }

  #validate(numbers) {
    const { INVALID_WINNING_NUMBERS } = ERROR_MESSAGE;

    if (!this.#hasValidLength(numbers)) {
      throw new Error(INVALID_WINNING_NUMBERS);
    }

    if (!this.#isInRange(numbers)) {
      throw new Error(INVALID_WINNING_NUMBERS);
    }

    if (!this.#hasUniqueNumbers(numbers)) {
      throw new Error(INVALID_WINNING_NUMBERS);
    }
  }

  #hasValidLength(numbers) {
    return numbers.length === LOTTO_SIZE;
  }

  #isInRange(numbers) {
    return numbers.every((num) => num >= MIN_NUMBER && num <= MAX_NUMBER);
  }

  #hasUniqueNumbers(numbers) {
    return new Set(numbers).size === numbers.length;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default WinningNumbers;
