"use client";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import clsx from "clsx";

import { navLinks } from "@/utils";
import { useToggle } from "@/hooks";

const Nav = () => {
  const { visible, toggle } = useToggle(false);

  return (
    <>
      <div
        onClick={toggle}
        className="text-3xl lg:hidden"
        role="button"
        aria-label="Menu toggle"
      >
        <BiMenuAltRight />
      </div>
      <nav
        className={clsx(
          !visible && "  hidden",
          "   absolute right-5 top-14 grid items-center gap-4 rounded-md px-4 py-2 font-medium opacity-100 shadow-lg   lg:static lg:flex lg:gap-5 lg:rounded-none lg:px-0  lg:shadow-none",
        )}
      >
        {navLinks.map((link) => (
          <Link
            className="text-right  font-montserrat text-base font-semibold tracking-wide transition-[transform_color] duration-300 hover:-skew-y-6 hover:text-blue-500  lg:text-left lg:text-lg"
            href={link.href}
            key={link.name}
            aria-label={link.name}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Nav;
