import {
  ShoppingCart,
  Package,
  Clock,
  CheckCircle2,
  AlertCircle,
  MapPin,
  User,
  Calendar,
  DollarSign,
  TrendingUp,
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
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell, Line, LineChart } from "recharts"

const orders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    event: "Corporate Event - Tech Summit",
    date: "2024-01-15",
    status: "pending",
    amount: 12500,
    items: 45,
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    event: "Wedding Reception",
    date: "2024-01-18",
    status: "confirmed",
    amount: 18900,
    items: 78,
  },
  {
    id: "ORD-003",
    customer: "Mike Davis",
    event: "Birthday Party",
    date: "2024-01-20",
    status: "in-progress",
    amount: 5600,
    items: 23,
  },
  {
    id: "ORD-004",
    customer: "Emily Brown",
    event: "Product Launch",
    date: "2024-01-22",
    status: "delivered",
    amount: 23400,
    items: 95,
  },
]

const liveOrders = [
  {
    id: "ORD-005",
    customer: "David Wilson",
    event: "Conference",
    location: "Downtown Convention Center",
    status: "preparing",
    timeRemaining: "2h 30m",
  },
  {
    id: "ORD-006",
    customer: "Lisa Anderson",
    event: "Gala Dinner",
    location: "Grand Hotel",
    status: "ready",
    timeRemaining: "1h 15m",
  },
  {
    id: "ORD-007",
    customer: "Robert Taylor",
    event: "Team Building",
    location: "Beach Resort",
    status: "out-for-delivery",
    timeRemaining: "45m",
  },
]

const revenueData = [
  { month: "Jan", revenue: 125000, orders: 45 },
  { month: "Feb", revenue: 145000, orders: 52 },
  { month: "Mar", revenue: 138000, orders: 48 },
  { month: "Apr", revenue: 167000, orders: 61 },
  { month: "May", revenue: 152000, orders: 55 },
  { month: "Jun", revenue: 189000, orders: 68 },
]

const orderStatusData = [
  { name: "Delivered", value: 156, color: "hsl(var(--chart-1))" },
  { name: "In Progress", value: 45, color: "hsl(var(--chart-2))" },
  { name: "Pending", value: 23, color: "hsl(var(--chart-3))" },
  { name: "Confirmed", value: 23, color: "hsl(var(--chart-4))" },
]

const dailyOrdersData = [
  { day: "Mon", orders: 12, revenue: 45000 },
  { day: "Tue", orders: 15, revenue: 58000 },
  { day: "Wed", orders: 18, revenue: 67000 },
  { day: "Thu", orders: 14, revenue: 52000 },
  { day: "Fri", orders: 22, revenue: 89000 },
  { day: "Sat", orders: 28, revenue: 112000 },
  { day: "Sun", orders: 20, revenue: 78000 },
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

const orderStatusChartConfig = {
  Delivered: {
    label: "Delivered",
    color: "hsl(var(--chart-1))",
  },
  "In Progress": {
    label: "In Progress",
    color: "hsl(var(--chart-2))",
  },
  Pending: {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
  Confirmed: {
    label: "Confirmed",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function OrderingSales() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Ordering & Sales</h2>
          <p className="text-muted-foreground">
            Manage customer orders, event details, and live order tracking
          </p>
        </div>
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" />
          New Order
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125,400</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+8.5%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,080</div>
            <p className="text-xs text-muted-foreground">Per order</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Orders Trend</CardTitle>
            <CardDescription>Revenue and order volume over the last 6 months</CardDescription>
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
            <CardTitle>Order Status Distribution</CardTitle>
            <CardDescription>Current distribution of orders by status</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={orderStatusChartConfig}>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {orderStatusData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value} orders</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
          <CardDescription>Daily orders and revenue for the current week</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={revenueChartConfig}>
            <BarChart
              accessibilityLayer
              data={dailyOrdersData}
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
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar
                dataKey="revenue"
                fill="var(--color-revenue)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="orders"
                fill="var(--color-orders)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Live Order Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Live Order Tracking</CardTitle>
          <CardDescription>Real-time status of active orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {liveOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{order.id}</span>
                      <Badge
                        variant={
                          order.status === "ready"
                            ? "default"
                            : order.status === "out-for-delivery"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {order.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {order.customer} - {order.event}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{order.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="h-4 w-4" />
                    <span>{order.timeRemaining}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage and track all customer orders</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Search orders..." className="w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{order.id}</span>
                      <Badge
                        variant={
                          order.status === "delivered"
                            ? "default"
                            : order.status === "confirmed"
                            ? "secondary"
                            : order.status === "in-progress"
                            ? "outline"
                            : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{order.customer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{order.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{order.event}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">${order.amount.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.items} items
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

