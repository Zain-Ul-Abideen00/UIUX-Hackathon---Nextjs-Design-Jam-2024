interface NavItem {
  title: string
  links: string[]
}

const navItems: NavItem[] = [
  {
    title: "Icons",
    links: [
      "Air Force 1",
      "Huarache",
      "Air Max 90",
      "Air Max 95"
    ]
  },
  {
    title: "Shoes",
    links: [
      "All Shoes",
      "Custom Shoes",
      "Jordan Shoes",
      "Running Shoes"
    ]
  },
  {
    title: "Clothing",
    links: [
      "All Clothing",
      "Modest Wear",
      "Hoodies & Pullovers",
      "Shirts & Tops"
    ]
  },
  {
    title: "Kids'",
    links: [
      "Infant & Toddler Shoes",
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes"
    ]
  }
]

export const FooterNav = () => {
  return (
    <nav className="max-w-[880px] mx-auto py-16">
      <div className="flex justify-between">
        {navItems.map((section, index) => (
          <div key={index} className="w-[184px]">
            {/* Section Title */}
            <h3 className="text-[#111111] text-[16px] font-medium mb-6">
              {section.title}
            </h3>
            
            {/* Links */}
            <ul className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a 
                    href="#" 
                    className="text-[#757575] text-[14px] hover:text-[#111111] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
} 