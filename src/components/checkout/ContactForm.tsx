import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What&apos;s your contact information?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
          <p className="text-sm text-muted-foreground">
            A confirmation email will be sent after checkout.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Phone Number" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <p>A carrier might contact you to confirm delivery.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 