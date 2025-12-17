/**
 * Quarterly Data for Enterprise Dashboard
 * Contains quarterly entries and summary data
 * Last Updated: 2025-12-17
 */

export interface QuarterlyEntry {
  quarter: string;
  year: number;
  revenue: number;
  expenses: number;
  profit: number;
  growthRate: number;
  customerCount: number;
  averageOrderValue: number;
}

export interface QuarterlySummary {
  totalRevenue: number;
  totalProfit: number;
  averageGrowthRate: number;
  totalCustomers: number;
  bestQuarter: string;
  worstQuarter: string;
}

export const quarterlyEntries: QuarterlyEntry[] = [
  {
    quarter: 'Q1',
    year: 2025,
    revenue: 1250000,
    expenses: 875000,
    profit: 375000,
    growthRate: 12.5,
    customerCount: 1450,
    averageOrderValue: 862.07
  },
  {
    quarter: 'Q2',
    year: 2025,
    revenue: 1420000,
    expenses: 920000,
    profit: 500000,
    growthRate: 13.6,
    customerCount: 1680,
    averageOrderValue: 845.24
  },
  {
    quarter: 'Q3',
    year: 2025,
    revenue: 1580000,
    expenses: 985000,
    profit: 595000,
    growthRate: 11.3,
    customerCount: 1820,
    averageOrderValue: 868.13
  },
  {
    quarter: 'Q4',
    year: 2025,
    revenue: 1750000,
    expenses: 1050000,
    profit: 700000,
    growthRate: 10.8,
    customerCount: 2015,
    averageOrderValue: 868.59
  },
  {
    quarter: 'Q1',
    year: 2024,
    revenue: 985000,
    expenses: 720000,
    profit: 265000,
    growthRate: 8.2,
    customerCount: 1180,
    averageOrderValue: 834.75
  },
  {
    quarter: 'Q2',
    year: 2024,
    revenue: 1105000,
    expenses: 780000,
    profit: 325000,
    growthRate: 12.2,
    customerCount: 1295,
    averageOrderValue: 853.28
  },
  {
    quarter: 'Q3',
    year: 2024,
    revenue: 1245000,
    expenses: 825000,
    profit: 420000,
    growthRate: 12.7,
    customerCount: 1410,
    averageOrderValue: 882.98
  },
  {
    quarter: 'Q4',
    year: 2024,
    revenue: 1380000,
    expenses: 895000,
    profit: 485000,
    growthRate: 10.8,
    customerCount: 1565,
    averageOrderValue: 881.53
  }
];

export const quarterlySummary: QuarterlySummary = {
  totalRevenue: 10715000,
  totalProfit: 3665000,
  averageGrowthRate: 11.51,
  totalCustomers: 12415,
  bestQuarter: 'Q4 2025',
  worstQuarter: 'Q1 2024'
};

/**
 * Get quarterly data for a specific year
 */
export const getQuarterlyDataByYear = (year: number): QuarterlyEntry[] => {
  return quarterlyEntries.filter(entry => entry.year === year);
};

/**
 * Get the most recent quarter data
 */
export const getMostRecentQuarter = (): QuarterlyEntry => {
  return quarterlyEntries[0];
};

/**
 * Calculate year-over-year growth
 */
export const calculateYoYGrowth = (currentYear: number, previousYear: number): number => {
  const currentYearData = getQuarterlyDataByYear(currentYear);
  const previousYearData = getQuarterlyDataByYear(previousYear);
  
  const currentTotal = currentYearData.reduce((sum, entry) => sum + entry.revenue, 0);
  const previousTotal = previousYearData.reduce((sum, entry) => sum + entry.revenue, 0);
  
  return ((currentTotal - previousTotal) / previousTotal) * 100;
};

export default {
  quarterlyEntries,
  quarterlySummary,
  getQuarterlyDataByYear,
  getMostRecentQuarter,
  calculateYoYGrowth
};
