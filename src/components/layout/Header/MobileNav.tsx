import { FiHeart, FiShoppingBag, FiClipboard, FiMapPin, FiHelpCircle, } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[320px] p-0">
        <SheetHeader className=" p-4 flex items-start justify-between border-b border-[#F5F5F5]">
          <SheetTitle className="justify-start text-[18px] font-bold">
            Menu
          </SheetTitle>
        </SheetHeader>

        <div className="h-full overflow-y-auto pb-[120px]">
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
                  New
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
                  Jordan
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
            </ul>
          </nav>

          {/* Brand Links */}
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/jordan.svg" alt="Jordan" width={24} height={24} />
              <span className="text-[16px] text-[#111111] font-medium">
                Jordan
              </span>
            </Link>
          </div>

          {/* Nike Member Message */}
          <div className="px-4 py-6 space-y-4 border-t border-[#F5F5F5]">
            <p className="text-[16px] text-[#707072]">
              Become a Nike Member for the best products, inspiration and
              stories in sport.{" "}
              <Link href="/help" className="text-black underline">
                Learn more
              </Link>
            </p>
            <div className="flex gap-2">
              <Link
                href="/join-us"
                className="px-5 py-2 bg-black text-white rounded-full text-[16px] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
              <Link
                href="/login"
                className="px-5 py-2 border border-[#CACACC] rounded-full text-[16px] font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Utility Links */}
          <div className="px-4 py-4 space-y-4 border-t border-[#F5F5F5]">
            <Link
              href="/cart"
              className="flex items-center gap-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              <FiClipboard className="w-6 h-6 text-[#111111]" />
              <span className="text-[16px] text-[#111111]">Orders</span>
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              <FiHelpCircle className="w-6 h-6 text-[#111111]" />
              <span className="text-[16px] text-[#111111]">Help</span>
            </Link>
            <Link
              href="/location"
              className="flex items-center gap-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              <FiMapPin className="w-6 h-6 text-[#111111]" />
              <span className="text-[16px] text-[#111111]">Find a Store</span>
            </Link>
          </div>
        </div>

        {/* Mobile Bottom Icons */}
        <SheetFooter className="fixed bottom-0 right-0 w-[320px] border-t border-[#F5F5F5]">
          <div className="h-[60px] px-4 bg-white w-full flex items-center justify-around">
            <Link href="/wishlist" className="w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] flex items-center justify-center">
              <FiHeart className="w-6 h-6 text-[#111111]" />
            </Link>
            <Link href="/cart" className="w-[40px] h-[40px] rounded-full hover:bg-[#F5F5F5] flex items-center justify-center">
              <FiShoppingBag className="w-6 h-6 text-[#111111]" />
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
