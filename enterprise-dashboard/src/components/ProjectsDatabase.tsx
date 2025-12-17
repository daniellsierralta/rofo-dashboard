import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Search, Download, Filter, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { projectsData, businessLines, riskLevels } from "../data/projectsData";

const getEnvironmentColor = (env: string) => {
  switch (env) {
    case "Production":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case "Staging":
      return "bg-purple-100 text-purple-800 hover:bg-purple-100";
    case "Development":
      return "bg-orange-100 text-orange-800 hover:bg-orange-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "Low":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    case "High":
      return "bg-red-100 text-red-800 hover:bg-red-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

export function ProjectsDatabase() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Projects Database</h1>
          <p className="text-muted-foreground">Manage and track all project contracts and activities</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Project
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search projects, clients, or activities..." className="pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Business Line" />
            </SelectTrigger>
            <SelectContent>
              {businessLines.map((line) => (
                <SelectItem key={line} value={line.toLowerCase().replace(/ /g, '-')}>
                  {line}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              {riskLevels.map((level) => (
                <SelectItem key={level} value={level.toLowerCase().replace(/ /g, '-')}>
                  {level}
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
                <TableHead>Environment</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Contract Name</TableHead>
                <TableHead>IWC</TableHead>
                <TableHead>Project Name</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Business Line</TableHead>
                <TableHead>Sub Business Line</TableHead>
                <TableHead>Revenue Type</TableHead>
                <TableHead>Risk</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectsData.map((project) => (
                <TableRow key={project.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">{project.id}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getEnvironmentColor(project.environment)}>
                      {project.environment}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.clientName}</TableCell>
                  <TableCell>{project.contractName}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{project.iwc}</TableCell>
                  <TableCell>{project.projectName}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={project.activity}>
                    {project.activity}
                  </TableCell>
                  <TableCell>{project.model}</TableCell>
                  <TableCell>{project.businessLine}</TableCell>
                  <TableCell>{project.subBusinessLine}</TableCell>
                  <TableCell>{project.revenueType}</TableCell>
                  <TableCell>
                    {project.risk && (
                      <Badge variant="secondary" className={getRiskColor(project.risk)}>
                        {project.risk}
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>Showing {projectsData.length} of {projectsData.length} projects</p>
        <p>Page 1 of 1</p>
      </div>
    </div>
  );
}