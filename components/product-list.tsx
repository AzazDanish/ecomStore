import { Product } from "@/types";
import NoResult from "./ui/no-result";
import ProductCard from "./ui/product-card";

type ProductListProps = {
  title: string;
  items: Product[];
};

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-4 ">
      <div className="text-3xl font-bold">{title}</div>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
