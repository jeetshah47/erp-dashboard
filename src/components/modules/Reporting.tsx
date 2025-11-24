import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Package,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 125000, orders: 45 },
  { month: "Feb", revenue: 145000, orders: 52 },
  { month: "Mar", revenue: 138000, orders: 48 },
  { month: "Apr", revenue: 167000, orders: 61 },
  { month: "May", revenue: 152000, orders: 55 },
  { month: "Jun", revenue: 189000, orders: 68 },
]

const performanceData = [
  { metric: "Order Fulfillment", value: 94, target: 95 },
  { metric: "On-Time Delivery", value: 89, target: 90 },
  { metric: "Customer Satisfaction", value: 92, target: 90 },
  { metric: "Kitchen Efficiency", value: 87, target: 85 },
]

const utilizationData = [
  { category: "Kitchen Capacity", used: 75, available: 25 },
  { category: "Delivery Vehicles", used: 60, available: 40 },
  { category: "Staff Utilization", used: 82, available: 18 },
  { category: "Asset Usage", used: 68, available: 32 },
]

const categoryDistribution = [
  { name: "Corporate Events", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Weddings", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Birthday Parties", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Other", value: 15, color: "hsl(var(--chart-4))" },
]

const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const categoryChartConfig = {
  "Corporate Events": {
    label: "Corporate Events",
    color: "hsl(var(--chart-1))",
  },
  Weddings: {
    label: "Weddings",
    color: "hsl(var(--chart-2))",
  },
  "Birthday Parties": {
    label: "Birthday Parties",
    color: "hsl(var(--chart-3))",
  },
  Other: {
    label: "Other",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function Reporting() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reporting & Analytics</h2>
          <p className="text-muted-foreground">
            Dashboards and analytics for performance and utilization
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Export Report
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$906,000</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+15.2%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">329</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+12.8%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,752</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+2.1%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Growth</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+8.5%</span> from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue & Orders Chart */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Revenue and orders over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig}>
              <AreaChart
                accessibilityLayer
                data={revenueData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="revenue"
                  type="natural"
                  fill="var(--color-revenue)"
                  fillOpacity={0.4}
                  stroke="var(--color-revenue)"
                />
                <Area
                  dataKey="orders"
                  type="natural"
                  fill="var(--color-orders)"
                  fillOpacity={0.4}
                  stroke="var(--color-orders)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Distribution</CardTitle>
            <CardDescription>Orders by event category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={categoryChartConfig}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {categoryDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators vs targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {performanceData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Target: {item.target}%</span>
                    <Badge
                      variant={item.value >= item.target ? "default" : "secondary"}
                    >
                      {item.value}%
                    </Badge>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  {item.value < item.target && (
                    <div
                      className="absolute top-0 h-2 border-r-2 border-dashed border-muted-foreground"
                      style={{ left: `${item.target}%` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Utilization Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Resource Utilization</CardTitle>
          <CardDescription>Current utilization rates across different resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {utilizationData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">
                      Used: {item.used}%
                    </span>
                    <span className="text-muted-foreground">
                      Available: {item.available}%
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${item.used}%` }}
                    />
                    <div
                      className="h-full bg-green-500 rounded-full transition-all -mt-3"
                      style={{ width: `${item.available}%`, marginLeft: `${item.used}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Reports */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top Performing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Best Sales Month</span>
              <Badge>June</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Highest Order Value</span>
              <span className="font-semibold">$23,400</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Most Popular Category</span>
              <Badge variant="secondary">Corporate Events</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Efficiency Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Avg. Delivery Time</span>
              <span className="font-semibold">1h 45m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Kitchen Efficiency</span>
              <span className="font-semibold">87%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">On-Time Rate</span>
              <span className="font-semibold">89%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Growth Indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Revenue Growth</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-green-500">+15.2%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Order Growth</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-green-500">+12.8%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Customer Growth</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-green-500">+8.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

