"use client";

import { Order } from "@/types";
import axios from "axios";
import { CircleAlert } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SuccessClient = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    try {
      const fetchOrder = async () => {
        const order = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`
        );
        console.log(order.data.confirmedOrder);
        setOrder(order.data.confirmedOrder);
      };
      if (orderId) {
        fetchOrder();
      }
    } catch (error) {
      console.log(error);
    }
  }, [orderId]);
  //   console.log(order);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] m-2">
      <div className="border p-6 rounded border-green-200 bg-green-50/50 ">
        <h1 className="text-2xl font-semibold">
          Payment{" "}
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-sm">
            Successful!
          </span>
        </h1>
        <p className="mt-2 text-slate-700">
          Thank you for your purchase. Your Order ID is:
        </p>
        <p className="mt-1 text-slate-900 font-semibold">{orderId}</p>
        <div>
          <h2 className="mt-4 text-lg font-semibold">Order Details:</h2>

          <ul className="mt-2">
            {order?.orderItems.map((item) => (
              <li className="text-slate-700 text-sm" key={item.id}>
                {item.product.name} - ₹{item.product.price}
              </li>
            ))}
          </ul>
          {/* <h2 className="">Order Details: </h2>
          <p>₹{order?.orderAmount}</p>
          <p>{order?.address}</p> */}
        </div>
        <div className="text-slate-700  mt-4">
          <p>Total Amount:</p>
          <p>₹{order?.orderAmount}</p>
        </div>

        <div className="bg-blue-100 flex items-center gap-x-1 border-l-4 border-blue-700  px-2 py-1 rounded-lg mt-4 text-blue-700">
          <CircleAlert width={14} height={14} className="m-0 p-0" />
          We will notify you when your order is{" "}
          <span className="font-semibold">shipped.</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessClient;
