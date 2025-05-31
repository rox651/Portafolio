import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { IoArrowRedoSharp } from "react-icons/io5";
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
        href="https://www.linkedin.com/in/homero-bracamonte/overlay/1730045417440/single-media-viewer/?type=DOCUMENT&profileId=ACoAADm4vkUBhuJsVi-lluKSVOg2I4HilSDknkg"
        rel="noopener noreferrer"
        aria-label="CV | Homero Bracamonte"
        target="_blank"
        className="absolute -top-38 left-20 z-10  text-2xl  lg:text-6xl xl:text-7xl group"
      >
        <span className="relative -top-10 left-8 text-xl font-bold lg:text-3xl xl:text-4xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          My CV
          <IoArrowRedoSharp className="absolute -bottom-10 -left-2 -rotate-45 " />
        </span>
        <PiReadCvLogoDuotone className=" text-blue-500 transition-colors  duration-300 hover:text-blue-400 " />
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
