import { ReactElement } from "react";

export interface CommonLink {
   name: string;
   href: string;
}

export interface SocialLinks extends CommonLink {
   icon: ReactElement;
}
