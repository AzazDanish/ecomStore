"use client";

import Currency from "@/components/ui/add-to-cart";
import IconButton from "@/components/ui/icon-button";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types";
import clsx from "clsx";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type CartItemProps = {
  data: Product;
};

const CartItem = ({ data }: CartItemProps) => {
  const removeItem = useCart((state) => state.removeItem);
  const [visible, setVisible] = useState(true);

  const onRemove = () => {
    setVisible(false);
    setTimeout(() => {
      removeItem(data.id);
    }, 300);
  };

  return (
    <li
      className={clsx(
        "flex  gap-4 border-b  py-6 transition-all duration-300 ease-in-out transform",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <div className="relative sm:w-48 h-24 w-24 sm:h-48 overflow-hidden ">
        <Image
          src={data.images[0].url}
          alt=""
          fill
          className="object-cover object-center rounded"
        />
      </div>
      <div className="relative flex flex-1 ml-4 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 top-0 right-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative sm:grid sm:grid-cols-2 pr-9 sm:pr-0">
          <div>
            <p className="text-md sm:text-lg font-semibold text-amber-900">
              {data.name}
            </p>
          </div>
          <div className="flex items-center text-sm  space-x-4">
            <p>{data.color.name}</p>
            <span className="border-l border-amber-300 h-4"></span>
            <p>{data.size.name}</p>
          </div>
          <div>
            <Currency value={data.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
