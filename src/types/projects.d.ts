import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Project {
  name: string;
  href: string;
  repository: string;
  image: StaticImageData;
  languages: {
    name: string;
    color: string;
    icon: IconType;
  }[];
}
