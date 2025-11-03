import { ERROR_MESSAGE, LOTTO_SIZE } from './domain/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_SIZE) {
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== LOTTO_SIZE) {
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
