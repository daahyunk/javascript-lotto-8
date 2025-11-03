const LottoRank = {
  1: { rank: 1, matchCount: 6, hasBonus: false, prize: 2000000000 },
  2: { rank: 2, matchCount: 5, hasBonus: true, prize: 30000000 },
  3: { rank: 3, matchCount: 5, hasBonus: false, prize: 1500000 },
  4: { rank: 4, matchCount: 4, hasBonus: false, prize: 50000 },
  5: { rank: 5, matchCount: 3, hasBonus: false, prize: 5000 },

  getRank(matchCount, hasBonus) {
    if (matchCount === 6) return this[1];
    if (matchCount === 5 && hasBonus) return this[2];
    if (matchCount === 5) return this[3];
    if (matchCount === 4) return this[4];
    if (matchCount === 3) return this[5];
    return null;
  },
};

export default LottoRank;
