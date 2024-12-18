import { OrderSummary } from "./OrderSummary";
import { PANForm } from "./PANForm";
import { ProgressSteps } from "./ProgressSteps";
import { ContactForm } from "./ContactForm";
import { AddressForm } from "./AddressForm";


export default function CheckoutLayout() {
  return (
    <div className="container mx-auto px-5 sm:px-10 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column - Forms */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-2xl font-semibold">
            How would you like to get your order?
          </h1>
          <AddressForm />
          <ContactForm />
          <PANForm />
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-5">
          <OrderSummary />
        </div>
      </div>

      {/* Bottom Progress Steps */}
      <div className="mt-12">
        <ProgressSteps />
      </div>
    </div>
  );
} 