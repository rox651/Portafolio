import { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface ProjectItemLinkProps {
   link: string;
   ariaLabel: string;
   children: string;
}

const ProjectItemLink: FC<ProjectItemLinkProps> = ({ link, ariaLabel, children }) => {
   return (
      <a
         href={link}
         target="_blank"
         aria-label={ariaLabel}
         className=" group flex max-w-max items-center gap-2"
      >
         {children}
         <BsArrowUpRight className="transition-transform duration-500  group-hover:-rotate-45 " />
      </a>
   );
};

export default ProjectItemLink;
