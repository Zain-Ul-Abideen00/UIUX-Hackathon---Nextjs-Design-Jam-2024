import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/Button';

export const Featured = () => {
  return (
    <section className="mx-auto px-5 sm:px-10">
      <h2 className="text-xl sm:text-[24px] text-[#111111] font-medium mb-4 sm:mb-[25px]">
        Featured
      </h2>

      <div className="w-full">
        {/* Hero Image */}
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[700px]">
          <Image
            src="/Hero/featured.png"
            alt="Featured Nike Shoes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center text-center mt-6 sm:mt-[48px] px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[60px] font-medium max-w-[806px] mb-4 sm:mb-[24px]">
            STEP INTO WHAT FEELS GOOD
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-[16px] text-[#111111] mb-6 sm:mb-[30px]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>

          {/* CTA Button */}
          <Link href="/">
            <Button className="w-full sm:w-auto">
              Find Your Shoe
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 