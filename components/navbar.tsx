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
        <div className="flex items-center  px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="ml-4 flex lg:ml-0">
            <p className="font-bold text-2xl">AzazDanish.</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
