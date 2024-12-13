import ContactInfo from "@/components/help/Contact-Info"
import FAQSection from "@/components/help/Faq-Section"
import FeedbackSection from "@/components/help/feedback-section"
import HelpHeader from "@/components/help/Help-Header"
import PaymentInfo from "@/components/help/Payment-Info"
import RelatedLinks from "@/components/help/Related-Links"
import SearchBar from "@/components/help/Search-Bar"

export default function HelpPage() {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <HelpHeader />
          <SearchBar />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PaymentInfo />
              <FAQSection />
              <FeedbackSection />
              <RelatedLinks />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
