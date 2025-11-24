import { Lock } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface LockedModuleProps {
  moduleName: string
}

export function LockedModule({ moduleName }: LockedModuleProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-muted p-4">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">{moduleName}</CardTitle>
          <CardDescription className="text-base mt-2">
            On Confirmation these module will be made available
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">
            This module is currently locked. Please contact your administrator to enable access.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

