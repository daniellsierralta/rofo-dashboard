import { Card } from "./ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const data = [
  { month: "Jan", ourShare: 28, competitor1: 25, competitor2: 22, competitor3: 15, others: 10 },
  { month: "Feb", ourShare: 30, competitor1: 24, competitor2: 21, competitor3: 15, others: 10 },
  { month: "Mar", ourShare: 32, competitor1: 23, competitor2: 21, competitor3: 14, others: 10 },
  { month: "Apr", ourShare: 33, competitor1: 22, competitor2: 20, competitor3: 15, others: 10 },
  { month: "May", ourShare: 35, competitor1: 21, competitor2: 20, competitor3: 14, others: 10 },
  { month: "Jun", ourShare: 36, competitor1: 21, competitor2: 19, competitor3: 14, others: 10 },
  { month: "Jul", ourShare: 37, competitor1: 20, competitor2: 19, competitor3: 14, others: 10 },
  { month: "Aug", ourShare: 38, competitor1: 20, competitor2: 18, competitor3: 14, others: 10 },
  { month: "Sep", ourShare: 39, competitor1: 19, competitor2: 18, competitor3: 14, others: 10 },
  { month: "Oct", ourShare: 40, competitor1: 19, competitor2: 17, competitor3: 14, others: 10 },
  { month: "Nov", ourShare: 41, competitor1: 18, competitor2: 17, competitor3: 14, others: 10 },
  { month: "Dec", ourShare: 42, competitor1: 18, competitor2: 16, competitor3: 14, others: 10 },
];

export function MarketShareChart() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="mb-1">Market Share Trends</h3>
        <p className="text-muted-foreground text-sm">12-month rolling view by competitor</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorOur" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorComp1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorComp2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorComp3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="ourShare" name="Our Company" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorOur)" />
          <Area type="monotone" dataKey="competitor1" name="Competitor A" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorComp1)" />
          <Area type="monotone" dataKey="competitor2" name="Competitor B" stroke="#ec4899" strokeWidth={2} fillOpacity={1} fill="url(#colorComp2)" />
          <Area type="monotone" dataKey="competitor3" name="Competitor C" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorComp3)" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}