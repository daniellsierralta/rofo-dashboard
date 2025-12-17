export interface Project {
  id: string;
  environment: 'Production' | 'Staging' | 'Development';
  clientName: string;
  contractName: string;
  iwc: string;
  projectName: string;
  activity: string;
  model: 'Fixed Price' | 'Time & Materials' | 'Agile/Scrum';
  businessLine: string;
  subBusinessLine: string;
  revenueType: 'Recurring' | 'Project-based';
  risk?: 'Low' | 'Medium' | 'High';
}

export type EnvironmentType = 'Production' | 'Staging' | 'Development';
export type ModelType = 'Fixed Price' | 'Time & Materials' | 'Agile/Scrum';
export type RevenueType = 'Recurring' | 'Project-based';