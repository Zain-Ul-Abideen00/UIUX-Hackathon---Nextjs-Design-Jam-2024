import Image from 'next/image'
import Link from 'next/link'

export const Featured = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-12">
      <h2 className="text-[24px] text-[#111111] font-medium mb-[25px]">
        Featured
      </h2>

      <div className="w-full">
        {/* Hero Image */}
        <div className="relative w-full h-[700px]">
          <Image
            src="/Hero/featured.png"
            alt="Featured Nike Shoes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center text-center mt-[48px]">
          {/* Heading */}
          <h1 className="text-[56px] leading-[60px] text-[#111111] font-medium max-w-[806px] mb-[24px]">
            STEP INTO WHAT FEELS GOOD
          </h1>

          {/* Subheading */}
          <p className="text-[16px] text-[#111111] mb-[30px]">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>

          {/* CTA Button */}
          <Link 
            href="/shoes"
            className="bg-[#111111] text-white px-[22.5px] h-[39px] rounded-[30px] flex items-center justify-center hover:bg-[#222]"
          >
            <span className="text-[16px]">Find Your Shoe</span>
          </Link>
        </div>
      </div>
    </section>
  )
} 