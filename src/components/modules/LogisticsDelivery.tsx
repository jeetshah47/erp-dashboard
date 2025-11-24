import {
  Truck,
  MapPin,
  Clock,
  CheckCircle2,
  Route,
  Package,
  Navigation,
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

const deliveries = [
  {
    id: "DEL-001",
    orderId: "ORD-001",
    driver: "John Smith",
    vehicle: "Van-001",
    route: "Downtown → Convention Center",
    status: "in-transit",
    progress: 65,
    estimatedArrival: "2:30 PM",
    distance: "12.5 km",
    packages: 45,
  },
  {
    id: "DEL-002",
    orderId: "ORD-002",
    driver: "Sarah Johnson",
    vehicle: "Van-002",
    route: "Warehouse → Grand Hotel",
    status: "out-for-delivery",
    progress: 30,
    estimatedArrival: "3:15 PM",
    distance: "18.2 km",
    packages: 78,
  },
  {
    id: "DEL-003",
    orderId: "ORD-003",
    driver: "Mike Davis",
    vehicle: "Van-003",
    route: "Kitchen → Beach Resort",
    status: "delivered",
    progress: 100,
    estimatedArrival: "Completed",
    distance: "25.8 km",
    packages: 23,
  },
  {
    id: "DEL-004",
    orderId: "ORD-004",
    driver: "Emily Brown",
    vehicle: "Van-004",
    route: "Warehouse → Office Complex",
    status: "scheduled",
    progress: 0,
    estimatedArrival: "4:00 PM",
    distance: "8.5 km",
    packages: 95,
  },
]

const routes = [
  {
    id: "ROUTE-001",
    name: "Downtown Route",
    stops: 5,
    totalDistance: "45.2 km",
    estimatedTime: "2h 15m",
    status: "active",
    vehicles: 2,
  },
  {
    id: "ROUTE-002",
    name: "Suburban Route",
    stops: 8,
    totalDistance: "78.5 km",
    estimatedTime: "3h 30m",
    status: "planned",
    vehicles: 3,
  },
  {
    id: "ROUTE-003",
    name: "City Center Route",
    stops: 4,
    totalDistance: "22.3 km",
    estimatedTime: "1h 20m",
    status: "completed",
    vehicles: 1,
  },
]

const assetReturns = [
  {
    id: "RET-001",
    orderId: "ORD-001",
    items: ["Table Linens (20)", "Centerpieces (15)", "Serving Trays (10)"],
    status: "pending",
    expectedReturn: "2024-01-16",
    location: "Convention Center",
  },
  {
    id: "RET-002",
    orderId: "ORD-002",
    items: ["Chairs (50)", "Tables (10)", "Tableware (100)"],
    status: "confirmed",
    expectedReturn: "2024-01-19",
    location: "Grand Hotel",
  },
]

const deliveryPerformanceData = [
  { day: "Mon", delivered: 18, inTransit: 5 },
  { day: "Tue", delivered: 22, inTransit: 6 },
  { day: "Wed", delivered: 20, inTransit: 4 },
  { day: "Thu", delivered: 24, inTransit: 7 },
  { day: "Fri", delivered: 28, inTransit: 8 },
  { day: "Sat", delivered: 32, inTransit: 6 },
  { day: "Sun", delivered: 15, inTransit: 3 },
]

const deliveryTimeData = [
  { hour: "8 AM", avgTime: 95 },
  { hour: "10 AM", avgTime: 85 },
  { hour: "12 PM", avgTime: 105 },
  { hour: "2 PM", avgTime: 90 },
  { hour: "4 PM", avgTime: 110 },
  { hour: "6 PM", avgTime: 100 },
]

const routeEfficiencyData = [
  { route: "Downtown", deliveries: 45, efficiency: 92 },
  { route: "Suburban", deliveries: 38, efficiency: 88 },
  { route: "City Center", deliveries: 52, efficiency: 95 },
  { route: "Airport", deliveries: 28, efficiency: 85 },
]

const deliveryChartConfig = {
  delivered: {
    label: "Delivered",
    color: "hsl(var(--chart-1))",
  },
  inTransit: {
    label: "In Transit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const timeChartConfig = {
  avgTime: {
    label: "Avg. Time (min)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function LogisticsDelivery() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight">Logistics & Delivery</h2>
          <p className="text-muted-foreground mt-2">
            Route planning, delivery tracking, and asset return confirmation
          </p>
        </div>
        <Button>
          <Truck className="mr-2 h-4 w-4" />
          New Delivery
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">In transit</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vehicles Active</CardTitle>
            <Navigation className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">On the road</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered Today</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Delivery Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1h 45m</div>
            <p className="text-xs text-muted-foreground">Per delivery</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Delivery Performance</CardTitle>
            <CardDescription>Daily deliveries and in-transit orders</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={deliveryChartConfig}>
              <BarChart
                accessibilityLayer
                data={deliveryPerformanceData}
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
                  dataKey="delivered"
                  fill="var(--color-delivered)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="inTransit"
                  fill="var(--color-inTransit)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Delivery Time</CardTitle>
            <CardDescription>Delivery time trends throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={timeChartConfig}>
              <LineChart
                accessibilityLayer
                data={deliveryTimeData}
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

      {/* Route Efficiency */}
      <Card>
        <CardHeader>
          <CardTitle>Route Efficiency Analysis</CardTitle>
          <CardDescription>Deliveries and efficiency by route</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={deliveryChartConfig}>
            <BarChart
              accessibilityLayer
              data={routeEfficiencyData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="route"
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
                dataKey="deliveries"
                fill="var(--color-delivered)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="efficiency"
                fill="var(--color-inTransit)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Route Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Route Planning</CardTitle>
          <CardDescription>Optimized delivery routes and schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {routes.map((route) => (
              <div
                key={route.id}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{route.name}</h3>
                  <Badge
                    variant={
                      route.status === "active"
                        ? "default"
                        : route.status === "completed"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {route.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Stops</span>
                    <span className="font-medium">{route.stops}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Distance</span>
                    <span className="font-medium">{route.totalDistance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Est. Time</span>
                    <span className="font-medium">{route.estimatedTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Vehicles</span>
                    <span className="font-medium">{route.vehicles}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Route className="mr-2 h-4 w-4" />
                  View Route
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Delivery Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Delivery Tracking</CardTitle>
          <CardDescription>Real-time tracking of all active deliveries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{delivery.id}</span>
                      <Badge
                        variant={
                          delivery.status === "delivered"
                            ? "default"
                            : delivery.status === "in-transit"
                            ? "secondary"
                            : delivery.status === "out-for-delivery"
                            ? "outline"
                            : "outline"
                        }
                      >
                        {delivery.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span>{delivery.orderId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-muted-foreground" />
                        <span>{delivery.vehicle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{delivery.route}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>ETA: {delivery.estimatedArrival}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {delivery.packages} packages • {delivery.distance}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Track
                  </Button>
                </div>
                {delivery.status !== "delivered" && delivery.status !== "scheduled" && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{delivery.progress}%</span>
                      </div>
                      <Progress value={delivery.progress} />
                    </div>
                  </>
                )}
                {delivery.status === "delivered" && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Successfully delivered</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Asset Return Confirmation */}
      <Card>
        <CardHeader>
          <CardTitle>Asset Return Confirmation</CardTitle>
          <CardDescription>Track and confirm return of reusable items</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assetReturns.map((returnItem) => (
              <div
                key={returnItem.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{returnItem.id}</span>
                      <Badge
                        variant={
                          returnItem.status === "confirmed" ? "default" : "outline"
                        }
                      >
                        {returnItem.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Order: {returnItem.orderId} • Location: {returnItem.location}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expected Return: {returnItem.expectedReturn}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Confirm Return
                  </Button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Items to Return:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {returnItem.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

