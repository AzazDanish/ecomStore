import { Product } from "@/types";

import Currency from "./ui/add-to-cart";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

type InfoProps = {
  data: Product;
};
const Info = ({ data }: InfoProps) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className=" mt-3 flex items-center justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="w-6 h-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="flex items-center my-10">
        <Button className="flex gap-x-2">
          ADD TO CART
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
