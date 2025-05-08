import { Product } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ui/product-card";
import NoResult from "./ui/no-result";

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
      {items.length === 0 ? (
        <NoResult />
      ) : (
        <Carousel className=" relative w-full max-w-5xl">
          <div className="relative">
            <CarouselContent className="flex">
              {items.map((item) => (
                <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 ">
                  <ProductCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 bg-white" />
            <CarouselNext className="absolute right-2 top-1/2 bg-white" />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default RelatedProduct;
