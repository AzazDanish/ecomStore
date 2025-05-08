import { Billboard as BillboardType } from "@/types";

type BillboardProps = {
  data: BillboardType;
};
const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="aspect-[21/9] bg-center  bg-blue-500 rounded-xl  bg-cover"
        style={{
          backgroundImage: `url(${data?.imageURL})`,
        }}
      >
        {/* <div className="h-full w-full flex items-center justify-center text-center  ">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data?.label}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Billboard;

// import { Billboard as BillboardType } from "@/types";
// import React from "react";

// type BillboardProps = {
//   data: BillboardType;
// };

// const Billboard = ({ data }: BillboardProps) => {
//   return (
//     <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
//       <div
//         className="relative aspect-[4/3] md:aspect-[2.4/1] rounded-xl overflow-hidden group"
//         style={{
//           backgroundImage: `url(${data?.imageURL})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 group-hover:from-black/70 transition duration-500" />

//         {/* Label content */}
//         <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
//           <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md max-w-2xl mx-auto">
//             {data?.label}
//           </h1>
//         </div>

//         {/* Hover effect */}
//         <div className="absolute inset-0 transition-transform group-hover:scale-105 group-hover:brightness-90 duration-500" />
//       </div>
//     </div>
//   );
// };

// export default Billboard;

// import { Billboard as BillboardType } from "@/types";
// import React from "react";

// type BillboardProps = {
//   data: BillboardType;
// };

// const Billboard = ({ data }: BillboardProps) => {
//   return (
//     <div className="p-4 sm:p-6 lg:p-10">
//       <div
//         className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-xl group"
//         style={{
//           backgroundImage: `url(${data?.imageURL})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Layered color tint */}
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 via-indigo-700/40 to-indigo-500/30 group-hover:from-indigo-900/70 transition-all duration-500" />

//         {/* Glass effect label container */}
//         <div className="absolute inset-0 flex items-center justify-center px-6">
//           <div className="bg-black/30 backdrop-blur-md rounded-xl px-6 py-4 sm:px-10 sm:py-6">
//             <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center drop-shadow-md animate-fadeIn">
//               {data?.label}
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Billboard;
