import { StaticImageData } from "next/image";

export interface Project {
   name: string;
   href: string;
   repository: string;
   image: StaticImageData;
}
