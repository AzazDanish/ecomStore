import { Product } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ui/product-card";

type RelateProductProps = {
  title: string;
  items: Product[];
};

const RelatedProduct = ({ title, items }: RelateProductProps) => {
  return (
    <div>
      <div className="my-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <Carousel className=" relative w-full max-w-5xl">
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/3 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard data={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 bg-white" />
        <CarouselNext className="absolute right-2 top-1/2 bg-white" />
      </Carousel>
    </div>
  );
};

export default RelatedProduct;
