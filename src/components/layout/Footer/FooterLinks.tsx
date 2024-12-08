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
  return (
    <div className="bg-[#111111] py-8 sm:py-10">
      <div className="max-w-[1440px] mx-auto lg:flex lg:justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
          {/* Social Icons */}
          <div className="flex gap-4 sm:justify-start sm:mt-4 md:mt-4 lg:justify-end">
            <SocialIcons />
          </div>
      </div>
    </div>
  );
};