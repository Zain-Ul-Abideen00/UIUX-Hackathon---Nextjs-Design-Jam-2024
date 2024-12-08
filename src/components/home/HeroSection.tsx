import Image from 'next/image'


export const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Nike App Banner */}
      <div className="w-full h-auto min-h-[58px] bg-[#F5F5F5] py-3">
        <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-8">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-sm text-[#111]">Hello Nike App</h3>
            <p className="text-xs sm:text-sm text-[#111] mt-1 sm:mt-2 px-4">
              Download the app to access everything Nike. Get Your Great
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image and Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-[58px]">
        <div className="relative">
          {/* Hero Image */}
          <div className="w-full h-[300px] sm:h-[500px] lg:h-[700px] relative">
            <Image 
              src="/hero.png" 
              alt="Nike Air Max Pulse"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="mt-6 sm:mt-8 lg:mt-12 text-center px-4">
            <span className="text-sm sm:text-base">First Look</span>
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[60px] mt-4 sm:mt-7">
              Nike Air Max Pulse
            </h1>
            <p className="max-w-[511px] mx-auto mt-4 sm:mt-7 text-sm sm:text-base px-4">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-1.5 mt-6 sm:mt-8 lg:mt-12">
              <button className="w-full sm:w-auto px-6 py-2 bg-[#111] text-white rounded-full">
                Notify Me
              </button>
              <button className="w-full sm:w-auto px-6 py-2 bg-[#111] text-white rounded-full">
                Shop Air Max
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}