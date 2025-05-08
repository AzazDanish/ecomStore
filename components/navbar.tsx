import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <nav className="border-b">
      <Container>
        <div className="flex items-center w-full justify-between   px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex-1">
            <MainNav data={categories} className="" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Link href="/" className=" flex  ">
              <p className="font-semibold text-2xl">AzazDanish.</p>
            </Link>
          </div>

          <div className="flex flex-1  justify-end">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
