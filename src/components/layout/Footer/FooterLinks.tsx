"use client"
import { useState } from "react";
import { SocialIcons } from "./SocialIcons"

const footerLinks = {
  findStore: [
    'Find A Store',
    'Become A Member',
    'Sign Up for Email',
    'Send Us Feedback',
    'Student Discounts'
  ],
  getHelp: [
    'Order Status',
    'Delivery',
    'Returns',
    'Payment Options',
    'Contact Us On Nike.com Inquiries',
    'Contact Us On All Other Inquiries'
  ],
  aboutNike: [
    'News',
    'Careers',
    'Investors',
    'Sustainability'
  ]
}

export const FooterLinks = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="bg-[#111111] py-8 sm:py-10">
      <div className="max-w-[1440px] mx-auto lg:flex lg:justify-between">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Find A Store Column */}
          <div className="space-y-3">
            <h3 className="text-white text-[16px] font-medium uppercase">
              Find A Store
            </h3>
            <ul className="space-y-3">
              {footerLinks.findStore.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#7E7E7E] hover:text-white text-[14px] block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help Column */}
          <div className="space-y-3">
            <h3 className="text-white text-[16px] font-medium uppercase">
              Get Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.getHelp.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#7E7E7E] hover:text-white text-[14px] block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Nike Column */}
          <div className="space-y-3">
            <h3 className="text-white text-[16px] font-medium uppercase">
              About Nike
            </h3>
            <ul className="space-y-3">
              {footerLinks.aboutNike.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#7E7E7E] hover:text-white text-[14px] block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile/Tablet View */}
        <div className="lg:hidden w-full">
          {/* Find A Store Section */}
          <div className="border-b border-[#222]">
            <button
              onClick={() => toggleSection("findStore")}
              className="w-full py-4 px-4 flex justify-between items-center"
            >
              <h3 className="text-white text-[16px] font-medium uppercase">
                Find A Store
              </h3>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openSections.includes("findStore") ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSections.includes("findStore")
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-3 px-4 pb-4">
                {footerLinks.findStore.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#7E7E7E] hover:text-white text-[14px] block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get Help Section */}
          <div className="border-b border-[#222]">
            <button
              onClick={() => toggleSection("getHelp")}
              className="w-full py-4 px-4 flex justify-between items-center"
            >
              <h3 className="text-white text-[16px] font-medium uppercase">
                Get Help
              </h3>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openSections.includes("getHelp") ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSections.includes("getHelp")
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-3 px-4 pb-4">
                {footerLinks.getHelp.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#7E7E7E] hover:text-white text-[14px] block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Nike Section */}
          <div className="border-b border-[#222]">
            <button
              onClick={() => toggleSection("aboutNike")}
              className="w-full py-4 px-4 flex justify-between items-center"
            >
              <h3 className="text-white text-[16px] font-medium uppercase">
                About Nike
              </h3>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openSections.includes("aboutNike") ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSections.includes("aboutNike")
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-3 px-4 pb-4">
                {footerLinks.aboutNike.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#7E7E7E] hover:text-white text-[14px] block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:justify-start mt-5 lg:justify-end">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};