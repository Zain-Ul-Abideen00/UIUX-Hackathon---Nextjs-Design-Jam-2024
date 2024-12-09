"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react'

interface ProductCardProps {
  image: string
  name: string
  category: string
  price: number
}

const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  return (
    <div className="w-full sm:w-[300px] lg:w-[441px] h-auto">
      <div className="relative w-full aspect-square bg-[#F5F5F5]">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="h-auto sm:h-[48px] mt-3 sm:mt-[21px] flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
        <div className="flex flex-col gap-0">
          <h3 className="text-[14px] sm:text-[16px] text-[#111111] font-medium">
            {name}
          </h3>
          <p className="text-[14px] sm:text-[16px] text-[#757575]">
            {category}
          </p>
        </div>
        <span className="text-[14px] sm:text-[16px] text-[#111111]">
          ₹ {price.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  )
}

export const BestOfAirMax = () => {
  const [, setSlidesPerView] = useState(1);

  const products = [
    {
      image: "/Hero/slide.png",
      name: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: 13995,
    },
    {
      image: "/Hero/slide2.png",
      name: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: 13995,
    },
    {
      image: "/Hero/slide.png",
      name: "Nike Air Max 97 SE",
      category: "Women's Shoes",
      price: 16995,
    },
    {
      image: "/Hero/slide2.png",
      name: "Nike Air Max SYSTM",
      category: "Men's Shoes",
      price: 13995,
    },
  ];

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <section className="w-full py-8 sm:py-[64px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          {/* Header with Navigation */}
          <div className="flex justify-between items-center h-auto sm:h-[52px] mb-4 sm:mb-[12px]">
            <h2 className="text-xl sm:text-[24px] text-[#111111] font-medium">
              Best of Air Max
            </h2>
            <div className="flex gap-2 sm:gap-[12px]">
              <CarouselPrevious className="static w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#E5E5E5] hover:bg-[#DADADA] translate-y-0 flex items-center justify-center">
              </CarouselPrevious>
              <CarouselNext className="static w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#E5E5E5] hover:bg-[#DADADA] translate-y-0 flex items-center justify-center">
              </CarouselNext>
            </div>
          </div>

          {/* Product Slider */}
          <CarouselContent className="flex -ml-3 sm:-ml-4">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className={`pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3`}
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}