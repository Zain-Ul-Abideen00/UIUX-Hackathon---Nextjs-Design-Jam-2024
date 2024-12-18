import { Button } from "@/components/ui/Button"
import Link from "next/link";

export default function CartSummary() {
  return (
    <div className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold">Summary</h2>

      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ 20,890.00</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">₹ 20,890.00</span>
          </div>
        </div>
      </div>

      <div className="">
        <Link href="/checkout">
          <Button className="w-full rounded-full h-[50px] sm:h-[60px]">
            Member Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
} 