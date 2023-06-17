"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { ExperienceTab } from "@/types";
import ExperienceTabInfo from "./ExperienceTabInfo";

const ExperienceTab = ({ link }: { link: ExperienceTab }) => {
   const { name, description, href, startDate } = link;

   return (
      <li className="  border-b-2 border-white hover:bg-blue-500 transition-colors group  ">
         <a
            href={href}
            aria-label={name}
            target="_blank"
            className="  py-3 lg:py-4 relative grid gap-3  h-full px-2 "
         >
            <div className="flex items-center justify-between">
               <h3>{name}</h3>
               <BsArrowUpRight className="group-hover:-rotate-45 duration-500 transition-transform" />
            </div>
            <ExperienceTabInfo description={description} startDate={startDate} />
         </a>
      </li>
   );
};

export default ExperienceTab;
