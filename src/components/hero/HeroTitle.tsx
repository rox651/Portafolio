import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

const HeroTitle = () => {
   return (
      <div className="relative">
         <a href="https://github.com/rox651" rel="noopener noreferrer" target="_blank">
            <FaGithubAlt
               name="Github | Homero Bracamonte"
               className="text-blue-500 transition-colors text-2xl lg:text-6xl xl:text-7xl absolute -top-8 lg:-top-20  left-0 z-10 animate-swap-icon duration-300 hover:text-blue-400"
            />
         </a>
         <a
            href="https://www.linkedin.com/in/homero-bracamonte/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <FaLinkedin
               name="Linkedin | Homero Bracamonte"
               className="text-blue-500 transition-colors text-2xl lg:text-6xl xl:text-7xl absolute -bottom-8 lg:-bottom-20  right-0  z-10 animate-swap-icon duration-300 hover:text-blue-400"
            />
         </a>
         <h1 className=" font-dela  grid  uppercase text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl mx-auto ">
            <span
               className=" before:content-[attr(data-title)] text-center   before:right-full after:left-0 max-w-max before:top-0 before:absolute after:absolute before:text-black/10 after:text-black/10    whitespace-nowrap  after:content-[attr(data-title)] relative"
               data-title="Homero Homero Homero Homero Homero Homero Homero Homero Homero Homero Homero Homero"
            >
               Homero
            </span>
            <span
               className=" before:content-[attr(data-title)] text-center   before:right-full after:left-0 max-w-max before:top-0 before:absolute after:absolute before:text-black/10 after:text-black/10   whitespace-nowrap   after:content-[attr(data-title)] relative"
               data-title="Bracamonte Bracamonte Bracamonte Bracamonte Bracamonte Bracamonte Bracamonte Bracamonte"
            >
               Bracamonte
            </span>
         </h1>
      </div>
   );
};

export default HeroTitle;
