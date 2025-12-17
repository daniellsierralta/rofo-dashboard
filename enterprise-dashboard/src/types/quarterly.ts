export interface QuarterlyEntry {
  id: string;
  activityDescription: string;
  month: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  year: number;
  income: number;
  date: string;
}

export interface QuarterlySummary {
  totalIncome: number;
  totalIncomeChange: number;
  avgMonthlyIncome: number;
  bestQuarter: {
    quarter: string;
    amount: number;
  };
  activeActivities: number;
}