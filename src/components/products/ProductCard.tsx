import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group relative block">
      {/* Product Card Container */}
      <div className="product-card transition-opacity duration-300 group-hover:opacity-90">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
          {/* Product Badge */}
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-sm ${
              product.isNew ? "" : "bg-orange-700 text-white"
            }`}
          >
            {product.isNew ? "" : "Promo Exclusion"}
          </span>
        </div>

        {/* Product Info */}
        <div className="mt-3 space-y-1">
          <h3
            className={`font-medium text-lg ${
              product.isNew ? "text-orange-700" : "text-orange-700"
            }`}
          >
            {product.isNew ? "Just In" : "Promo Exclusion"}
          </h3>
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-sm text-gray-500">
            {product.colors} {product.colors === 1 ? "Color" : "Colors"}
          </p>
          <p className="font-medium">
            MRP : ₹ {product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
} 