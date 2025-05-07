"use client";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

type GalleryTabProps = {
  image: ImageType;
};
const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab
      key={image.id}
      className="relative flex items-center justify-center aspect-square overflow-hidden cursor-pointer rounded-md  focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {({ selected }) => (
        <div>
          <span className="absolute w-full h-full aspect-square rounded-md overflow-hidden inset-0">
            <Image
              alt="Image"
              src={image.url}
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 ring-2 ring-offset-4  ",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
