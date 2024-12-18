"use client"

import Image from 'next/image'
import { Button } from '../ui/Button';

export const DontMiss = () => {
  return (
    <section className="mx-auto px-5 sm:px-10 mb-8 sm:mb-16">
      <h2 className="text-xl sm:text-[24px] text-[#111111] font-medium mb-4 sm:mb-[25px]">
        Don&apos;t Miss
      </h2>

      <div className="w-full">
        {/* Main Image */}
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[700px] mb-6 sm:mb-12">
          <Image
            src="/Hero/flight-essentials.png"
            alt="Flight Essentials"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-[1008px] mx-auto text-center px-4">
          <h3 className="text-3xl sm:text-4xl lg:text-[48px] text-[#111111] font-medium mb-4 sm:mb-6">
            FLIGHT ESSENTIALS
          </h3>
          <p className="text-sm sm:text-[16px] text-[#111111] mb-6 sm:mb-8">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>

          {/* Shop Button */}
          <Button className="w-full sm:w-auto">
            Shop
          </Button>
        </div>
      </div>
    </section>
  );
} 