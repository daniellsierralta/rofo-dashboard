import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Search, Download, Filter, Plus, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { quarterlyEntries, quarterlySummary, availableYears, availableQuarters } from "../data/quarterlyData";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
};

const getQuarterColor = (quarter: string) => {
  switch (quarter) {
    case "Q1":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case "Q2":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "Q3":
      return "bg-orange-100 text-orange-800 hover:bg-orange-100";
    case "Q4":
      return "bg-purple-100 text-purple-800 hover:bg-purple-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

export function QuarterlyDatabase() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Quarterly Income Database</h1>
          <p className="text-muted-foreground">Track monthly and quarterly revenue by activity</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Entry
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Income</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl">{formatCurrency(quarterlySummary.totalIncome)}</span>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+{quarterlySummary.totalIncomeChange}%</span>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Avg Monthly Income</p>
          <p className="text-2xl">{formatCurrency(quarterlySummary.avgMonthlyIncome)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Best Quarter</p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
              {quarterlySummary.bestQuarter.quarter}
            </Badge>
            <span className="text-xl">{formatCurrency(quarterlySummary.bestQuarter.amount)}</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Active Activities</p>
          <p className="text-2xl">{quarterlySummary.activeActivities}</p>
        </Card>
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search activities or IDs..." className="pl-9" />
          </div>
          <Select defaultValue={availableYears[0]}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {availableYears.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Quarter" />
            </SelectTrigger>
            <SelectContent>
              {availableQuarters.map((quarter) => (
                <SelectItem key={quarter} value={quarter.toLowerCase()}>
                  {quarter}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Activity Description</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Quarter</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-right">Income</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quarterlyEntries.map((record) => (
                <TableRow key={record.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">{record.id}</TableCell>
                  <TableCell>{record.activityDescription}</TableCell>
                  <TableCell>{record.month}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getQuarterColor(record.quarter)}>
                      {record.quarter}
                    </Badge>
                  </TableCell>
                  <TableCell>{record.year}</TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(record.income)}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{record.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>Showing {quarterlyEntries.length} of {quarterlyEntries.length} entries</p>
        <p>Page 1 of 1</p>
      </div>
    </div>
  );
}