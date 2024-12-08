"use client"

import Image from 'next/image'

export const DontMiss = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-12 mb-16">
      <h2 className="text-[24px] text-[#111111] font-medium mb-[25px]">
        Don't Miss
      </h2>

      <div className="w-full">
        {/* Main Image */}
        <div className="relative w-full h-[700px] mb-12">
          <Image
            src="/Hero/flight-essentials.png" 
            alt="Flight Essentials"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-[1008px] mx-auto text-center">
          <h3 className="text-[48px] text-[#111111] font-medium mb-6">
            FLIGHT ESSENTIALS
          </h3>
          <p className="text-[16px] text-[#111111] mb-8">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          
          {/* Shop Button */}
          <button className="inline-flex items-center justify-center px-[21.5px] py-[7.5px] bg-[#111111] text-white rounded-full hover:bg-[#757575] transition-colors">
            Shop
          </button>
        </div>
      </div>
    </section>
  )
} 