import type { MetricType } from "../types/ConfigTypes";

export const metricLabels: Record<MetricType, string> = {
  totalBet: "Total Bet",
  totalLost: "Total Lost",
  totalWin: "Total Win",
  totalWinJackpot: "Total Win JP",
  totalWinProgressiveJackpot: "Total Win Progressive JP",
  numberOfGames: "# Games",
  numberOfBets: "# Bets",
  numberOfPlayers: "# Players",
};
