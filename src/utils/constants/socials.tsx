import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SocialLinks } from "@/types";

export const socials: SocialLinks[] = [
   {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/homero-bracamonte/",
      icon: (
         <FaLinkedin className=" text-2xl transition-colors  duration-300 group-hover:text-blue-500 xl:text-5xl" />
      ),
   },
   {
      name: "Github",
      href: "https://github.com/rox651",
      icon: (
         <FaGithub className="  text-2xl transition-colors  duration-300 group-hover:text-blue-500 xl:text-5xl" />
      ),
   },

   {
      name: "Gmail",
      href: "mailto:homerojose69@gmail.com",
      icon: (
         <GrMail className=" text-2xl transition-colors  duration-300 group-hover:text-blue-500 xl:text-5xl" />
      ),
   },
];
