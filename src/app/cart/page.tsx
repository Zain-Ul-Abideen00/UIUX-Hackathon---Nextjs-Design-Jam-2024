import CartSummary from "@/components/cart/cart-summary";
import CartItem from "@/components/cart/cart-item";
import DeliveryBanner from "@/components/cart/delivery-banner";


export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <DeliveryBanner />
          <h1 className="text-2xl font-semibold mt-4 mb-6">Bag</h1>
          <div className="space-y-6">
            <CartItem />
            {/* Add more CartItem components as needed */}
          </div>
        </div>
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <CartSummary />
        </div>
      </div>
    </div>
  );
} 