import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'PRJ-001',
    environment: 'Production',
    clientName: 'Acme Corporation',
    contractName: 'Digital Transformation 2024',
    iwc: 'IWC-2024-001',
    projectName: 'Cloud Migration Phase 1',
    activity: 'Infrastructure setup and mi...',
    model: 'Fixed Price',
    businessLine: 'Technology Services',
    subBusinessLine: 'Cloud Solutions',
    revenueType: 'Recurring',
    risk: 'Low'
  },
  {
    id: 'PRJ-002',
    environment: 'Staging',
    clientName: 'TechStart Industries',
    contractName: 'AI Implementation',
    iwc: 'IWC-2024-002',
    projectName: 'ML Model Development',
    activity: 'Machine learning model trai...',
    model: 'Time & Materials',
    businessLine: 'Data & Analytics',
    subBusinessLine: 'AI/ML Services',
    revenueType: 'Project-based',
    risk: 'Medium'
  },
  {
    id: 'PRJ-003',
    environment: 'Production',
    clientName: 'Global Enterprises',
    contractName: 'ERP Modernization',
    iwc: 'IWC-2024-003',
    projectName: 'SAP S/4HANA Migration',
    activity: 'Enterprise resource plannin...',
    model: 'Fixed Price',
    businessLine: 'Technology Services',
    subBusinessLine: 'Enterprise Systems',
    revenueType: 'Recurring',
    risk: 'High'
  },
  {
    id: 'PRJ-004',
    environment: 'Development',
    clientName: 'Innovate Labs',
    contractName: 'Product Development',
    iwc: 'IWC-2024-004',
    projectName: 'Mobile App Platform',
    activity: 'Cross-platform mobile appli...',
    model: 'Agile/Scrum',
    businessLine: 'Application Development',
    subBusinessLine: 'Mobile Solutions',
    revenueType: 'Project-based',
    risk: 'Low'
  },
  {
    id: 'PRJ-005',
    environment: 'Production',
    clientName: 'Finance Plus',
    contractName: 'Security Enhancement',
    iwc: 'IWC-2024-005',
    projectName: 'Cybersecurity Audit',
    activity: 'Security assessment and re...',
    model: 'Time & Materials',
    businessLine: 'Security Services',
    subBusinessLine: 'Compliance & Audit',
    revenueType: 'Recurring',
    risk: 'Medium'
  },
  {
    id: 'PRJ-006',
    environment: 'Production',
    clientName: 'Retail Giant Inc',
    contractName: 'E-commerce Platform',
    iwc: 'IWC-2024-006',
    projectName: 'Omnichannel Integration',
    activity: 'Unified commerce platform...',
    model: 'Fixed Price',
    businessLine: 'Technology Services',
    subBusinessLine: 'E-commerce',
    revenueType: 'Project-based',
    risk: 'Low'
  }
];

export const businessLines = [
  'All Business Lines',
  'Technology Services',
  'Data & Analytics',
  'Application Development',
  'Security Services'
];

export const riskLevels = [
  'All Risk Levels',
  'Low',
  'Medium',
  'High'
];