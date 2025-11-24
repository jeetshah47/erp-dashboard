import {
  ChefHat,
  Clock,
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
  Package,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts"

const tasks = [
  {
    id: "TASK-001",
    orderId: "ORD-001",
    description: "Prepare 45 appetizer plates",
    assignedTo: "Chef John",
    priority: "high",
    status: "in-progress",
    progress: 65,
    dueTime: "2:00 PM",
  },
  {
    id: "TASK-002",
    orderId: "ORD-002",
    description: "Bake 78 dessert items",
    assignedTo: "Chef Sarah",
    priority: "medium",
    status: "pending",
    progress: 0,
    dueTime: "3:30 PM",
  },
  {
    id: "TASK-003",
    orderId: "ORD-003",
    description: "Prepare main course for 23 guests",
    assignedTo: "Chef Mike",
    priority: "high",
    status: "ready",
    progress: 100,
    dueTime: "1:00 PM",
  },
  {
    id: "TASK-004",
    orderId: "ORD-004",
    description: "Package 95 meal boxes",
    assignedTo: "Team A",
    priority: "low",
    status: "in-progress",
    progress: 40,
    dueTime: "4:00 PM",
  },
]

const productionStatus = [
  {
    station: "Station A - Appetizers",
    status: "active",
    currentTask: "Preparing 45 plates",
    completion: 65,
    assignedStaff: 2,
  },
  {
    station: "Station B - Main Course",
    status: "active",
    currentTask: "Cooking for 78 guests",
    completion: 45,
    assignedStaff: 3,
  },
  {
    station: "Station C - Desserts",
    status: "idle",
    currentTask: "Waiting for next order",
    completion: 0,
    assignedStaff: 1,
  },
  {
    station: "Station D - Packaging",
    status: "active",
    currentTask: "Packaging 95 boxes",
    completion: 40,
    assignedStaff: 2,
  },
]

const taskCompletionData = [
  { day: "Mon", completed: 42, pending: 8 },
  { day: "Tue", completed: 48, pending: 12 },
  { day: "Wed", completed: 45, pending: 10 },
  { day: "Thu", completed: 52, pending: 6 },
  { day: "Fri", completed: 58, pending: 4 },
  { day: "Sat", completed: 65, pending: 2 },
  { day: "Sun", completed: 38, pending: 5 },
]

const efficiencyData = [
  { hour: "8 AM", efficiency: 75 },
  { hour: "10 AM", efficiency: 82 },
  { hour: "12 PM", efficiency: 88 },
  { hour: "2 PM", efficiency: 85 },
  { hour: "4 PM", efficiency: 90 },
  { hour: "6 PM", efficiency: 87 },
  { hour: "8 PM", efficiency: 80 },
]

const stationPerformanceData = [
  { station: "Appetizers", tasks: 45, efficiency: 92 },
  { station: "Main Course", tasks: 78, efficiency: 88 },
  { station: "Desserts", tasks: 32, efficiency: 85 },
  { station: "Packaging", tasks: 95, efficiency: 90 },
]

const taskChartConfig = {
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const efficiencyChartConfig = {
  efficiency: {
    label: "Efficiency",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function KitchenProduction() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kitchen & Production</h2>
          <p className="text-muted-foreground">
            Task assignment, production tracking, and readiness updates
          </p>
        </div>
        <Button>
          <ChefHat className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">Tasks finished</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Staff On Duty</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Active workers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">On-time completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Task Completion Trend</CardTitle>
            <CardDescription>Daily completed vs pending tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={taskChartConfig}>
              <BarChart
                accessibilityLayer
                data={taskCompletionData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar
                  dataKey="completed"
                  fill="var(--color-completed)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="pending"
                  fill="var(--color-pending)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Efficiency Over Time</CardTitle>
            <CardDescription>Kitchen efficiency throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={efficiencyChartConfig}>
              <LineChart
                accessibilityLayer
                data={efficiencyData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="hour"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="efficiency"
                  type="monotone"
                  stroke="var(--color-efficiency)"
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Station Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Station Performance</CardTitle>
          <CardDescription>Tasks handled and efficiency by station</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={taskChartConfig}>
            <BarChart
              accessibilityLayer
              data={stationPerformanceData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="station"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar
                dataKey="tasks"
                fill="var(--color-completed)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="efficiency"
                fill="var(--color-pending)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Production Stations */}
      <Card>
        <CardHeader>
          <CardTitle>Production Stations</CardTitle>
          <CardDescription>Real-time status of all production stations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {productionStatus.map((station, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{station.station}</h3>
                  <Badge
                    variant={station.status === "active" ? "default" : "secondary"}
                  >
                    {station.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{station.currentTask}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{station.completion}%</span>
                  </div>
                  <Progress value={station.completion} />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{station.assignedStaff} staff members</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Task Assignment */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Task Assignment</CardTitle>
              <CardDescription>Manage and assign production tasks</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{task.id}</span>
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {task.priority} priority
                      </Badge>
                      <Badge
                        variant={
                          task.status === "ready"
                            ? "default"
                            : task.status === "in-progress"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {task.status}
                      </Badge>
                    </div>
                    <p className="font-medium">{task.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Package className="h-4 w-4" />
                        <span>{task.orderId}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{task.assignedTo}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Due: {task.dueTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
                {task.status === "in-progress" && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} />
                    </div>
                  </>
                )}
                {task.status === "ready" && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Ready for pickup</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

