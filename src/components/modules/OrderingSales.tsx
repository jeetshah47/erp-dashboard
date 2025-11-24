import {
  ShoppingCart,
  Package,
  Clock,
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

const orders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 234-567-8900",
    event: "Corporate Event - Tech Summit",
    eventType: "Corporate",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "pending",
    amount: 12500,
    items: 45,
    location: "Convention Center",
    assignedTo: "Sales Team A",
    priority: "High",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 234-567-8901",
    event: "Wedding Reception",
    eventType: "Wedding",
    date: "2024-01-18",
    time: "6:00 PM",
    status: "confirmed",
    amount: 18900,
    items: 78,
    location: "Grand Hotel",
    assignedTo: "Sales Team B",
    priority: "Medium",
  },
  {
    id: "ORD-003",
    customer: "Mike Davis",
    email: "mike.davis@example.com",
    phone: "+1 234-567-8902",
    event: "Birthday Party",
    eventType: "Private",
    date: "2024-01-20",
    time: "2:00 PM",
    status: "in-progress",
    amount: 5600,
    items: 23,
    location: "Private Venue",
    assignedTo: "Sales Team A",
    priority: "Low",
  },
  {
    id: "ORD-004",
    customer: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "+1 234-567-8903",
    event: "Product Launch",
    eventType: "Corporate",
    date: "2024-01-22",
    time: "11:00 AM",
    status: "delivered",
    amount: 23400,
    items: 95,
    location: "Office Complex",
    assignedTo: "Sales Team C",
    priority: "High",
  },
  {
    id: "ORD-005",
    customer: "David Wilson",
    email: "david.w@example.com",
    phone: "+1 234-567-8904",
    event: "Conference",
    eventType: "Corporate",
    date: "2024-01-24",
    time: "9:00 AM",
    status: "confirmed",
    amount: 15200,
    items: 62,
    location: "Downtown Convention Center",
    assignedTo: "Sales Team B",
    priority: "High",
  },
  {
    id: "ORD-006",
    customer: "Lisa Anderson",
    email: "lisa.a@example.com",
    phone: "+1 234-567-8905",
    event: "Gala Dinner",
    eventType: "Fundraiser",
    date: "2024-01-25",
    time: "7:00 PM",
    status: "pending",
    amount: 28700,
    items: 120,
    location: "Grand Hotel",
    assignedTo: "Sales Team A",
    priority: "High",
  },
]

const liveOrders = [
  {
    id: "ORD-007",
    customer: "Robert Taylor",
    event: "Team Building",
    location: "Beach Resort",
    status: "preparing",
    timeRemaining: "2h 30m",
    items: 45,
    amount: 12500,
    assignedTo: "Kitchen Team A",
    priority: "High",
  },
  {
    id: "ORD-008",
    customer: "Jennifer Martinez",
    event: "Corporate Lunch",
    location: "Business District",
    status: "ready",
    timeRemaining: "1h 15m",
    items: 30,
    amount: 8900,
    assignedTo: "Kitchen Team B",
    priority: "Medium",
  },
  {
    id: "ORD-009",
    customer: "Michael Chen",
    event: "Product Demo",
    location: "Tech Hub",
    status: "out-for-delivery",
    timeRemaining: "45m",
    items: 25,
    amount: 6700,
    assignedTo: "Delivery Team A",
    priority: "High",
  },
  {
    id: "ORD-010",
    customer: "Amanda White",
    event: "Networking Event",
    location: "City Center",
    status: "preparing",
    timeRemaining: "3h 00m",
    items: 55,
    amount: 16800,
    assignedTo: "Kitchen Team A",
    priority: "Medium",
  },
]


export function OrderingSales() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight">Ordering & Sales</h2>
          <p className="text-muted-foreground mt-2">
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

      {/* Live Order Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Live Order Tracking</CardTitle>
          <CardDescription>Real-time status of active orders</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Order ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Customer</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Event</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Items</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Amount</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Time Remaining</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {liveOrders.map((order) => (
                  <tr key={order.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium whitespace-nowrap">{order.id}</td>
                    <td className="p-4 align-middle whitespace-nowrap">{order.customer}</td>
                    <td className="p-4 align-middle">{order.event}</td>
                    <td className="p-4 align-middle whitespace-nowrap">
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
                    </td>
                    <td className="p-4 align-middle whitespace-nowrap">{order.items}</td>
                    <td className="p-4 align-middle font-medium whitespace-nowrap">${order.amount.toLocaleString()}</td>
                    <td className="p-4 align-middle whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{order.timeRemaining}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle whitespace-nowrap">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Order ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Customer</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Event</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Items</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Amount</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium whitespace-nowrap">{order.id}</td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-xs text-muted-foreground">{order.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div>
                        <div className="font-medium">{order.event}</div>
                        <div className="text-xs text-muted-foreground">{order.eventType}</div>
                      </div>
                    </td>
                    <td className="p-4 align-middle whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div className="text-sm">
                          <div>{order.date}</div>
                          <div className="text-muted-foreground">{order.time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle whitespace-nowrap">
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
                    </td>
                    <td className="p-4 align-middle whitespace-nowrap">{order.items}</td>
                    <td className="p-4 align-middle font-medium whitespace-nowrap">${order.amount.toLocaleString()}</td>
                    <td className="p-4 align-middle whitespace-nowrap">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

