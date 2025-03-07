
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "./TaskCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface AnalyticsProps {
  tasks: Task[];
}

const Analytics = ({ tasks }: AnalyticsProps) => {
  // Group tasks by category
  const categoryData = tasks.reduce((acc, task) => {
    const category = task.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += task.timeSpent;
    return acc;
  }, {} as Record<string, number>);

  // Format data for charts
  const pieData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value,
  }));

  // Calculate total time spent
  const totalTimeSpent = Object.values(categoryData).reduce((a, b) => a + b, 0);
  
  // Format time for display
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Mock data for daily breakdown (in a real app, this would come from your backend)
  const weeklyData = [
    { day: "Mon", hours: 5.2 },
    { day: "Tue", hours: 3.8 },
    { day: "Wed", hours: 4.5 },
    { day: "Thu", hours: 3.2 },
    { day: "Fri", hours: 4.9 },
    { day: "Sat", hours: 2.1 },
    { day: "Sun", hours: 1.5 },
  ];

  // Colors for pie chart
  const COLORS = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Time Distribution</CardTitle>
          <CardDescription>
            How your time is distributed across categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => formatTime(value)}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Total Time:</span>
              <span>{formatTime(totalTimeSpent)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Overview</CardTitle>
          <CardDescription>
            Your activity for the last 7 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} hours`]} />
                <Bar
                  dataKey="hours"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Most Productive Day:</span>
              <span>Monday (5.2h)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium">Weekly Average:</span>
              <span>3.6h per day</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
