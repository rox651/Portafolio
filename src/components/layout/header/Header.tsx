import Nav from "./Nav";

const Header = () => {
   return (
      <header className="absolute left-0 top-0  flex w-full items-center justify-between px-5 py-5 lg:px-7 lg:py-10">
         <a href="/" aria-label="Link to home">
            <abbr className=" font-dela text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
               H<span className="text-blue-500">B</span>
            </abbr>
         </a>
         <Nav />
      </header>
   );
};

export default Header;
