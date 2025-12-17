import { MarketShareDataPoint, MetricCard, MarketDistribution, RegionalShare } from '../types/dashboard';

export const marketShareTrends: MarketShareDataPoint[] = [
  { month: 'Jan', ourCompany: 30, competitorA: 25, competitorB: 20, competitorC: 15 },
  { month: 'Feb', ourCompany: 31, competitorA: 24, competitorB: 20, competitorC: 15 },
  { month: 'Mar', ourCompany: 32, competitorA: 23, competitorB: 19, competitorC: 16 },
  { month: 'Apr', ourCompany: 33, competitorA: 22, competitorB: 19, competitorC: 16 },
  { month: 'May', ourCompany: 35, competitorA: 21, competitorB: 18, competitorC: 16 },
  { month: 'Jun', ourCompany: 37, competitorA: 21, competitorB: 18, competitorC: 15 },
  { month: 'Jul', ourCompany: 38, competitorA: 20, competitorB: 17, competitorC: 15 },
  { month: 'Aug', ourCompany: 39, competitorA: 20, competitorB: 17, competitorC: 14 },
  { month: 'Sep', ourCompany: 40, competitorA: 19, competitorB: 17, competitorC: 14 },
  { month: 'Oct', ourCompany: 41, competitorA: 19, competitorB: 16, competitorC: 14 },
  { month: 'Nov', ourCompany: 42, competitorA: 18, competitorB: 16, competitorC: 14 },
  { month: 'Dec', ourCompany: 42, competitorA: 18, competitorB: 16, competitorC: 14 },
];

export const metricCards: MetricCard[] = [
  {
    title: 'Current Market Share',
    value: '42%',
    change: '+14%',
    changeType: 'positive',
    label: 'vs. last year'
  },
  {
    title: 'Market Growth Rate',
    value: '8.5%',
    change: '+2.1%',
    changeType: 'positive',
    label: 'YoY'
  },
  {
    title: 'Customer Acquisition',
    value: '12.4K',
    change: '+18%',
    changeType: 'positive',
    label: 'this quarter'
  },
  {
    title: 'Churn Rate',
    value: '3.2%',
    change: '-1.1%',
    changeType: 'positive',
    label: 'vs. last quarter'
  }
];

export const marketDistribution: MarketDistribution[] = [
  { name: 'Our Company', value: 42, color: '#3b82f6' },
  { name: 'Competitor A', value: 18, color: '#a855f7' },
  { name: 'Competitor B', value: 16, color: '#ec4899' },
  { name: 'Competitor C', value: 14, color: '#f97316' },
  { name: 'Others', value: 10, color: '#6b7280' }
];

export const regionalShare: RegionalShare[] = [
  { region: 'North America', change: 5, share: 45 },
  { region: 'Europe', change: 3, share: 38 },
  { region: 'Asia Pacific', change: 12, share: 52 },
  { region: 'Latin America', change: -8, share: 28 },
  { region: 'Middle East & Africa', change: 6, share: 22 }
];