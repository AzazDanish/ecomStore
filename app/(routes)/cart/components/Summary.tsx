import Currency from "@/components/ui/add-to-cart";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import axios from "axios";
import { useState } from "react";

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const Summary = () => {
  const [loading, setLoading] = useState(false);
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const totalPrice = items.reduce((acc, item) => acc + Number(item.price), 0);

  const onCheckout = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/razorpayOrder`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: response.data.razorpayOrder.amount,
        currency: response.data.razorpayOrder.currency,
        order_id: response.data.razorpayOrder.id,
        handler: async function (response: RazorpayPaymentResponse) {
          console.log(response);
          const paymentResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/verifyOrder`,
            response
          );
          console.log(paymentResponse);
          removeAll();
          window.location.href = `/success?orderId=${paymentResponse.data.orderId}`;
        },
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log("Checkout failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 rounded border border-amber-200 bg-amber-50/50 px-6 py-8 shadow-sm sm:px-8 lg:col-span-5 lg:mt-0">
      <h2 className="text-xl font-semibold text-amber-900 tracking-tight">
        Order Summary
      </h2>

      {/* Items List */}
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start text-sm text-amber-800"
          >
            <span className="max-w-[70%] truncate">{item.name}</span>
            <span className="font-semibold text-amber-900">
              <Currency value={item.price} />
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 border-t border-amber-200 pt-6">
        <div className="flex justify-between text-base font-semibold text-amber-950">
          <span>Order Total</span>
          <Currency value={totalPrice} />
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-8">
        <Button
          className="w-full rounded-md bg-amber-600 text-white hover:bg-amber-700 transition"
          disabled={items.length === 0 || loading}
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
