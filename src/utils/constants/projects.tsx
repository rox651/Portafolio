import { Project } from "@/types";

import DiscordCloneImage from "../../../public/images/projects/Discord-clone-Homero-Bracamonte.webp";
import PepsiCloneImage from "../../../public/images/projects/Pepsi-clone-Homero-Bracamonte.webp";
import WeatherAppImage from "../../../public/images/projects/Weather-app-Homero-Bracamonte.webp";
import TimerAppImage from "../../../public/images/projects/Timer-app-Homero-Bracamonte.webp";
import TodoAppImage from "../../../public/images/projects/Todo-app-Homero-Bracamonte.webp";
import CryptoAppImage from "../../../public/images/projects/Crypto-app-Homero-Bracamonte.webp";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const commonLanguages = [
   {
      name: "HTML5",
      color: "#E44D26",
      icon: FaHtml5,
   },
   {
      name: "CSS3",
      color: "#264DE4",
      icon: FaCss3Alt,
   },
   {
      name: "Javascript",
      color: "#F0DB4F",
      icon: IoLogoJavascript,
   },
];
const reactLanguages = [
   {
      name: "React",
      color: "#61DAFB",
      icon: FaReact,
   },
   {
      name: "Tailwindcss",
      color: "#38B2AC",
      icon: SiTailwindcss,
   },
   {
      name: "API",
      color: "#000000",
      icon: TbApi,
   },
];
const phpLanguages = [
   ...commonLanguages,
   {
      name: "PHP",
      color: "#777BB4",
      icon: FaPhp,
   },
   {
      name: "MySQL",
      color: "#4479A1",
      icon: DiMysql,
   },
];

export const projects: Project[] = [
   {
      name: "Discord clone",
      href: "https://discord-replic.netlify.app",
      repository: "https://github.com/rox651/Discord-replica.git",
      image: DiscordCloneImage,
      languages: commonLanguages,
   },
   {
      name: "Pepsi clone",
      href: "https://pepsi-cyan.vercel.app",
      repository: "https://github.com/rox651/Pepsi",
      image: PepsiCloneImage,
      languages: commonLanguages,
   },
   {
      name: "Weather app",
      href: "https://my-weather-app-jet.vercel.app",
      repository: "https://github.com/rox651/My-weather-app",
      image: WeatherAppImage,
      languages: reactLanguages,
   },
   {
      name: "Timer app",
      href: "https://timer-rox.vercel.app",
      repository: "https://github.com/rox651/Timer",
      image: TimerAppImage,
      languages: commonLanguages,
   },
   {
      name: "Todo app",
      href: "https://todo-app-list-final.000webhostapp.com/login",
      repository: "https://github.com/rox651/todolist-with-db",
      image: TodoAppImage,
      languages: phpLanguages,
   },
   {
      name: "Crypto app",
      href: "https://cryptocurrencyquoterapp.netlify.app",
      repository: "https://github.com/rox651/Crypto-app",
      image: CryptoAppImage,
      languages: reactLanguages,
   },
];
