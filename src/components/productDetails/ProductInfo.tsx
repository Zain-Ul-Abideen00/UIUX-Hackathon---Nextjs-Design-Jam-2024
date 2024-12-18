import { Product } from "@/types/product";
import { Button } from "../ui/Button";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("");
  
  // Sample sizes - you can modify based on your needs
  const sizes = [
    { size: "M 7 / W 8.5", available: true },
    { size: "M 7.5 / W 9", available: true },
    { size: "M 8 / W 9.5", available: true },
    { size: "M 8.5 / W 10", available: true },
    { size: "M 9 / W 10.5", available: true },
    { size: "M 9.5 / W 11", available: false },
    // Add more sizes as needed
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Category Badge */}
      <h3
        className={`font-medium text-lg ${
          product.isNew ? "text-orange-700" : "text-orange-700"
        }`}
      >
        {product.isNew ? "Just In" : "Promo Exclusion"}
      </h3>

      {/* Product Title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium text-gray-900">{product.name}</h1>
        <div className="text-base text-gray-600">{product.category}</div>
      </div>

      {/* Price */}
      <div className="text-lg font-semibold text-gray-900">
        ₹ {product.price.toLocaleString("en-IN")}.00
      </div>

      {/* Size Selection */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-base font-medium">Select Size</span>
          <button className="text-sm text-gray-600 hover:text-black">
            Size Guide
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map((sizeOption) => (
            <button
              key={sizeOption.size}
              className={`
                py-3 px-4 text-sm border rounded
                ${
                  selectedSize === sizeOption.size
                    ? "border-black"
                    : "border-gray-300"
                }
                ${
                  !sizeOption.available
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-gray-600"
                }
              `}
              disabled={!sizeOption.available}
              onClick={() => setSelectedSize(sizeOption.size)}
            >
              {sizeOption.size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart and Favorite Buttons */}
      <div className="flex flex-col gap-2 mt-4">
        <Link href="/cart">
          <Button className="w-full py-6 bg-black hover:bg-gray-800">
            Add to Bag
          </Button>
        </Link>
        <Link href="/wishlist">
          <Button
            variant="outline"
            className="w-full py-6 flex items-center justify-center gap-2"
          >
            <Heart className="h-5 w-5" />
            Favorite
          </Button>
        </Link>
      </div>

      {/* Product Description */}
      <div className="mt-6">
        <p className="text-base text-gray-600">{product.description}</p>
      </div>

      {/* Accordions Section */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="shipping">
          <AccordionTrigger className="text-2xl font-medium">
            Shipping & Returns
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>
                Free standard shipping on orders $50+ and free 60-day returns
                for Nike Members. &nbsp;
                <Link
                  href="/help"
                  className="font-semibold underline underline-offset-2"
                >
                  Learn more
                </Link>
              </p>
              <p>
                <Link
                  href="/help"
                  className="font-semibold underline underline-offset-2"
                >
                  Return policy exclusions apply.
                </Link>
              </p>
              <p>
                <Link
                  href="/location"
                  className="font-semibold underline underline-offset-2"
                >
                  Pick-up available at select Nike Stores
                </Link>
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="reviews">
          <AccordionTrigger className="text-base font-medium">
            Reviews (199)
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-black text-black" />
                ))}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-black text-black"
                    />
                  ))}
                </div>
                <span>4.9 Stars</span>
              </div>

              <button className="font-semibold text-black hover:text-gray-600 transition-all duration-300 hover:cursor-pointer ">
                Write a Review
              </button>

              {/* Review Items */}
              <div className="space-y-6">
                {/* First Review */}
                <div className="border-t pt-4">
                  <h4 className="font-medium">Clean</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-black text-black"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      Tamer657171101 - Dec 11, 2024
                    </span>
                  </div>
                  <p>Very clean and nice materials. Great color way and fit</p>
                </div>

                {/* Second Review */}
                <div className="border-t pt-4">
                  <h4 className="font-medium">
                    If You&apos;re Thinking About It, Do It
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-black text-black"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      Firebird1969 - Aug 28, 2024
                    </span>
                  </div>
                  <p>
                    Awesome Color! I was hesitant at first, as I ordered them
                    online, but they are a very cool color that goes with much
                    more than I originally
                  </p>
                </div>

                {/* Third Review */}
                <div className="border-t pt-4">
                  <h4 className="font-medium">Wld deff buy again</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-black text-black"
                        />
                      ))}
                      {[4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-black" />
                      ))}
                    </div>
                    <span className="text-gray-600">
                      Brother - Aug 14, 2024
                    </span>
                  </div>
                  <p>Besides it having a stain at the top on the orange</p>
                </div>
              </div>

              <button className="font-semibold text-black hover:text-gray-600 transition-all duration-300 hover:cursor-pointer ">
                More Reviews
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}