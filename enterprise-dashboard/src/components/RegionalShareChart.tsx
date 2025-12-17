import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const regions = [
  { name: "North America", share: 45, growth: "+5%", color: "bg-blue-500" },
  { name: "Europe", share: 38, growth: "+3%", color: "bg-purple-500" },
  { name: "Asia Pacific", share: 52, growth: "+12%", color: "bg-green-500" },
  { name: "Latin America", share: 28, growth: "+8%", color: "bg-orange-500" },
  { name: "Middle East & Africa", share: 22, growth: "+6%", color: "bg-pink-500" },
];

export function RegionalShareChart() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="mb-1">Regional Market Share</h3>
        <p className="text-muted-foreground text-sm">Performance by geography</p>
      </div>
      <div className="space-y-6">
        {regions.map((region, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">{region.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-green-600">{region.growth}</span>
                <span>{region.share}%</span>
              </div>
            </div>
            <Progress value={region.share} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}