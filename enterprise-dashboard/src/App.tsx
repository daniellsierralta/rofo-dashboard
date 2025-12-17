import React, { useState } from 'react';
import { Download, ChevronDown, BarChart3, Database, Calendar } from 'lucide-react';
import MarketShareChart from './components/MarketShareChart';
import ForecastCard from './components/ForecastCard';
import MetricCard from './components/MetricCard';
import MarketDistributionChart from './components/MarketDistributionChart';
import RegionalShareChart from './components/RegionalShareChart';
import ProjectsDatabase from './components/ProjectsDatabase';
import QuarterlyDatabase from './components/QuarterlyDatabase';
import { metricCards } from './data/mockData';

type ViewType = 'dashboard' | 'projects' | 'quarterly';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [timePeriod, setTimePeriod] = useState('Last 12 months');

  const handleExport = () => {
    console.log('Exporting report...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-2">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Enterprise Dashboard</h1>
              <p className="text-sm text-gray-500">Market Intelligence & Data Management</p>
            </div>
          </div>
          <nav className="flex gap-2">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                currentView === 'dashboard' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentView('projects')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                currentView === 'projects' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Database className="w-4 h-4" />
              Projects Database
            </button>
            <button 
              onClick={() => setCurrentView('quarterly')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
                currentView === 'quarterly' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Quarterly Data
            </button>
          </nav>
        </div>
      </header>

      {currentView === 'dashboard' && (
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Market Share Dashboard</h1>
              <p className="text-gray-600 mt-1">Rolling forecast & competitive analysis</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition">
                {timePeriod}
                <ChevronDown className="w-4 h-4" />
              </button>
              <button 
                onClick={handleExport}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition"
              >
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <MarketShareChart />
            </div>
            <div>
              <ForecastCard />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {metricCards.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MarketDistributionChart />
            <RegionalShareChart />
          </div>
        </main>
      )}

      {currentView === 'projects' && <ProjectsDatabase />}
      {currentView === 'quarterly' && <QuarterlyDatabase />}
    </div>
  );
}

export default App;