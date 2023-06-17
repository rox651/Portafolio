import { ReactElement } from "react";

export interface CommonLink {
   name: string;
   href: string;
}

export interface SocialLinks extends CommonLink {
   icon: ReactElement;
}

export interface ExperienceTab extends CommonLink {
   description: string[];
   startDate: string;
   finishDate?: string;
}
