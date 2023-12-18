import { links } from "@/constants/data";
import { Search, User } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  let productCount = 0;
  return (
    <nav className="sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper className="py-5 flex items-center justify-between flex-row">
          <div className="ml-2 lg:ml-0 z-50">
            <span className="font-semibold md:font-bold md:text-xl text-lg">
              AceDrive
            </span>
          </div>
          <div>
            <ul className="hidden md:flex flex-row gap-x-10">
              {links.map((link) => (
                <Link key={link.name} href={`/${link.hash}`}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex flex-row gap-x-5">
            <Search />
            <User />
            <Cart />
            <span className="bg-black w-6 h-6 text-white rounded-2xl text-center">
              {productCount}
            </span>
          </div>
          <MobileNav />
        </MaxWidthWrapper>
      </header>
    </nav>
  );
};

export default Navbar;
