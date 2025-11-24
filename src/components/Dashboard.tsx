import { useState } from "react"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import { OrderingSales } from "@/components/modules/OrderingSales"
import { KitchenProduction } from "@/components/modules/KitchenProduction"
import { LogisticsDelivery } from "@/components/modules/LogisticsDelivery"
import { AssetInventory } from "@/components/modules/AssetInventory"
import { WorkflowAutomation } from "@/components/modules/WorkflowAutomation"
import { ConsentManagement } from "@/components/modules/ConsentManagement"
import { Reporting } from "@/components/modules/Reporting"

export function Dashboard() {
  const [activeModule, setActiveModule] = useState("ordering")

  const renderModule = () => {
    switch (activeModule) {
      case "ordering":
        return <OrderingSales />
      case "kitchen":
        return <KitchenProduction />
      case "logistics":
        return <LogisticsDelivery />
      case "assets":
        return <AssetInventory />
      case "workflow":
        return <WorkflowAutomation />
      case "consent":
        return <ConsentManagement />
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
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8">
          {renderModule()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
