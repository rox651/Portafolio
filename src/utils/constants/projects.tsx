import { Project } from "@/types";

import PepsiCloneImage from "../../../public/images/projects/Pepsi-clone-Homero-Bracamonte.webp";
import WeatherAppImage from "../../../public/images/projects/Weather-app-Homero-Bracamonte.webp";
import TimerAppImage from "../../../public/images/projects/Timer-app-Homero-Bracamonte.webp";
import DictionaryAppImage from "../../../public/images/projects/Dictionary-app-Homero-Bracamonte.webp";
import BookFilterImage from "../../../public/images/projects/Book-filter-Homero-Bracamonte.webp";
import RestaurantImage from "../../../public/images/projects/Restaurant-app-Homero-Bracamonte.webp";
import KiddoEstudioImage from "../../../public/images/projects/Kiddo-estudio-Homero-Bracamonte.webp";

import { TbBrandTypescript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { SiBun } from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";

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
    name: "Typescript",
    color: "#3178C6",
    icon: TbBrandTypescript,
  },
  {
    name: "API",
    color: "#000000",
    icon: TbApi,
  },
];

export const reactQuery = {
  name: "React Query",
  color: "#FF4154",
  icon: SiReactquery,
};

export const bun = {
  name: "Bun",
  color: "#000000",
  icon: SiBun,
};

export const astro = {
  name: "Astro",
  color: "#FF5D01",
  icon: TbBrandAstro,
};

export const projects: Project[] = [
  {
    name: "Kiddo Estudio",
    href: "https://kiddov3.vercel.app/",
    repository: "https://github.com/rox651/Kiddov3",
    image: KiddoEstudioImage,
    languages: [...commonLanguages, ...reactLanguages, bun, astro],
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
    languages: [...reactLanguages, reactQuery],
  },
  {
    name: "Timer app",
    href: "https://timer-20.vercel.app/",
    repository: "https://github.com/rox651/Timer-2.0",
    image: TimerAppImage,
    languages: reactLanguages,
  },
  {
    name: "Dictionary app",
    href: "https://dictionary-eight-beta.vercel.app/",
    repository: "https://dictionary-eight-beta.vercel.app/",
    image: DictionaryAppImage,
    languages: [...reactLanguages, reactQuery],
  },
  {
    name: "Book filter",
    href: "https://prueba-tecnica-midudev.vercel.app/",
    repository: "https://github.com/rox651/prueba-tecnica-midudev",
    image: BookFilterImage,
    languages: reactLanguages,
  },
  {
    name: "Tripadvisor for restaurants",
    href: "https://restaurante-tarea-iu-digital.vercel.app/",
    repository: "https://github.com/rox651/restaurante-tarea-iu-digital",
    image: RestaurantImage,
    languages: [...reactLanguages, bun],
  },
];
