import { Product } from "@/types/product";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
        {/* Left side - Product Images */}
        <div className="lg:sticky lg:top-[20px] flex-1 w-full h-fit">
          <ProductImage imageUrl={product.image} name={product.name} />
        </div>

        {/* Right side - Product Information */}
        <div className="flex-1 lg:max-w-[400px] lg:pe-16">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
} 