"use client"
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useState } from 'react'

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
  );
};

export const BestOfAirMax = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex =
        window.innerWidth >= 1024
          ? products.length - 3
          : window.innerWidth >= 640
          ? products.length - 2
          : products.length - 1;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex =
        window.innerWidth >= 1024
          ? products.length - 3
          : window.innerWidth >= 640
          ? products.length - 2
          : products.length - 1;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  return (
    <section className="w-full py-8 sm:py-[64px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex justify-between items-center h-auto sm:h-[52px] mb-4 sm:mb-[12px]">
          <h2 className="text-xl sm:text-[24px] text-[#111111] font-medium">
            Best of Air Max
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-2 sm:gap-[12px]">
            <button
              onClick={handlePrevious}
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#DADADA]"
            >
              <BsChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#111111]" />
            </button>
            <button
              onClick={handleNext}
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#DADADA]"
            >
              <BsChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#111111]" />
            </button>
          </div>
        </div>

        {/* Product Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-3 sm:gap-[12px]"
            style={{
              transform: `translateX(-${
                currentIndex *
                (window.innerWidth >= 1024
                  ? 453 // 441 + 12 gap
                  : window.innerWidth >= 640
                  ? 312 // 300 + 12 gap
                  : window.innerWidth)
              }px)`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-auto">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 