import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Plus,
  FileText,
  Shield,
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell } from "recharts"

const consents = [
  {
    id: "CONS-001",
    clientName: "John Smith",
    clientEmail: "john.smith@example.com",
    orderId: "ORD-001",
    consentType: "Data Processing",
    status: "active",
    signedDate: "2024-01-10",
    expiryDate: "2025-01-10",
    version: "1.0",
  },
  {
    id: "CONS-002",
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@example.com",
    orderId: "ORD-002",
    consentType: "Marketing Communications",
    status: "active",
    signedDate: "2024-01-12",
    expiryDate: "2025-01-12",
    version: "1.0",
  },
  {
    id: "CONS-003",
    clientName: "Mike Davis",
    clientEmail: "mike.davis@example.com",
    orderId: "ORD-003",
    consentType: "Data Processing",
    status: "expired",
    signedDate: "2023-01-15",
    expiryDate: "2024-01-15",
    version: "1.0",
  },
  {
    id: "CONS-004",
    clientName: "Emily Brown",
    clientEmail: "emily.brown@example.com",
    orderId: "ORD-004",
    consentType: "Photo/Video Usage",
    status: "pending",
    signedDate: null,
    expiryDate: null,
    version: "2.0",
  },
]

const consentTypes = [
  {
    type: "Data Processing",
    description: "Consent to process personal data for order fulfillment",
    required: true,
    activeConsents: 245,
  },
  {
    type: "Marketing Communications",
    description: "Consent to receive marketing emails and promotions",
    required: false,
    activeConsents: 189,
  },
  {
    type: "Photo/Video Usage",
    description: "Consent to use photos/videos for promotional purposes",
    required: false,
    activeConsents: 156,
  },
  {
    type: "Third-Party Sharing",
    description: "Consent to share data with trusted partners",
    required: false,
    activeConsents: 98,
  },
]

const pendingConsents = [
  {
    id: "PEND-001",
    clientName: "Emily Brown",
    orderId: "ORD-004",
    consentType: "Photo/Video Usage",
    requestedDate: "2024-01-14",
    daysPending: 1,
  },
  {
    id: "PEND-002",
    clientName: "Robert Taylor",
    orderId: "ORD-005",
    consentType: "Marketing Communications",
    requestedDate: "2024-01-13",
    daysPending: 2,
  },
]

const consentCollectionData = [
  { day: "Mon", collected: 45, pending: 8 },
  { day: "Tue", collected: 52, pending: 6 },
  { day: "Wed", collected: 48, pending: 10 },
  { day: "Thu", collected: 58, pending: 5 },
  { day: "Fri", collected: 62, pending: 4 },
  { day: "Sat", collected: 38, pending: 3 },
  { day: "Sun", collected: 28, pending: 2 },
]

const consentStatusData = [
  { name: "Active", value: 688, color: "hsl(var(--chart-1))" },
  { name: "Pending", value: 12, color: "hsl(var(--chart-2))" },
  { name: "Expired", value: 34, color: "hsl(var(--chart-3))" },
  { name: "Revoked", value: 8, color: "hsl(var(--chart-4))" },
]

const consentTypeData = [
  { type: "Data Processing", count: 245, compliance: 98 },
  { type: "Marketing", count: 189, compliance: 95 },
  { type: "Photo/Video", count: 156, compliance: 92 },
  { type: "Third-Party", count: 98, compliance: 88 },
]

const consentChartConfig = {
  collected: {
    label: "Collected",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const statusChartConfig = {
  Active: {
    label: "Active",
    color: "hsl(var(--chart-1))",
  },
  Pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
  Expired: {
    label: "Expired",
    color: "hsl(var(--chart-3))",
  },
  Revoked: {
    label: "Revoked",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function ConsentManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight">Consent Management</h2>
          <p className="text-muted-foreground mt-2">
            Collect and manage client consent securely within the system
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Consent
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Consents</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">688</div>
            <p className="text-xs text-muted-foreground">Valid and active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Awaiting signature</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expired</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">Requires renewal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.2%</div>
            <p className="text-xs text-muted-foreground">Overall compliance</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Consent Collection Trend</CardTitle>
            <CardDescription>Daily consent collection and pending requests</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={consentChartConfig}>
              <AreaChart
                accessibilityLayer
                data={consentCollectionData}
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
                  dataKey="collected"
                  type="natural"
                  fill="var(--color-collected)"
                  fillOpacity={0.4}
                  stroke="var(--color-collected)"
                />
                <Area
                  dataKey="pending"
                  type="natural"
                  fill="var(--color-pending)"
                  fillOpacity={0.4}
                  stroke="var(--color-pending)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Consent Status Distribution</CardTitle>
            <CardDescription>Current status of all consents</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={statusChartConfig}>
              <PieChart>
                <Pie
                  data={consentStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {consentStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {consentStatusData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Consent Type Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Consent Type Performance</CardTitle>
          <CardDescription>Count and compliance rate by consent type</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={consentChartConfig}>
            <BarChart
              accessibilityLayer
              data={consentTypeData}
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
                dataKey="count"
                fill="var(--color-collected)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="compliance"
                fill="var(--color-pending)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Consent Types */}
      <Card>
        <CardHeader>
          <CardTitle>Consent Types</CardTitle>
          <CardDescription>Manage different types of client consents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {consentTypes.map((consentType, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{consentType.type}</h3>
                  {consentType.required && (
                    <Badge variant="destructive">Required</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {consentType.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Consents:</span>
                  <span className="font-medium">{consentType.activeConsents}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Consent Records */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Consent Records</CardTitle>
              <CardDescription>View and manage all client consent records</CardDescription>
            </div>
            <div className="flex gap-2">
              <Input placeholder="Search consents..." className="w-64" />
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {consents.map((consent) => (
              <div
                key={consent.id}
                className="rounded-lg border p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{consent.id}</span>
                      <Badge
                        variant={
                          consent.status === "active"
                            ? "default"
                            : consent.status === "expired"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {consent.status}
                      </Badge>
                    </div>
                    <p className="font-medium mb-2">{consent.clientName}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Email:</span>
                        <span className="ml-2 font-medium">{consent.clientEmail}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Order:</span>
                        <span className="ml-2 font-medium">{consent.orderId}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Type:</span>
                        <span className="ml-2 font-medium">{consent.consentType}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Version:</span>
                        <span className="ml-2 font-medium">{consent.version}</span>
                      </div>
                      {consent.signedDate && (
                        <div>
                          <span className="text-muted-foreground">Signed:</span>
                          <span className="ml-2 font-medium">{consent.signedDate}</span>
                        </div>
                      )}
                      {consent.expiryDate && (
                        <div>
                          <span className="text-muted-foreground">Expires:</span>
                          <span className="ml-2 font-medium">{consent.expiryDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    {consent.status === "expired" && (
                      <Button variant="default" size="sm">
                        Renew
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Consents */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Consents</CardTitle>
          <CardDescription>Consents awaiting client signature</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingConsents.map((pending) => (
              <div
                key={pending.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{pending.id}</span>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <p className="font-medium mb-2">{pending.clientName}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Order:</span>
                        <span className="ml-2 font-medium">{pending.orderId}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Type:</span>
                        <span className="ml-2 font-medium">{pending.consentType}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Requested:</span>
                        <span className="ml-2 font-medium">{pending.requestedDate}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Days Pending:</span>
                        <span className="ml-2 font-medium">{pending.daysPending}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      Remind Client
                    </Button>
                    <Button variant="default" size="sm">
                      Send Link
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

