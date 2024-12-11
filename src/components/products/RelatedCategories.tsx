"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = [
  { name: "Best Selling Products", href: "/products" },
  { name: "Best Shoes", href: "/products" },
  { name: "New Basketball Shoes", href: "/products" },
  { name: "New Football Shoes", href: "/products" },
  { name: "New Men's Shoes", href: "/products" },
  { name: "New Running Shoes", href: "/products" },
  { name: "Best Men's Shoes", href: "/products" },
  { name: "New Jordan Shoes", href: "/products" },
  { name: "Best Women's Shoes", href: "/products" },
  { name: "Best Training & Gym", href: "/products" },
]

export function RelatedCategories() {
  return (
    <section className="w-full border-t border-gray-200 py-6 my-6">
      <div className="container ">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          Related Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                "inline-flex items-center px-6 py-2 rounded-full text-sm",
                "bg-white border border-gray-300 hover:border-gray-400",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 