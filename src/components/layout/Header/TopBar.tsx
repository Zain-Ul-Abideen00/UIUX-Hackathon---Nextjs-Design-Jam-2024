"use client"
import Link from 'next/link'
import Image from 'next/image'

export const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#F5F5F5] h-[36px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[36px] h-full flex items-center justify-between">
        {/* Left Side - Jordan & Converse Logos */}
        <div className="flex items-center gap-4">
          <Link href="/jordan" className="hover:opacity-75">
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
        <div className="flex-1 flex lg:justify-center justify-end">
          <button
            className="bg-white px-[10px] py-[5px] h-[26px] text-[12px] text-[#111111] hover:underline"
            onClick={() => document.getElementById("main-content")?.focus()}
          >
            Skip to main content
          </button>
        </div>

        {/* Right Side - Links */}
        <div className="flex items-center gap-[12px] text-[12px] text-[#111111]">
          <Link href="/location" className="hover:opacity-75">
            Find a Store
          </Link>
          <span className="text-[#757575]">|</span>
          <Link href="/help" className="hover:opacity-75">
            Help
          </Link>
          <span className="text-[#757575]">|</span>
          <Link href="/join-us" className="hover:opacity-75">
            Join Us
          </Link>
          <span className="text-[#757575]">|</span>
          <Link href="/login" className="hover:opacity-75">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}