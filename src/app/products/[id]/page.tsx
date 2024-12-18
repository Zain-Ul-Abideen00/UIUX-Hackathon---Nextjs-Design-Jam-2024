"use client";

import { ProductDetails } from "@/components/productDetails/ProductDetails";
import { useParams } from "next/navigation";
import productsData from "@/data/products.json";
import { notFound } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const product = productsData.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-5 sm:px-10 py-8">
      <ProductDetails product={product} />
    </div>
  );
} 