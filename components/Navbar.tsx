import { links } from "@/constants/data";
import { Search, User } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Cart from "./Cart";
import MobileNav from "./MobileNav";

const Navbar = () => {
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
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex flex-row gap-x-5">
            <Search />
            <User />
            <Cart />
          </div>
          <MobileNav />
        </MaxWidthWrapper>
      </header>
    </nav>
  );
};

export default Navbar;
