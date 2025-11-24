import {
  Package,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Search,
  Plus,
  FileText,
  Calendar,
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

const assets = [
  {
    id: "AST-001",
    name: "Table Linens Set",
    category: "Linens",
    quantity: 150,
    available: 120,
    checkedOut: 30,
    status: "good",
    lastCheckIn: "2024-01-10",
  },
  {
    id: "AST-002",
    name: "Centerpiece Vases",
    category: "Decorations",
    quantity: 80,
    available: 45,
    checkedOut: 35,
    status: "good",
    lastCheckIn: "2024-01-12",
  },
  {
    id: "AST-003",
    name: "Serving Trays",
    category: "Tableware",
    quantity: 200,
    available: 180,
    checkedOut: 20,
    status: "damaged",
    lastCheckIn: "2024-01-11",
  },
  {
    id: "AST-004",
    name: "Chairs",
    category: "Furniture",
    quantity: 500,
    available: 420,
    checkedOut: 80,
    status: "good",
    lastCheckIn: "2024-01-13",
  },
]

const checkOutHistory = [
  {
    id: "CHK-001",
    assetId: "AST-001",
    assetName: "Table Linens Set",
    quantity: 20,
    orderId: "ORD-001",
    checkedOutBy: "John Smith",
    checkOutDate: "2024-01-14",
    expectedReturn: "2024-01-16",
    status: "out",
  },
  {
    id: "CHK-002",
    assetId: "AST-002",
    assetName: "Centerpiece Vases",
    quantity: 15,
    orderId: "ORD-002",
    checkedOutBy: "Sarah Johnson",
    checkOutDate: "2024-01-15",
    expectedReturn: "2024-01-19",
    status: "out",
  },
  {
    id: "CHK-003",
    assetId: "AST-004",
    assetName: "Chairs",
    quantity: 50,
    orderId: "ORD-003",
    checkedOutBy: "Mike Davis",
    checkOutDate: "2024-01-13",
    expectedReturn: "2024-01-20",
    status: "returned",
  },
]

const damages = [
  {
    id: "DMG-001",
    assetId: "AST-003",
    assetName: "Serving Trays",
    quantity: 2,
    description: "Cracked edges",
    reportedBy: "Emily Brown",
    reportedDate: "2024-01-12",
    status: "pending",
  },
  {
    id: "DMG-002",
    assetId: "AST-001",
    assetName: "Table Linens Set",
    quantity: 1,
    description: "Stain that cannot be removed",
    reportedBy: "John Smith",
    reportedDate: "2024-01-11",
    status: "repaired",
  },
]

const assetUtilizationData = [
  { day: "Mon", checkedOut: 145, returned: 120 },
  { day: "Tue", checkedOut: 165, returned: 140 },
  { day: "Wed", checkedOut: 158, returned: 135 },
  { day: "Thu", checkedOut: 172, returned: 150 },
  { day: "Fri", checkedOut: 180, returned: 165 },
  { day: "Sat", checkedOut: 195, returned: 175 },
  { day: "Sun", checkedOut: 140, returned: 125 },
]

const categoryDistributionData = [
  { name: "Linens", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Furniture", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Tableware", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Decorations", value: 15, color: "hsl(var(--chart-4))" },
]

const assetStatusData = [
  { status: "Available", count: 765 },
  { status: "Checked Out", count: 165 },
  { status: "Damaged", count: 12 },
  { status: "Maintenance", count: 8 },
]

const utilizationChartConfig = {
  checkedOut: {
    label: "Checked Out",
    color: "hsl(var(--chart-1))",
  },
  returned: {
    label: "Returned",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const categoryChartConfig = {
  Linens: {
    label: "Linens",
    color: "hsl(var(--chart-1))",
  },
  Furniture: {
    label: "Furniture",
    color: "hsl(var(--chart-2))",
  },
  Tableware: {
    label: "Tableware",
    color: "hsl(var(--chart-3))",
  },
  Decorations: {
    label: "Decorations",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function AssetInventory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Asset & Inventory</h2>
          <p className="text-muted-foreground">
            Track reusable items, manage check-in/out, record damages
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Asset
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">930</div>
            <p className="text-xs text-muted-foreground">Items tracked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">765</div>
            <p className="text-xs text-muted-foreground">Ready for use</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Checked Out</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">165</div>
            <p className="text-xs text-muted-foreground">Currently in use</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Damaged</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Asset Utilization Trend</CardTitle>
            <CardDescription>Daily check-out and return activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={utilizationChartConfig}>
              <AreaChart
                accessibilityLayer
                data={assetUtilizationData}
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
                  dataKey="checkedOut"
                  type="natural"
                  fill="var(--color-checkedOut)"
                  fillOpacity={0.4}
                  stroke="var(--color-checkedOut)"
                />
                <Area
                  dataKey="returned"
                  type="natural"
                  fill="var(--color-returned)"
                  fillOpacity={0.4}
                  stroke="var(--color-returned)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Asset Category Distribution</CardTitle>
            <CardDescription>Distribution of assets by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={categoryChartConfig}>
              <PieChart>
                <Pie
                  data={categoryDistributionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {categoryDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {categoryDistributionData.map((item) => (
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

      {/* Asset Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Asset Status Overview</CardTitle>
          <CardDescription>Current status distribution of all assets</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={utilizationChartConfig}>
            <BarChart
              accessibilityLayer
              data={assetStatusData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="status"
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
                dataKey="count"
                fill="var(--color-checkedOut)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Asset Inventory */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Asset Inventory</CardTitle>
              <CardDescription>Track all reusable items and their status</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Search assets..." className="w-64" />
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className="rounded-lg border p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{asset.id}</span>
                      <span className="font-medium">{asset.name}</span>
                      <Badge
                        variant={
                          asset.status === "good"
                            ? "default"
                            : asset.status === "damaged"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {asset.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Category:</span>
                        <p className="font-medium">{asset.category}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total:</span>
                        <p className="font-medium">{asset.quantity}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Available:</span>
                        <p className="font-medium text-green-600">{asset.available}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Checked Out:</span>
                        <p className="font-medium text-orange-600">{asset.checkedOut}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Last Check-in: {asset.lastCheckIn}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      Check Out
                    </Button>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Check-In/Out Management */}
      <Card>
        <CardHeader>
          <CardTitle>Check-In/Out History</CardTitle>
          <CardDescription>Track asset check-in and check-out records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checkOutHistory.map((record) => (
              <div
                key={record.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{record.id}</span>
                      <Badge
                        variant={record.status === "returned" ? "default" : "secondary"}
                      >
                        {record.status}
                      </Badge>
                    </div>
                    <p className="font-medium mb-2">{record.assetName}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Quantity:</span>
                        <span className="ml-2 font-medium">{record.quantity}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Order:</span>
                        <span className="ml-2 font-medium">{record.orderId}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Checked Out By:</span>
                        <span className="ml-2 font-medium">{record.checkedOutBy}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Check-Out Date:</span>
                        <span className="ml-2 font-medium">{record.checkOutDate}</span>
                      </div>
                      {record.status === "out" && (
                        <div>
                          <span className="text-muted-foreground">Expected Return:</span>
                          <span className="ml-2 font-medium">{record.expectedReturn}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {record.status === "out" && (
                    <Button variant="default" size="sm">
                      Check In
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Damage Records */}
      <Card>
        <CardHeader>
          <CardTitle>Damage Records</CardTitle>
          <CardDescription>Track and manage asset damages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {damages.map((damage) => (
              <div
                key={damage.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{damage.id}</span>
                      <Badge
                        variant={
                          damage.status === "repaired"
                            ? "default"
                            : damage.status === "pending"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {damage.status}
                      </Badge>
                    </div>
                    <p className="font-medium mb-1">{damage.assetName}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Quantity: {damage.quantity} • Reported by: {damage.reportedBy}
                    </p>
                    <p className="text-sm mb-2">{damage.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Reported: {damage.reportedDate}</span>
                    </div>
                  </div>
                  {damage.status === "pending" && (
                    <Button variant="outline" size="sm">
                      Mark Repaired
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

