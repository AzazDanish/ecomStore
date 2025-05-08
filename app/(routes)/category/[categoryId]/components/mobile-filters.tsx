"use client";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { PlusIcon, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";
import IconButton from "@/components/ui/icon-button";

type MobileFiltersProps = {
  colors: Color[];
  sizes: Size[];
};
const MobileFilters = ({ colors, sizes }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);
  const Open = () => setOpen(true);
  const Close = () => setOpen(false);
  return (
    <>
      <Button
        className="flex items-center gap-x-2 rounded-full lg:hidden "
        onClick={() => Open()}
        variant="outline"
      >
        Filters
        <PlusIcon />
      </Button>
      <Dialog
        open={open}
        onClose={Close}
        as="div"
        className="relative z-40 lg:hidden transition duration-300"
      >
        {/* Create background */}
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        {/* Dialog Position */}
        <div className="fixed inset-0 z-40 ">
          <DialogPanel className="relative ml-auto h-full w-full max-w-xs bg-white overflow-y-auto flex flex-col py-4 pb-6 ">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={() => Close()} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
