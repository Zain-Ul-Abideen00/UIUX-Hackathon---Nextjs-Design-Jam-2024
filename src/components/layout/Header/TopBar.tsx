"use client"
import { AiOutlineConsoleSql } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

export const TopBar = () => {
  return (
    <div className="bg-[#F5F5F5] h-[36px]">
      <div className="max-w-[1440px] mx-auto px-[36px] h-full flex items-center">
        {/* Left Side - Jordan Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/jordan">
            <Image 
              src="/jordan.svg" 
              alt="Jordan"
              width={24}
              height={24}
              className="text-[#111111]"
            />
          </Link>
        </div>

        {/* Center - Skip to main content */}
        <div className="flex-1 flex justify-center">
          <button 
            className="bg-white px-[10px] py-[5px] h-[26px] text-[12px] text-[#111111] hover:underline"
            onClick={() => document.getElementById('main-content')?.focus()}
          >
            Skip to main content
          </button>
        </div>

        {/* Right Side - Links */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-[12px] text-[12px] text-[#111111]">
          <Link href="/store-locator" className="hover:opacity-75">
            Find a Store
          </Link>
          <span className="text-[#757575]">|</span>
          <Link href="/help" className="hover:opacity-75">
            Help
          </Link>
          <span className="text-[#757575]">|</span>
          <Link href="/join" className="hover:opacity-75">
            Join Us
          </Link>
          <span className="text-[#757575]">|</span>
          <Link href="/signin" className="hover:opacity-75">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
} 