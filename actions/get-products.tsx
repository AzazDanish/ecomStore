import qs from "query-string";

import { Product } from "@/types";

type Query = {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  isFeatured?: boolean;
};

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async ({
  colorId,
  sizeId,
  categoryId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: colorId,
      sizeId: sizeId,
      categoryId: categoryId,
      isFeatured: isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export default getProducts;
