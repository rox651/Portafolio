import { Project } from "@/types";

import DiscordCloneImage from "../../../public/images/projects/Discord-clone-Homero-Bracamonte.webp";
import PepsiCloneImage from "../../../public/images/projects/Pepsi-clone-Homero-Bracamonte.webp";
import WeatherAppImage from "../../../public/images/projects/Weather-app-Homero-Bracamonte.webp";
import TimerAppImage from "../../../public/images/projects/Timer-app-Homero-Bracamonte.webp";
import TodoAppImage from "../../../public/images/projects/Todo-app-Homero-Bracamonte.webp";
import CryptoAppImage from "../../../public/images/projects/Crypto-app-Homero-Bracamonte.webp";

export const projects: Project[] = [
   {
      name: "Discord clone",
      href: "https://discord-replic.netlify.app",
      repository: "https://github.com/rox651/Discord-replica.git",
      image: DiscordCloneImage,
   },
   {
      name: "Pepsi clone",
      href: "https://pepsi-cyan.vercel.app",
      repository: "https://github.com/rox651/Pepsi",
      image: PepsiCloneImage,
   },
   {
      name: "Weather app",
      href: "https://my-weather-app-jet.vercel.app",
      repository: "https://github.com/rox651/My-weather-app",
      image: WeatherAppImage,
   },
   {
      name: "Timer app",
      href: "https://timer-rox.vercel.app",
      repository: "https://github.com/rox651/Timer",
      image: TimerAppImage,
   },
   {
      name: "Todo app",
      href: "https://todo-app-list-final.000webhostapp.com",
      repository: "https://github.com/rox651/todolist-with-db",
      image: TodoAppImage,
   },
   {
      name: "Crypto app",
      href: "https://cryptocurrencyquoterapp.netlify.app",
      repository: "https://github.com/rox651/Crypto-app",
      image: CryptoAppImage,
   },
];
