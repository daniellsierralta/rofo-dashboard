export interface MarketShareDataPoint {
  month: string;
  ourCompany: number;
  competitorA: number;
  competitorB: number;
  competitorC: number;
}

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  label: string;
}

export interface MarketDistribution {
  name: string;
  value: number;
  color: string;
}

export interface RegionalShare {
  region: string;
  change: number;
  share: number;
}