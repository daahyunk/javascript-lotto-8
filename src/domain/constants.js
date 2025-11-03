export const PRICE_PER_TICKET = 1000;
export const LOTTO_SIZE = 6;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
export const PERCENTAGE = 100;
export const DECIMAL_POINT = 2;

export const MESSAGE = {
  PURCHASE_RESULT: (count) => `${count}개를 구매했습니다.`,
};

export const ERROR_MESSAGE = {
  NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  NOT_POSITIVE: '[ERROR] 구입 금액은 0보다 커야 합니다.',
  NOT_DIVISIBLE: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_DUPLICATE: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  INVALID_WINNING_NUMBERS: '[ERROR] 당첨 번호 형식이 올바르지 않습니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호가 올바르지 않습니다.',
};
