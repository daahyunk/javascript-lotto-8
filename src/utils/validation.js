import { PRICE_PER_TICKET, ERROR_MESSAGE } from '../domain/constants.js';

function validatePurchaseAmount(input) {
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

export default validatePurchaseAmount;
