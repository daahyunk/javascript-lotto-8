export const RANKS = Object.freeze([
  { rank: 1, matchCount: 6, hasBonus: false, prize: 2_000_000_000 },
  { rank: 2, matchCount: 5, hasBonus: true, prize: 30_000_000 },
  { rank: 3, matchCount: 5, hasBonus: false, prize: 1_500_000 },
  { rank: 4, matchCount: 4, hasBonus: false, prize: 50_000 },
  { rank: 5, matchCount: 3, hasBonus: false, prize: 5_000 },
]);

const LottoRank = {
  getRank(matchCount, hasBonus) {
    return (
      RANKS.find((r) => r.matchCount === matchCount && (r.hasBonus === hasBonus || !r.hasBonus)) ??
      null
    );
  },
};

export default LottoRank;
