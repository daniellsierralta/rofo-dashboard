import { Card } from "./ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Our Company", value: 42, color: "#3b82f6" },
  { name: "Competitor A", value: 18, color: "#8b5cf6" },
  { name: "Competitor B", value: 16, color: "#ec4899" },
  { name: "Competitor C", value: 14, color: "#f59e0b" },
  { name: "Others", value: 10, color: "#6b7280" },
];

export function MarketDistributionChart() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="mb-1">Current Market Distribution</h3>
        <p className="text-muted-foreground text-sm">December 2025</p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}