import { Billboard as BillboardType } from "@/types";
import React from "react";

type BillboardProps = {
  data: BillboardType;
};
const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="aspect-[4/3] md:aspect-[2.4/1] bg-blue-500 rounded-xl  "
        style={{
          backgroundImage: `url(${data?.imageURL})`,
          backgroundSize: "100% 100%",
          filter: "brightness(70%)",
        }}
      >
        <div className="h-full w-full flex items-center justify-center text-center  ">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
