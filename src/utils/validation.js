function validatePurchaseAmount(input) {
  const amount = Number(input);

  if (amount % 1000 !== 0) {
    throw new Error('[ERROR]');
  }

  return amount;
}

export default validatePurchaseAmount;
