import { Card } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
}

export function MetricCard({ label, value, change, isPositive, subtitle }: MetricCardProps) {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl">{value}</span>
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{change}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </Card>
  );
}