import type { MetricType } from "../types/ConfigTypes";

export const metricLabels: Record<MetricType, string> = {
  totalBet: "Total Bet",
  totalLost: "Total Lost",
  totalWin: "Total Win",
  totalWinJackpot: "Total Win Jackpot",
  totalWinProgressiveJackpot: "Total Win Progressive Jackpot",
  numberOfGames: "Number Of Games",
  numberOfBets: "Number Of Bets",
  numberOfPlayers: "Number Of Players",
};
