export interface EndpointTotals {
  totalBet: number;
  totalWin: number;
  totalLost: number;
  rounds: number;
}

export interface EndpointReport {
  [endpoint: string]: EndpointTotals;
}

export interface PeriodEndpoint {
  endpoint: string;
  totalBet: number;
  totalWin: number;
  totalLost: number;
  rounds: number;
}

export interface PeriodReport {
  period: string;
  totalBet: number;
  totalWin: number;
  totalLost: number;
  rounds: number;
  endpoints: PeriodEndpoint[];
}

export interface AccountingReport {
  start: string;
  end: string;
  totalBet: number;
  totalWin: number;
  totalLost: number;
  rounds: number;

  endpoints: EndpointReport;
  periods: PeriodReport[];
}
