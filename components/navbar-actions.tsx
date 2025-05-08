"use client";

import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const items = useCart((state) => state.items);

  const router = useRouter();
  return (
    <div onClick={() => router.push("/cart")} className=" flex items-center">
      <Button variant="outline" className="rounded-full">
        <ShoppingCart size={20} />
        <span className="font-medium text-xs">{items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
