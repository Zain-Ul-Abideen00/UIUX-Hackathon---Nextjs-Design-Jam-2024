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
  }
]

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
    image: "/Hero/women-short.png"
  }
]

export const GearUp = () => {
  const [activeTab, setActiveTab] = useState<"men" | "women">("men");
  const [menCurrentSlide, setMenCurrentSlide] = useState(0);
  const [womenCurrentSlide, setWomenCurrentSlide] = useState(0);

  const nextSlide = (section: "men" | "women") => {
    if (section === "men") {
      setMenCurrentSlide((prev) => (prev + 1) % menProducts.length);
    } else {
      setWomenCurrentSlide((prev) => (prev + 1) % womenProducts.length);
    }
  };

  const prevSlide = (section: "men" | "women") => {
    if (section === "men") {
      setMenCurrentSlide(
        (prev) => (prev - 1 + menProducts.length) % menProducts.length
      );
    } else {
      setWomenCurrentSlide(
        (prev) => (prev - 1 + womenProducts.length) % womenProducts.length
      );
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-12 mb-16">
      <h2 className="text-[24px] text-[#111111] font-medium mb-[25px]">
        Gear Up
      </h2>

      <div className="flex justify-between">
        {/* Men's Section */}
        <div className="w-[666px]">
          <div className="flex justify-end items-center mb-[12px]">
            <span className="mr-[13px] text-[16px]">Shop Men's</span>
            <button
              onClick={() => prevSlide("men")}
              className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mr-3 hover:bg-[#E5E5E5]"
            >
              <BsChevronLeft className="w-6 h-6 text-[#CCCCCC]" />
            </button>
            <button
              onClick={() => nextSlide("men")}
              className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D4D4D4]"
            >
              <BsChevronRight className="w-6 h-6 text-[#111111]" />
            </button>
          </div>

          <div className="flex gap-[12px]">
            {menProducts.map((product, index) => (
              <div
                key={product.id}
                className={`w-[300px] transition-all duration-300 ${
                  index === menCurrentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-[300px] h-[300px] mb-[21px]">
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

        {/* Women's Section - Similar structure as Men's */}
        {/* Women's Section */}
        <div className="w-[666px]">
          <div className="flex justify-end items-center mb-[12px]">
            <span className="mr-[13px] text-[16px]">Shop Women's</span>
            <button
              onClick={() => prevSlide("women")}
              className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mr-3 hover:bg-[#E5E5E5]"
            >
              <BsChevronLeft className="w-6 h-6 text-[#CCCCCC]" />
            </button>
            <button
              onClick={() => nextSlide("women")}
              className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-[#D4D4D4]"
            >
              <BsChevronRight className="w-6 h-6 text-[#111111]" />
            </button>
          </div>

          <div className="flex gap-[12px]">
            {womenProducts.map((product, index) => (
              <div
                key={product.id}
                className={`w-[300px] transition-all duration-300 ${
                  index === womenCurrentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-[300px] h-[300px] mb-[21px]">
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
    </section>
  );
};