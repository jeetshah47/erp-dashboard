import { useState } from "react"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import { OrderingSales } from "@/components/modules/OrderingSales"
import { Reporting } from "@/components/modules/Reporting"
import { LockedModule } from "@/components/modules/LockedModule"

// Define which modules are unlocked
const UNLOCKED_MODULES = ["ordering", "reporting"]

// Module name mapping for locked message
const MODULE_NAMES: Record<string, string> = {
  kitchen: "Kitchen & Production",
  logistics: "Logistics & Delivery",
  assets: "Asset & Inventory",
  workflow: "Workflow Automation",
  consent: "Consent Management",
}

export function Dashboard() {
  const [activeModule, setActiveModule] = useState("reporting")

  const isModuleLocked = (module: string) => {
    return !UNLOCKED_MODULES.includes(module)
  }

  const renderModule = () => {
    // Check if module is locked
    if (isModuleLocked(activeModule)) {
      return <LockedModule moduleName={MODULE_NAMES[activeModule] || activeModule} />
    }

    switch (activeModule) {
      case "ordering":
        return <OrderingSales />
      case "reporting":
        return <Reporting />
      default:
        return <OrderingSales />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar activeTab={activeModule} onTabChange={setActiveModule} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">ERP Dashboard</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8 overflow-x-hidden">
          {renderModule()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
