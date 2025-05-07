"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useCart();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="bg-white ">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8 min-h-[calc(100vh-10rem)]">
          <h1 className="text-3xl font-semibold text-black">Shopping cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <div className="h-80 flex mx-auto  lg:col-span-12 flex-col items-center justify-center gap-y-2">
                  <h1 className="text-2xl font-semibold">
                    Your cart is empty.
                  </h1>
                  <Link href="/">
                    <Button>Continue shopping</Button>
                  </Link>
                </div>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
