import { FiHeart, FiShoppingBag, FiMenu } from 'react-icons/fi'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'

interface MainNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const MainNav = ({ isMenuOpen, setIsMenuOpen }: MainNavProps) => {
  return (
    <nav className="bg-white h-[60px] border-b border-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[36px] h-full flex items-center justify-between">
        {/* Nike Logo */}
        <Link href="/">
          <Image 
            src="/nike.svg" 
            alt="Nike"
            width={70}
            height={20}
            className="object-contain"
          />
        </Link>

        {/* Main Navigation Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-[24px]">
          <Link href="/new" className="text-[16px] text-[#111111] hover:text-black font-medium">
            New & Featured
          </Link>
          <Link href="/men" className="text-[16px] text-[#111111] hover:text-black font-medium">
            Men
          </Link>
          <Link href="/women" className="text-[16px] text-[#111111] hover:text-black font-medium">
            Women
          </Link>
          <Link href="/kids" className="text-[16px] text-[#111111] hover:text-black font-medium">
            Kids
          </Link>
          <Link href="/sale" className="text-[16px] text-[#111111] hover:text-black font-medium">
            Sale
          </Link>
          <Link href="/snkrs" className="text-[16px] text-[#111111] hover:text-black font-medium">
            SNKRS
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-[16px]">
          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex relative w-[180px] h-[40px] bg-[#F5F5F5] rounded-full items-center">
            <div className="absolute left-[12px] flex items-center justify-center">
              <CiSearch className="w-6 h-6 text-[#111111]" />
            </div>
            <input 
              type="text"
              placeholder="Search"
              className="w-full h-full bg-transparent pl-[44px] pr-[16px] text-[16px] placeholder:text-[#757575] focus:outline-none"
            />
          </div>

          {/* Icons */}
          <button className="hidden sm:flex w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] items-center justify-center">
            <FiHeart className="w-6 h-6 text-[#111111]" />
          </button>
          <button className="hidden sm:flex w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] items-center justify-center">
            <FiShoppingBag className="w-6 h-6 text-[#111111]" />
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] flex items-center justify-center"
          >
            <FiMenu className="w-6 h-6 text-[#111111]" />
          </button>
        </div>
      </div>
    </nav>
  )
} 