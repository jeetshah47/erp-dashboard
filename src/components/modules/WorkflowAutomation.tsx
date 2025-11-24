import {
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  Settings,
  FileText,
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
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts"

const workflows = [
  {
    id: "WF-001",
    name: "Order Approval Workflow",
    description: "Automated approval process for orders above $10,000",
    trigger: "Order value > $10,000",
    status: "active",
    lastTriggered: "2 hours ago",
    executions: 45,
    successRate: 98,
  },
  {
    id: "WF-002",
    name: "Kitchen Task Assignment",
    description: "Auto-assign tasks based on staff availability and skills",
    trigger: "New order received",
    status: "active",
    lastTriggered: "15 minutes ago",
    executions: 128,
    successRate: 95,
  },
  {
    id: "WF-003",
    name: "Delivery Route Optimization",
    description: "Automatically optimize delivery routes based on locations",
    trigger: "Delivery scheduled",
    status: "active",
    lastTriggered: "1 hour ago",
    executions: 67,
    successRate: 92,
  },
  {
    id: "WF-004",
    name: "Inventory Low Stock Alert",
    description: "Send alerts when inventory falls below threshold",
    trigger: "Stock level < threshold",
    status: "paused",
    lastTriggered: "3 days ago",
    executions: 12,
    successRate: 100,
  },
]

const pendingApprovals = [
  {
    id: "APP-001",
    type: "Order Approval",
    orderId: "ORD-001",
    requestedBy: "John Smith",
    amount: 12500,
    requestedAt: "2024-01-14 10:30 AM",
    status: "pending",
    approver: "Manager",
  },
  {
    id: "APP-002",
    type: "Budget Approval",
    description: "Kitchen equipment purchase",
    requestedBy: "Sarah Johnson",
    amount: 8500,
    requestedAt: "2024-01-14 11:15 AM",
    status: "pending",
    approver: "Finance Manager",
  },
  {
    id: "APP-003",
    type: "Asset Check-Out",
    description: "Bulk furniture rental",
    requestedBy: "Mike Davis",
    quantity: 100,
    requestedAt: "2024-01-14 09:00 AM",
    status: "approved",
    approver: "Operations Manager",
  },
]

const interDepartmentCoordination = [
  {
    id: "COORD-001",
    from: "Sales",
    to: "Kitchen",
    action: "Order received - Start preparation",
    orderId: "ORD-001",
    status: "completed",
    timestamp: "2024-01-14 10:00 AM",
  },
  {
    id: "COORD-002",
    from: "Kitchen",
    to: "Logistics",
    action: "Order ready - Schedule delivery",
    orderId: "ORD-002",
    status: "in-progress",
    timestamp: "2024-01-14 11:30 AM",
  },
  {
    id: "COORD-003",
    from: "Logistics",
    to: "Sales",
    action: "Delivery completed - Update order status",
    orderId: "ORD-003",
    status: "pending",
    timestamp: "2024-01-14 12:00 PM",
  },
]

const workflowExecutionData = [
  { day: "Mon", executions: 42, success: 40 },
  { day: "Tue", executions: 48, success: 46 },
  { day: "Wed", executions: 45, success: 43 },
  { day: "Thu", executions: 52, success: 50 },
  { day: "Fri", executions: 58, success: 56 },
  { day: "Sat", executions: 35, success: 34 },
  { day: "Sun", executions: 28, success: 27 },
]

const approvalTimeData = [
  { hour: "8 AM", avgTime: 25 },
  { hour: "10 AM", avgTime: 18 },
  { hour: "12 PM", avgTime: 22 },
  { hour: "2 PM", avgTime: 20 },
  { hour: "4 PM", avgTime: 28 },
  { hour: "6 PM", avgTime: 30 },
]

const workflowTypeData = [
  { type: "Order Approval", executions: 125, successRate: 98 },
  { type: "Task Assignment", executions: 128, successRate: 95 },
  { type: "Route Optimization", executions: 67, successRate: 92 },
  { type: "Stock Alerts", executions: 12, successRate: 100 },
]

const workflowChartConfig = {
  executions: {
    label: "Executions",
    color: "hsl(var(--chart-1))",
  },
  success: {
    label: "Successful",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const approvalChartConfig = {
  avgTime: {
    label: "Avg. Time (min)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function WorkflowAutomation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight">Workflow Automation</h2>
          <p className="text-muted-foreground mt-2">
            Automated triggers for approvals and inter-department coordination
          </p>
        </div>
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          New Workflow
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Executions Today</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">252</div>
            <p className="text-xs text-muted-foreground">Automated actions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.2%</div>
            <p className="text-xs text-muted-foreground">Average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Awaiting action</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Workflow Execution Trend</CardTitle>
            <CardDescription>Daily workflow executions and success rate</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={workflowChartConfig}>
              <AreaChart
                accessibilityLayer
                data={workflowExecutionData}
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
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="executions"
                  type="natural"
                  fill="var(--color-executions)"
                  fillOpacity={0.4}
                  stroke="var(--color-executions)"
                />
                <Area
                  dataKey="success"
                  type="natural"
                  fill="var(--color-success)"
                  fillOpacity={0.4}
                  stroke="var(--color-success)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approval Processing Time</CardTitle>
            <CardDescription>Average approval time throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={approvalChartConfig}>
              <LineChart
                accessibilityLayer
                data={approvalTimeData}
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
                  tickFormatter={(value) => `${value}m`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="avgTime"
                  type="monotone"
                  stroke="var(--color-avgTime)"
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Workflow Performance by Type */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Performance by Type</CardTitle>
          <CardDescription>Executions and success rate by workflow type</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={workflowChartConfig}>
            <BarChart
              accessibilityLayer
              data={workflowTypeData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="type"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                angle={-45}
                textAnchor="end"
                height={80}
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
                dataKey="executions"
                fill="var(--color-executions)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="successRate"
                fill="var(--color-success)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Automated Workflows */}
      <Card>
        <CardHeader>
          <CardTitle>Automated Workflows</CardTitle>
          <CardDescription>Configured automation rules and triggers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div
                key={workflow.id}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{workflow.id}</span>
                      <span className="font-medium">{workflow.name}</span>
                      <Badge
                        variant={workflow.status === "active" ? "default" : "secondary"}
                      >
                        {workflow.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {workflow.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Trigger:</span>
                        <p className="font-medium">{workflow.trigger}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Last Triggered:</span>
                        <p className="font-medium">{workflow.lastTriggered}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Executions:</span>
                        <p className="font-medium">{workflow.executions}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Success Rate:</span>
                        <p className="font-medium">{workflow.successRate}%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      View Logs
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Success Rate</span>
                    <span className="font-medium">{workflow.successRate}%</span>
                  </div>
                  <Progress value={workflow.successRate} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Approvals */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
          <CardDescription>Automated approval requests awaiting action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div
                key={approval.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{approval.id}</span>
                      <Badge
                        variant={
                          approval.status === "approved"
                            ? "default"
                            : approval.status === "pending"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {approval.status}
                      </Badge>
                    </div>
                    <p className="font-medium mb-2">{approval.type}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Requested By:</span>
                        <span className="ml-2 font-medium">{approval.requestedBy}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Approver:</span>
                        <span className="ml-2 font-medium">{approval.approver}</span>
                      </div>
                      {approval.amount && (
                        <div>
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="ml-2 font-medium">
                            ${approval.amount.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {approval.quantity && (
                        <div>
                          <span className="text-muted-foreground">Quantity:</span>
                          <span className="ml-2 font-medium">{approval.quantity}</span>
                        </div>
                      )}
                      {approval.orderId && (
                        <div>
                          <span className="text-muted-foreground">Order:</span>
                          <span className="ml-2 font-medium">{approval.orderId}</span>
                        </div>
                      )}
                      {approval.description && (
                        <div>
                          <span className="text-muted-foreground">Description:</span>
                          <span className="ml-2 font-medium">{approval.description}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-muted-foreground">Requested At:</span>
                        <span className="ml-2 font-medium">{approval.requestedAt}</span>
                      </div>
                    </div>
                  </div>
                  {approval.status === "pending" && (
                    <div className="flex gap-2 ml-4">
                      <Button variant="default" size="sm">
                        Approve
                      </Button>
                      <Button variant="outline" size="sm">
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Inter-Department Coordination */}
      <Card>
        <CardHeader>
          <CardTitle>Inter-Department Coordination</CardTitle>
          <CardDescription>Automated communication and task handoffs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interDepartmentCoordination.map((coord) => (
              <div
                key={coord.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{coord.id}</span>
                      <Badge
                        variant={
                          coord.status === "completed"
                            ? "default"
                            : coord.status === "in-progress"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {coord.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{coord.from}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{coord.to}</span>
                    </div>
                    <p className="text-sm mb-2">{coord.action}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Order: {coord.orderId}</span>
                      <span>•</span>
                      <span>{coord.timestamp}</span>
                    </div>
                  </div>
                  {coord.status === "pending" && (
                    <Button variant="outline" size="sm">
                      Acknowledge
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

