import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SocialLinks } from "@/types";

export const socials: SocialLinks[] = [
   {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/homero-bracamonte/",
      icon: (
         <FaLinkedin className=" text-xl lg:text-2xl xl:text-3xl  group-hover:text-blue-500 transition-colors duration-300" />
      ),
   },
   {
      name: "Github",
      href: "https://github.com/rox651",
      icon: (
         <FaGithub className=" text-xl lg:text-2xl xl:text-3xl  group-hover:text-blue-500 transition-colors duration-300" />
      ),
   },

   {
      name: "Gmail",
      href: "mailto:homerojose69@gmail.com",
      icon: (
         <GrMail className=" text-xl lg:text-2xl xl:text-3xl  group-hover:text-blue-500 transition-colors duration-300" />
      ),
   },
];
