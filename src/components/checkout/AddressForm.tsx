import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function AddressForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter your name and address:</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address1">Address Line 1</Label>
          <Input id="address1" placeholder="Address Line 1" />
        </div>

        {/* Additional address fields */}
        
        <div className="flex items-center space-x-2">
          <Checkbox id="saveAddress" />
          <Label htmlFor="saveAddress">Save this address to my profile</Label>
        </div>
      </CardContent>
    </Card>
  )
} 