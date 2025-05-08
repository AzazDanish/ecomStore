"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/ui/container";

const ProductPageSkeleton = () => {
  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          {/* Main Section */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery Skeleton */}
            <div>
              <Skeleton className="aspect-square w-full rounded-lg" />
              <div className="grid grid-cols-4 gap-1 mt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-16 rounded-md" />
                ))}
              </div>
            </div>

            {/* Info Skeleton */}
            <div className="mt-10 sm:mt-16 lg:mt-0 space-y-4">
              <Skeleton className="md:h-8  md:w-1/2 h-6 w-1/3" />
              <Skeleton className="md:h-6 md:w-1/3 h-4 w-1/2" />
              <Skeleton className=" md:h-10 md:w-full" />
              <Skeleton className="md:h-6 md:w-1/3 " />
              <Skeleton className="md:h-12 md:w-full mt-4" />
            </div>
          </div>

          {/* Divider */}
          <hr className="my-10" />

          {/* Related Products */}
          <div>
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border p-3 rounded shadow-sm space-y-2">
                  <Skeleton className="aspect-square w-full rounded-md" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPageSkeleton;
