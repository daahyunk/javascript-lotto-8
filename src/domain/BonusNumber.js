import { ERROR_MESSAGE } from './constants.js';
import { validateNumberRange } from '../utils/validation.js';

class BonusNumber {
  #number;

  constructor(input, winningNumbers) {
    const number = Number.parseInt(input, 10);
    this.#validate(number, winningNumbers);
    this.#number = number;
  }

  #validate(number, winningNumbers) {
    const { INVALID_BONUS_NUMBER } = ERROR_MESSAGE;

    if (Number.isNaN(number)) {
      throw new Error(INVALID_BONUS_NUMBER);
    }

    validateNumberRange(number, INVALID_BONUS_NUMBER);

    if (winningNumbers.includes(number)) {
      throw new Error(INVALID_BONUS_NUMBER);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
