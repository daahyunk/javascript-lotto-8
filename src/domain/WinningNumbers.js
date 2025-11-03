import { LOTTO_SIZE, ERROR_MESSAGE } from './constants.js';
import { validateNumbersRange, validateUniqueNumbers } from '../utils/validation.js';

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

    if (numbers.length !== LOTTO_SIZE) {
      throw new Error(INVALID_WINNING_NUMBERS);
    }

    validateNumbersRange(numbers, INVALID_WINNING_NUMBERS);
    validateUniqueNumbers(numbers, INVALID_WINNING_NUMBERS);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default WinningNumbers;
