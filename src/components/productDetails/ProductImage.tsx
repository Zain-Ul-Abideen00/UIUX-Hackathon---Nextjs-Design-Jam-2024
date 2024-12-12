import Image from "next/image";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  return (
    <div className="max-w-[560px] h-full aspect-square flex relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-contain flex items-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 653px"
          priority
        />
    </div>
  );
} 