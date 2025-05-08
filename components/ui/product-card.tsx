"use client";

import { Product } from "@/types";
import Image from "next/image";

import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";

import AddToCart from "./add-to-cart";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/useCart";
import { Button } from "./button";
import Link from "next/link";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addItem(data);
  };

  return (
    <Link href={`/product/${data.id}`}>
      <div
        onClick={handleClick}
        className="group cursor-pointer rounded bg-white p-3  shadow-sm hover:shadow-md border border-gray-200 transition"
      >
        {/* Image Section */}
        <div className="relative aspect-square w-full overflow-hidden rounded-sm pointer-events-none bg-gray-100">
          <Image
            alt={data.name}
            src={data.images?.[0]?.url}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Buttons */}
          <div className="absolute bottom-3 w-full px-4 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center justify-center gap-x-3 pointer-events-auto">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={18} />}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white"
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={18} />}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {data.name}
          </h3>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>

        {/* Price and Cart */}
        <div className="mt-3">
          <AddToCart value={data.price} />
        </div>
        <Button onClick={onAddToCart} className="w-full mt-2 rounded">
          Add to cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
