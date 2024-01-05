import { FC } from "react";

interface ProjectItemLinkProps {
   link: string;
   ariaLabel: string;
   children: React.ReactNode;
}

const ProjectItemLink: FC<ProjectItemLinkProps> = ({ link, ariaLabel, children }) => {
   return (
      <a
         href={link}
         target="_blank"
         aria-label={ariaLabel}
         className=" flex max-w-max items-center gap-2 rounded-md bg-blue-500  px-2 py-1 text-center font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-600"
      >
         {children}
      </a>
   );
};

export default ProjectItemLink;
