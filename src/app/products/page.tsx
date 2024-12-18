"use client";

import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductHeader } from '@/components/products/ProductHeader';
import { RelatedCategories } from '@/components/products/RelatedCategories';
import { useState } from 'react';
import { Product, Category } from "@/types/product";
import productsData from "@/data/products.json";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function ProductsPage() {
  const [products] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productsData);
  const [selectedCategories] = useState<string[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const handleSortChange = (sortedProducts: Product[]) => {
    setFilteredProducts(sortedProducts);
  };

  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const toggleFilter = () => {
    if (window.innerWidth < 1024) {
      setIsMobileFilterVisible(!isMobileFilterVisible);
    } else {
      setIsFilterVisible(!isFilterVisible);
    }
  };

  const categories: Category[] = [
    { id: "1", name: "Men's Shoes", value: "men's-shoes" },
    { id: "2", name: "Women's Shoes", value: "women's-shoes" },
    { id: "3", name: "Men's Shorts", value: "men's-shorts" },
    { id: "4", name: "Women's Shorts", value: "women's-shorts" },
    { id: "5", name: "Men's Top", value: "men's-top" },
    { id: "6", name: "Women's Top", value: "women's-top" },
    { id: "7", name: "Kids", value: "kids" },
  ];

  const handleFilterChange = (filteredProducts: Product[]) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="mx-auto px-5 sm:px-10 py-8">
      <ProductHeader
        totalProducts={products.length}
        onFilterToggle={toggleFilter}
        isFilterVisible={isFilterVisible}
        products={products}
        onSortChange={handleSortChange}
      />
      <div
        className={`flex gap-8 ${isFilterVisible ? "" : "lg:flex-row-reverse"}`}
      >
        {isFilterVisible && (
          <aside className="w-64 hidden lg:block">
            <ProductFilters
              products={products}
              categories={categories}
              selectedCategories={selectedCategories}
              onFilterChange={handleFilterChange}
            />
          </aside>
        )}
        <main className={`flex-1 ${isFilterVisible ? "" : "w-full"}`}>
          <ProductGrid products={filteredProducts} />
          <RelatedCategories />
        </main>
      </div>

      {/* Mobile Sheet */}
      <Sheet
        open={isMobileFilterVisible}
        onOpenChange={setIsMobileFilterVisible}
      >
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <ProductFilters
            products={products}
            categories={categories}
            selectedCategories={selectedCategories}
            onFilterChange={handleFilterChange}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}