import Image from "next/image"
import { Separator } from "@/components/ui/separator"   

const products = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top",
    price: "₹3,895.00",
    size: "L",
    quantity: 1,
    image: "/products/1.png"
  },
  {
    id: 2,
    name: "Nike Air Max 97 SE Men's Shoes",
    price: "₹16,995.00",
    size: "UK 8",
    quantity: 1,
    image: "/products/2.png"
  }
]

export function ProductList() {
  return (
    <div className="space-y-6">
      <h3 className="font-medium">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
      
      <div className="space-y-6">
        {products.map((product, index) => (
          <div key={product.id}>
            {index > 0 && <Separator className="mb-6" />}
            <div className="flex gap-4">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-muted-foreground">Qty {product.quantity}</p>
                <p className="text-sm text-muted-foreground">Size {product.size}</p>
                <p className="text-sm text-muted-foreground">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 