import { MIN_NUMBER, MAX_NUMBER, ERROR_MESSAGE } from './constants.js';

class BonusNumber {
  #number;

  constructor(input, winningNumbers) {
    const number = Number(input);
    this.#validate(number, winningNumbers);
    this.#number = number;
  }

  #validate(number, winningNumbers) {
    const { INVALID_BONUS_NUMBER } = ERROR_MESSAGE;

    if (Number.isNaN(number)) {
      throw new Error(INVALID_BONUS_NUMBER);
    }

    if (number < MIN_NUMBER || number > MAX_NUMBER) {
      throw new Error(INVALID_BONUS_NUMBER);
    }

    if (winningNumbers.includes(number)) {
      throw new Error(INVALID_BONUS_NUMBER);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
