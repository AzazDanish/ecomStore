"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

type MainNavProps = {
  data: Category[];
  className?: string;
};
const MainNav = ({ data, className }: MainNavProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className={cn(className)}>
      {/*  Desktop view */}
      <nav className="hidden md:flex items-center mx-6 space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm hover:text-black font-medium transition-colors",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      {/* Mobile view */}

      <nav className="flex md:hidden ">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="rounded-full" variant="outline" size="icon">
              <Menu className="w-4 h-4  text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 w-64">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-2xl mr-auto font-semibold text-foreground">
                📋 Menu
              </SheetTitle>
              <p className="text-sm mr-auto text-muted-foreground">
                Navigate through sections
              </p>
            </SheetHeader>
            <div className="flex flex-col gap-1 my-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm px-3 py-2 font-medium",
                    route.active
                      ? "text-blue-800 bg-blue-100 rounded-md"
                      : "text-slate-700 rounded-md hover:text-foreground hover:bg-muted"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default MainNav;
