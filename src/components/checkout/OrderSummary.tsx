import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProductList } from "./ProductList"

export function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>₹20,890.00</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Delivery/Shipping</span>
            <span>Free</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>₹20,890.00</span>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          (The total reflects the price of your order, including all duties and taxes)
        </div>
        
        <ProductList />
      </CardContent>
    </Card>
  )
} 