import { PRICE_PER_TICKET, MIN_NUMBER, MAX_NUMBER, ERROR_MESSAGE } from '../domain/constants.js';

export function validatePurchaseAmount(input) {
  const amount = Number(input);

  if (Number.isNaN(amount)) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }

  if (amount <= 0) {
    throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
  }

  if (amount % PRICE_PER_TICKET !== 0) {
    throw new Error(ERROR_MESSAGE.NOT_DIVISIBLE);
  }

  return amount;
}

export function validateNumberRange(number, errorMessage) {
  if (number < MIN_NUMBER || number > MAX_NUMBER) {
    throw new Error(errorMessage);
  }
}

export function validateNumbersRange(numbers, errorMessage) {
  const isInRange = numbers.every((num) => num >= MIN_NUMBER && num <= MAX_NUMBER);
  if (!isInRange) {
    throw new Error(errorMessage);
  }
}

export function validateUniqueNumbers(numbers, errorMessage) {
  const unique = new Set(numbers);
  if (unique.size !== numbers.length) {
    throw new Error(errorMessage);
  }
}
