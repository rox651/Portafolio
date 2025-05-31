import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute left-0 top-0  flex w-full items-center justify-between px-5 py-5 lg:px-7 lg:py-10">
      <Link href="/" aria-label="Logo Homero Bracamonte">
        <abbr className=" font-dela text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          <span className="text-blue-500">H</span>B
        </abbr>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
