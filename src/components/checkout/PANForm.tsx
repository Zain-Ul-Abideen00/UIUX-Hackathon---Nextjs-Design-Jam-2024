import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function PANForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What&apos;s your PAN?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="pan">PAN</Label>
          <Input id="pan" placeholder="Enter PAN" />
          <p className="text-sm text-muted-foreground">
            Enter your PAN to enable payment with UPI, Net Banking or local card methods
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="savePAN" />
          <Label htmlFor="savePAN" className="text-sm text-muted-foreground">
            Save PAN details to Nike Profile
          </Label>
        </div>
      </CardContent>
    </Card>
  )
} 