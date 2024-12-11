import { FiX, FiHeart, FiShoppingBag } from 'react-icons/fi'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-white z-50 transition-transform duration-300 lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-[60px] px-4 flex items-center justify-between border-b border-[#F5F5F5]">
        <h2 className="text-[16px] font-medium">Menu</h2>
        <button 
          onClick={() => setIsOpen(false)}
          className="w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] flex items-center justify-center"
        >
          <FiX className="w-6 h-6 text-[#111111]" />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="px-4 py-4">
        <div className="relative w-full h-[40px] bg-[#F5F5F5] rounded-full flex items-center">
          <div className="absolute left-[12px] flex items-center justify-center">
            <CiSearch className="w-6 h-6 text-[#111111]" />
          </div>
          <input 
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent pl-[44px] pr-[16px] text-[16px] placeholder:text-[#757575] focus:outline-none"
          />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <nav className="px-4">
        <ul className="space-y-4">
          <li>
            <Link 
              href="/products" 
              className="block text-[24px] text-[#111111] font-medium"
              onClick={() => setIsOpen(false)}
            >
              New & Featured
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className="block text-[24px] text-[#111111] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Men
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className="block text-[24px] text-[#111111] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Women
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className="block text-[24px] text-[#111111] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kids
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className="block text-[24px] text-[#111111] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sale
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className="block text-[24px] text-[#111111] font-medium"
              onClick={() => setIsOpen(false)}
            >
              SNKRS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Bottom Icons */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] px-4 border-t border-[#F5F5F5] flex items-center justify-around">
        <button className="w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] flex items-center justify-center">
          <FiHeart className="w-6 h-6 text-[#111111]" />
        </button>
        <button className="w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] flex items-center justify-center">
          <FiShoppingBag className="w-6 h-6 text-[#111111]" />
        </button>
      </div>
    </div>
  )
} 