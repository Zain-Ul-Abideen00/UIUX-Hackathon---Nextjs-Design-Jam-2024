import { Phone, MessageCircle, MapPin, Mail } from "lucide-react"

export default function ContactInfo() { 
  return (
    <div className="border-l pl-8 space-y-8 lg:sticky lg:top-8">
      <h2 className="text-2xl font-bold text-center mb-8">CONTACT US</h2>

      <div className="space-y-8">
        {/* Phone Support */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Phone className="h-16 w-16" />
          </div>
          <h3 className="font-bold">000 800 919 0566</h3>
          <div className="mt-2 text-sm">
            <p>Products & Orders: 24 hours a day,</p>
            <p>7 days a week</p>
            <p>Company Info & Enquiries: 07:30 - 16:30,</p>
            <p>Monday - Friday</p>
          </div>
        </div>

        {/* Chat Support */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MessageCircle className="h-16 w-16" />
          </div>
          <div className="text-sm">
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>
        </div>

        {/* Email Support */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex justify-center mb-4">
              <Mail className="h-16 w-16" />
            </div>
          </div>
          <div className="text-sm">
            <p>We&apos;ll reply within</p>
            <p>five business days</p>
          </div>
        </div>

        {/* Store Locator */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <MapPin className="h-16 w-16" />
          </div>
          <h3 className="font-bold">STORE LOCATOR</h3>
          <p className="text-sm">Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  );
}
