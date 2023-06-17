import Link from "next/link";
import { navLinks } from "@/utils";

const Header = () => {
   return (
      <header className="flex justify-between items-center  px-5 lg:px-7 py-5 lg:py-10 absolute top-0 left-0 w-full">
         <a href="/" aria-label="Link to home">
            <abbr className=" text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-dela">
               H<span className="text-blue-500">B</span>
            </abbr>
         </a>
         <nav className=" flex gap-5 items-center  font-medium">
            {navLinks.map(link => (
               <Link
                  className="transition-[transform_color] duration-300 font-raleway hover:text-blue-500 hover:-skew-y-6 text-lg  tracking-wide"
                  href={link.href}
                  key={link.name}
                  aria-label={link.name}
               >
                  {link.name}
               </Link>
            ))}
         </nav>
      </header>
   );
};

export default Header;
