"use client"

import { useState } from 'react'
import Image from 'next/image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const menProducts: Product[] = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short-Sleeve Running Top",
    price: 3895,
    image: "/Hero/men-top.png"
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger",
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
    image: "/Hero/men-short.png"
  },
  {
    id: 3,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short-Sleeve Running Top",
    price: 3895,
    image: "/Hero/men-top.png"
  },
  // Add more products as needed
];

const womenProducts: Product[] = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long-Sleeve Running Top",
    price: 5295,
    image: "/Hero/women-top.png"
  },
  {
    id: 2,
    name: "Nike Fast",
    description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: 3795,
    image: "/Hero/women-short.png",
  },
  {
    id: 3,
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long-Sleeve Running Top",
    price: 5295,
    image: "/Hero/women-top.png",
  },
  // Add more products as needed
];

export const GearUp = () => {
  const [menCurrentIndex, setMenCurrentIndex] = useState(0);
  const [womenCurrentIndex, setWomenCurrentIndex] = useState(0);

  const handleNext = (section: "men" | "women") => {
    if (section === "men") {
      setMenCurrentIndex((prev) =>
        prev + 1 >= menProducts.length ? 0 : prev + 1
      );
    } else {
      setWomenCurrentIndex((prev) =>
          prev + 1 >= womenProducts.length ? 0 : prev + 1
      );
    }
  };

  const handlePrev = (section: "men" | "women") => {
    if (section === "men") {
      setMenCurrentIndex((prev) =>
          prev === 0 ? Math.max(0, menProducts.length - 1) : prev - 1
      );
    } else {
      setWomenCurrentIndex((prev) =>
        prev === 0 ? Math.max(0, womenProducts.length - 1) : prev - 1
      );
    }
  };

  return (
    <section className="mx-auto px-5 sm:px-10 mb-8 sm:mb-16">
      <h2 className="text-xl sm:text-[24px] text-[#111111] font-medium mb-4 sm:mb-[25px]">
        Gear Up
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[4%] lg:ps-[3%]">
        {/* Men's Section */}
        <div className="w-full lg:w-[666px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm sm:text-[16px]">Shop Men&apos;s</span>
            <div className="flex gap-3">
              <button
                onClick={() => handlePrev("men")}
                className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D4D4D4]"
              >
                <BsChevronLeft className="w-6 h-6 text-[#111111]" />
              </button>
              <button
                onClick={() => handleNext("men")}
                className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D4D4D4]"
              >
                <BsChevronRight className="w-6 h-6 text-[#111111]" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${menCurrentIndex * 33}%)`,
                width: `${menProducts.length * 50}%`,
              }}
            >
              {menProducts.map((product) => (
                <div key={product.id} className="w-1/2 px-2">
                  <div className="relative w-full aspect-square mb-[21px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[16px] text-[#111111] mb-0">
                        {product.name}
                      </h3>
                      <p className="text-[16px] text-[#757575]">
                        {product.description}
                      </p>
                    </div>
                    <span className="text-[14px] text-[#111111] mt-[3px]">
                      ₹ {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Women's Section */}
        <div className="w-full lg:w-[666px]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm sm:text-[16px]">Shop Women&apos;s</span>
            <div className="flex gap-3">
              <button
                onClick={() => handlePrev("women")}
                className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D4D4D4]"
              >
                <BsChevronLeft className="w-6 h-6 text-[#111111]" />
              </button>
              <button
                onClick={() => handleNext("women")}
                className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D4D4D4]"
              >
                <BsChevronRight className="w-6 h-6 text-[#111111]" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${womenCurrentIndex * 33}%)`,
                width: `${womenProducts.length * 50}%`,
              }}
            >
              {womenProducts.map((product) => (
                <div key={product.id} className="w-1/2 px-2">
                  <div className="relative w-full aspect-square mb-[21px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[16px] text-[#111111] mb-0">
                        {product.name}
                      </h3>
                      <p className="text-[16px] text-[#757575]">
                        {product.description}
                      </p>
                    </div>
                    <span className="text-[14px] text-[#111111] mt-[3px]">
                      ₹ {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};