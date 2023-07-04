import { BsArrowUpRight } from "react-icons/bs";
import { ExperienceTab } from "@/types";
import ExperienceTabInfo from "./ExperienceTabInfo";

const ExperienceTab = ({ link }: { link: ExperienceTab }) => {
   const { name, description, href, startDate } = link;

   return (
      <li className="  group border-b-2 border-white transition-colors hover:bg-blue-500  ">
         <a
            href={href}
            aria-label={name}
            target="_blank"
            className="  relative grid h-full gap-3 px-2  py-3 lg:py-4 "
         >
            <div className="flex items-center justify-between">
               <h3>{name}</h3>
               <BsArrowUpRight className="transition-transform duration-500 group-hover:-rotate-45" />
            </div>
            <ExperienceTabInfo description={description} startDate={startDate} />
         </a>
      </li>
   );
};

export default ExperienceTab;
