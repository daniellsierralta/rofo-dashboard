import { Card } from "./ui/card";
import { ArrowUpRight, Target, Calendar } from "lucide-react";

export function ForecastCard() {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <h3>Next Quarter Forecast</h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Projected Market Share</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl">45%</span>
              <div className="flex items-center gap-1 text-green-600">
                <ArrowUpRight className="w-5 h-5" />
                <span className="text-lg">+3%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Q1 2025 Forecast</span>
          </div>
          <div className="pt-3 border-t space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Confidence Level</span>
              <span>92%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Revenue Impact</span>
              <span className="text-green-600">+$4.2M</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}