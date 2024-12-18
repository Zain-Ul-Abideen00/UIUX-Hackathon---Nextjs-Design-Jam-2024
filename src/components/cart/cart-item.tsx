"use client"

import { Heart, Trash2 } from "lucide-react"
import Image from "next/image"
import QuantitySelector from "@/components/cart/quantity-selector"
import { useState } from "react";


export default function CartItem() {

  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="border-t border-gray-200 py-4 sm:py-6">
      <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row">
        <div className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] bg-gray-50">
          <Image
            src="/products/1.png"
            alt="Product"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
            <div className="space-y-1">
              <h3 className="font-medium text-sm sm:text-base">
                Nike Dri-FIT ADV TechKnit Ultra
              </h3>
              <p className="text-gray-500 text-sm">
                Men&apos;s Short-Sleeve Running Top
              </p>
              <p className="text-gray-500 text-sm">Ashen Slate/Cobalt Bliss</p>
              <div className="flex flex-col sm:flex-row sm:gap-8 space-y-2 sm:space-y-0 mt-2 sm:mt-0">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-500">Size</span>
                  <span>L</span>
                </div>
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  max={10} // Or whatever maximum quantity you want to allow
                />
              </div>
            </div>
            <p className="font-medium text-sm sm:text-base">MRP: ₹ 3,895.00</p>
          </div>

          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 