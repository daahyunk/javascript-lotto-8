import LottoRank, { RANKS } from './LottoRank.js';
import { PERCENTAGE, DECIMAL_POINT } from './constants.js';

class ResultCalculator {
  static calculateRank(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = this.#countMatches(lottoNumbers, winningNumbers);
    const hasBonus = lottoNumbers.includes(bonusNumber);
    const rankInfo = LottoRank.getRank(matchCount, hasBonus);
    return { rank: rankInfo?.rank ?? null, prize: rankInfo?.prize ?? 0 };
  }

  static calculateStatistics(lottos, winningNumbers, bonusNumber) {
    const rankCounts = Object.fromEntries([...RANKS.map((r) => [r.rank, 0]), ['null', 0]]);

    lottos.forEach((lotto) => {
      const { rank } = this.calculateRank(lotto, winningNumbers, bonusNumber);
      rankCounts[rank] += 1;
    });

    return rankCounts;
  }

  static calculateProfitRate(totalPrize, totalPurchaseAmount) {
    const profitRate = (totalPrize / totalPurchaseAmount) * PERCENTAGE;
    return `${profitRate.toFixed(DECIMAL_POINT)}%`;
  }

  static #countMatches(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }
}

export default ResultCalculator;
