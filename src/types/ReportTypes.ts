export interface EndpointTotals {
  totalBet: number;
  totalWin: number;
}

export interface EndpointReport {
  [endpoint: string]: EndpointTotals;
}

export interface PeriodEndpoint {
  endpoint: string;
  totalBet: number;
  totalWin: number;
}

export interface PeriodReport {
  period: string;
  totalBet: number;
  totalWin: number;
  endpoints: PeriodEndpoint[];
}

export interface AccountingReport {
  start: string;
  end: string;
  totalBet: number;
  totalWin: number;
  endpoints: EndpointReport;
  periods: PeriodReport[];
}