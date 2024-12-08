"use client"

import Image from 'next/image'

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
    <section className="max-w-[1440px] mx-auto px-12 mb-16">
      <h2 className="text-[24px] text-[#111111] font-medium mb-[25px]">
        The Essentials
      </h2>

      {/* Cards Container */}
      <div className="flex gap-[12px]">
        {essentials.map((item, index) => (
          <div key={index} className="relative w-[440px] h-[540px] group">
            {/* Image */}
            <Image
              src={item.image}
              alt={`${item.category} Essentials`}
              fill
              className="object-cover"
            />

            {/* Category Button */}
            <button 
              className="absolute bottom-[48px] left-[48px] px-[21.5px] py-[7.5px] 
                       bg-white text-[#111111] rounded-full 
                       transition-transform duration-300
                       hover:scale-105"
            >
              {item.category}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
} 