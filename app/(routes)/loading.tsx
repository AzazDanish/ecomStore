// // app/(routes)/page.tsx
// import { Skeleton } from "@/components/ui/skeleton";

// const HomeLoading = () => {
//   return (
//     <div className="space-y-10 pb-10">
//       {/* Billboard Skeleton */}
//       <div className="rounded-xl overflow-hidden p-4 sm:p-6 lg:p-8">
//         <Skeleton className="aspect-[21/9] w-full rounded-xl" />
//       </div>

//       {/* Product List Skeleton */}
//       <div className="flex flex-col px-4 sm:px-6 lg:px-8 space-y-6">
//         {/* Section title */}
//         <Skeleton className="h-6 w-40 rounded" />

//         {/* Product cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {[...Array(8)].map((_, i) => (
//             <div
//               key={i}
//               className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm space-y-3"
//             >
//               <Skeleton className="aspect-square w-full rounded-sm" />
//               <Skeleton className="h-4 w-3/4" />
//               <Skeleton className="h-4 w-1/2" />
//               <Skeleton className="h-10 w-full rounded" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeLoading;

"use client";

import { Skeleton } from "@/components/ui/skeleton";

const BillboardPageSkeleton = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      {/* Billboard Skeleton */}
      <div className="aspect-[21/9] rounded-lg overflow-hidden mb-10">
        <Skeleton className="w-full h-full rounded-lg bg-gray-200" />
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded border border-gray-200 bg-white p-4 shadow-sm"
          >
            <Skeleton className="aspect-square w-full rounded-md bg-gray-200" />
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-3/4 bg-gray-200" />
              <Skeleton className="h-4 w-1/2 bg-gray-200" />
              <Skeleton className="h-8 w-full bg-gray-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillboardPageSkeleton;
