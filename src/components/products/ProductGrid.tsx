import React from 'react';
import { Product, ProductGridProps } from "@/types/product"
import Image from 'next/image';

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mb-10 pb-10">
      {products.map((product: Product) => (
        <div key={product.id} className="product-card">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
            />
            {
              <span
                className={`${
                  product.isNew
                    ? ""
                    : "absolute top-2 left-2 bg-orange-700 text-white px-2 py-1 text-sm"
                }`}
              >
                {product.isNew ? "Just In" : "Promo Exclusion"}
              </span>
            }
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="font-medium text-lg text-orange-700">
              {product.isNew ? "Just In" : "Promo Exclusion"}
            </h3>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-500">
              {product.colors} Colour{product.colors !== 1 ? "s" : ""}
            </p>
            <p className="font-medium">
              MRP : ₹ {product.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 