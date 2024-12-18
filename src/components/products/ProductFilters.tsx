"use client";

import { Category, Product } from "@/types/product";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface ProductFiltersProps {
  products: Product[];
  categories?: Category[];
  selectedCategories: string[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

const priceRanges = [
  { id: "under-2500", label: "Under ₹ 2,500.00" },
  { id: "2501-7500", label: "₹ 2,501.00 - ₹ 7,500.00" },
];

const genderFilters = [
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "boys", label: "Boys" },
  { id: "girls", label: "Girls" },
];

const topLinks = [
  { href: "/shoes", label: "Shoes" },
  { href: "/shorts", label: "Shorts" },
  { href: "/hoodies-pullovers", label: "Hoodies & Pullovers" },
  { href: "/jackets-vests", label: "Jackets & Vests" },
  { href: "/pants-tights", label: "Pants & Tights" },
  { href: "/swimming", label: "Swimming" },
  { href: "/socks", label: "Socks" },
  { href: "/accessories-equipment", label: "Accessories & Equipment" },
];

const categories: Category[] = [
  { id: "1", name: "Men's Shoes", value: "men's-shoes" },
  { id: "2", name: "Women's Shoes", value: "women's-shoes" },
  { id: "3", name: "Men's Shorts", value: "men's-shorts" },
  { id: "4", name: "Women's Shorts", value: "women's-shorts" },
  { id: "5", name: "Men's Top", value: "men's-top" },
  { id: "6", name: "Women's Top", value: "women's-top" },
  { id: "7", name: "Kids", value: "kids" },
];

export function ProductFilters({ 
  products, 
  onFilterChange,
  
}: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleFilterChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    let filteredProducts = [...products];
    if (updatedCategories.length > 0) {
      filteredProducts = products.filter((product) =>
        updatedCategories.includes(product.category.toLowerCase().replace(" ", "-"))
      );
    }

    onFilterChange?.(filteredProducts);
  };

  return (
    <div className="sticky top-14 w-[260px] flex-shrink-0 border-r">
      <ScrollArea className="h-[calc(100vh-9rem)] pt-5">
        {/* Top Links Section */}
        <div className="space-y-4 mb-6">
          {topLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="categories">
            {/* Categories Section */}
            <AccordionItem value="categories" className="border-b">
              <AccordionTrigger className="text-sm font-medium pe-4">
                Categories
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-1">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.value)}
                        onCheckedChange={() => handleFilterChange(category.value)}
                      />
                      <label
                        htmlFor={category.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Gender Section */}
            <AccordionItem value="gender" className="border-b">
              <AccordionTrigger className="text-sm font-medium pe-4">
                Gender
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-1">
                  {genderFilters.map((filter) => (
                    <div key={filter.id} className="flex items-center space-x-2">
                      <Checkbox id={filter.id} />
                      <label
                        htmlFor={filter.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Price Range Section */}
            <AccordionItem value="price" className="border-b">
              <AccordionTrigger className="text-sm font-medium pe-4">
                Shop By Price
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-1">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-2">
                      <Checkbox id={range.id} />
                      <label
                        htmlFor={range.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
