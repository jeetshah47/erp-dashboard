import {
  ShoppingCart,
  ChefHat,
  Truck,
  Package,
  Zap,
  FileCheck,
  BarChart3,
  Settings,
  Home,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Ordering & Sales",
    icon: ShoppingCart,
    value: "ordering",
  },
  {
    title: "Kitchen & Production",
    icon: ChefHat,
    value: "kitchen",
  },
  {
    title: "Logistics & Delivery",
    icon: Truck,
    value: "logistics",
  },
  {
    title: "Asset & Inventory",
    icon: Package,
    value: "assets",
  },
  {
    title: "Workflow Automation",
    icon: Zap,
    value: "workflow",
  },
  {
    title: "Consent Management",
    icon: FileCheck,
    value: "consent",
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    value: "reporting",
  },
]

const secondaryItems = [
  {
    title: "Settings",
    icon: Settings,
  },
]

interface AppSidebarProps {
  activeTab?: string
  onTabChange?: (value: string) => void
}

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  const handleModuleClick = (value: string) => {
    if (onTabChange) {
      onTabChange(value)
    }
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Home className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">ERP Dashboard</span>
                  <span className="truncate text-xs">Business Suite</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={activeTab === item.value}
                    onClick={() => handleModuleClick(item.value)}
                  >
                    <a href={`#${item.value}`} onClick={(e) => e.preventDefault()}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href="#">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <span className="text-xs font-semibold">JD</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">John Doe</span>
                  <span className="truncate text-xs">john@example.com</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
