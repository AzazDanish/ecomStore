import { Image as ImageType } from "@/types";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

type GalleryProps = {
  images: ImageType[];
};
const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6  w-full block  max-w-2xl lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square h-full w-full sm:rounded-lg overflow-hidden relative">
              <Image
                alt="Image"
                src={image.url}
                fill
                className="object-cover object-center "
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
