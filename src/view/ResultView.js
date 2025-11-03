import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, RANK_MESSAGES } from '../domain/constants.js';

const ResultView = {
  printStatistics(result, profitRate) {
    MissionUtils.Console.print(MESSAGE.STATISTICS_TITLE);
    MissionUtils.Console.print(MESSAGE.STATISTICS_SEPARATOR);

    Object.entries(RANK_MESSAGES)
      .reverse()
      .forEach(([rank, message]) => {
        const count = result[rank] || 0;
        MissionUtils.Console.print(`${message} - ${count}개`);
      });

    MissionUtils.Console.print(
      `${MESSAGE.PROFIT_RATE_LABEL}${profitRate}${MESSAGE.PROFIT_RATE_SUFFIX}`,
    );
  },
};

export default ResultView;
