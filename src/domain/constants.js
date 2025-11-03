export const PRICE_PER_TICKET = 1000;
export const LOTTO_SIZE = 6;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
export const PERCENTAGE = 100;
export const DECIMAL_POINT = 2;

export const MESSAGE = {
  PURCHASE_RESULT: (count) => `${count}개를 구매했습니다.`,
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  STATISTICS_TITLE: '당첨 통계',
  STATISTICS_SEPARATOR: '---',
  PROFIT_RATE_LABEL: '총 수익률은 ',
  PROFIT_RATE_SUFFIX: '%입니다.',
};

export const RANK_MESSAGES = {
  5: '3개 일치 (5,000원)',
  4: '4개 일치 (50,000원)',
  3: '5개 일치 (1,500,000원)',
  2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  1: '6개 일치 (2,000,000,000원)',
};

export const ARRAY_JOIN_SEPARATOR = ', ';

export const ERROR_MESSAGE = {
  NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  NOT_POSITIVE: '[ERROR] 구입 금액은 0보다 커야 합니다.',
  NOT_DIVISIBLE: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_DUPLICATE: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  INVALID_WINNING_NUMBERS: '[ERROR] 당첨 번호 형식이 올바르지 않습니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호가 올바르지 않습니다.',
};
