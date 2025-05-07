"use client";

import { MouseEventHandler } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: React.ReactElement;
};
const IconButton = ({ onClick, className, icon }: IconButtonProps) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={cn("hover:scale-110 rounded-full transition p-2", className)}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
