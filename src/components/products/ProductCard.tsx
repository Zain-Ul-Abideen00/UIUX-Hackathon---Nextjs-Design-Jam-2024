import Image from 'next/image'
import { cn } from "@/lib/utils"

interface ProductCardProps {
  image: string
  name: string
  category: string
  price: string
  className?: string
}

export function ProductCard({ image, name, category, price, className }: ProductCardProps) {
  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  )
} 