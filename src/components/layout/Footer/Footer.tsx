import { FooterLinks } from './FooterLinks'
import { FooterBottom } from './FooterBottom'

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1440px] mx-auto px-12">
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  )
} 