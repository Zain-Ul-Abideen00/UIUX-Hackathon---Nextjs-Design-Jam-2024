import { Product } from "@/types/product";
import { Button } from "../ui/Button";
import { ShoppingCart } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Category */}
      <div className="text-sm text-gray-600">{product.category}</div>

      {/* Product Title */}
      <h1 className="text-3xl font-medium text-gray-900">{product.name}</h1>

      {/* Price */}
      <div className="text-lg font-medium text-gray-900">
        ₹ {product.price.toLocaleString("en-IN")}.00
      </div>

      {/* Description */}
      <p className="text-base text-gray-600">{product.description}</p>

      {/* Add to Cart Button */}
      <Button className="w-full flex items-center justify-center gap-2 rounded-full py-6 mt-4">
        <ShoppingCart className="h-5 w-5" />
        Add To Cart
      </Button>

      {/* Additional Info */}
      <div className="mt-8 space-y-4">
        <div className="text-sm">
          <span className="font-medium">Style: </span>
          {product.id}
        </div>
        {product.isNew && (
          <div className="inline-block bg-black text-white text-xs px-2 py-1 rounded">
            New Release
          </div>
        )}
      </div>
    </div>
  );
} 