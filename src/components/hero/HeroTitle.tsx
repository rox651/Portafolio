import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { TextAnimate } from "../common";

const HeroTitle = () => {
   return (
      <div className="relative">
         <a
            href="https://github.com/rox651"
            rel="noopener noreferrer"
            aria-label="Github | Homero Bracamonte"
            target="_blank"
         >
            <FaGithubAlt className="absolute -top-8 left-0 z-10  text-2xl text-blue-500 transition-colors  duration-300 hover:text-blue-400 lg:-top-20 lg:text-6xl xl:text-7xl" />
         </a>
         <a
            href="https://www.linkedin.com/in/homero-bracamonte/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Linkedin | Homero Bracamonte"
         >
            <FaLinkedin className="absolute -bottom-8 right-0 z-10  text-2xl text-blue-500 transition-colors  duration-300  hover:text-blue-400 lg:-bottom-20 lg:text-6xl xl:text-7xl" />
         </a>
         <h1 className=" mx-auto  grid   font-dela text-3xl uppercase lg:text-6xl xl:text-7xl 2xl:text-8xl ">
            <TextAnimate text="Homero" />
            <TextAnimate text="Bracamonte" />
         </h1>
      </div>
   );
};

export default HeroTitle;
