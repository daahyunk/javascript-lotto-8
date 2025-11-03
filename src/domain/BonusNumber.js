import { MIN_NUMBER, MAX_NUMBER, ERROR_MESSAGE } from './constants.js';

class BonusNumber {
  #number;

  constructor(input, winningNumbers) {
    const number = Number.parseInt(input, 10);
    this.#validateBonusNumber(number, winningNumbers);
    this.#number = number;
  }

  #validateBonusNumber(number, winningNumbers) {
    const { INVALID_BONUS_NUMBER } = ERROR_MESSAGE;

    if (Number.isNaN(number)) {
      throw new Error(INVALID_BONUS_NUMBER);
    }

    const isOutOfRange = number < MIN_NUMBER || number > MAX_NUMBER;
    if (isOutOfRange) {
      throw new Error(INVALID_BONUS_NUMBER);
    }

    const isDuplicated = winningNumbers.includes(number);
    if (isDuplicated) {
      throw new Error(INVALID_BONUS_NUMBER);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
