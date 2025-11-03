import LottoRank from './LottoRank.js';

class ResultCalculator {
  static calculateRank(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = this.#countMatches(lottoNumbers, winningNumbers);
    const hasBonus = lottoNumbers.includes(bonusNumber);
    const rankInfo = LottoRank.getRank(matchCount, hasBonus);

    return {
      rank: rankInfo?.rank ?? null,
      prize: rankInfo?.prize ?? 0,
    };
  }

  static calculateStatistics(lottos, winningNumbers, bonusNumber) {
    const result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      null: 0,
    };

    lottos.forEach((lotto) => {
      const { rank } = this.calculateRank(lotto, winningNumbers, bonusNumber);
      result[rank] += 1;
    });

    return result;
  }

  static calculateProfitRate(totalPrize, totalPurchaseAmount) {
    const profitRate = (totalPrize / totalPurchaseAmount) * 100;
    return `${profitRate.toFixed(2)}%`;
  }

  static #countMatches(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }
}

export default ResultCalculator;
