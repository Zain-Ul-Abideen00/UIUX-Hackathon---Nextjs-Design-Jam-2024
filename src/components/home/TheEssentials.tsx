"use client"

import Image from 'next/image'
import { Button } from '../ui/Button'

interface EssentialCard {
  image: string
  category: string
}

const essentials: EssentialCard[] = [
  {
    image: "/Hero/mens-essentials.png",
    category: "Men's"
  },
  {
    image: "/Hero/womens-essentials.png",
    category: "Women's"
  },
  {
    image: "/Hero/kids-essentials.png",
    category: "Kid's"
  }
]

export const TheEssentials = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-16">
      <h2 className="text-[24px] text-[#111111] font-medium mb-[25px]">
        The Essentials
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-[12px]">
        {essentials.map((item, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[440px] h-[300px] sm:h-[540px] group"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={`${item.category} Essentials`}
              fill
              className="object-cover"
            />

            {/* Category Button */}
            <Button
              variant="secondary"
              className="absolute bottom-[48px] left-[48px] hover:scale-105"
            >
              {item.category}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
} 