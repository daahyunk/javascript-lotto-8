export const RANKS = [
  { rank: 1, match: 6, hasBonus: false, prize: 2000000000 },
  { rank: 2, match: 5, hasBonus: true, prize: 30000000 },
  { rank: 3, match: 5, hasBonus: false, prize: 1500000 },
  { rank: 4, match: 4, hasBonus: false, prize: 50000 },
  { rank: 5, match: 3, hasBonus: false, prize: 5000 },
];

class LottoRank {
  static getRank(matchCount, hasBonus) {
    return RANKS.find(
      (rank) => rank.match === matchCount && (rank.hasBonus === hasBonus || rank.match === 6),
    );
  }

  static getPrize(rank) {
    const rankInfo = RANKS.find((r) => r.rank === Number(rank));
    return rankInfo ? rankInfo.prize : 0;
  }
}

export default LottoRank;
