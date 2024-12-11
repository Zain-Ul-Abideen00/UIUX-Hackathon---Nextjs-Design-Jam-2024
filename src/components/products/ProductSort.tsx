"use client";

import { useState } from "react";
import { SortingDropdown } from "./SortingDropdown";
import { Product, SortOption } from "@/types/product";

interface ProductSortProps {
  onSortChange: (sortedProducts: Product[]) => void;
  products: Product[];
}

export function ProductSort({ onSortChange, products }: ProductSortProps) {
  const [currentSort, setCurrentSort] = useState<SortOption>("featured");

  const handleSort = (sortOption: SortOption) => {
    let sortedProducts = [...products];

    switch (sortOption) {
      case "price-low":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sortedProducts = sortedProducts.filter((product) => product.isNew === true);
        sortedProducts.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case "promo":
        sortedProducts = sortedProducts.filter((product) => product.isNew === false);
        sortedProducts.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      default:
        sortedProducts.sort((a, b) => Number(a.id) - Number(b.id));
    }

    setCurrentSort(sortOption);
    onSortChange(sortedProducts);
  };

  return (
    <SortingDropdown 
      currentSort={currentSort}
      onSortChange={handleSort}
    />
  );
}
