import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { Project } from "@/types";
import ProjectItemLink from "./ProjectItemLink";

const ProjectItem = ({ project }: { project: Project }) => {
   const { name, href, image, repository } = project;

   return (
      <figure className="relative grid h-[350px] w-full place-items-center overflow-hidden rounded-md border border-blue-500 drop-shadow-xl ">
         <Image
            src={image}
            width={1200}
            height={850}
            className=" h-full w-full object-cover "
            alt={name}
         />
         <figcaption className="  absolute bottom-0  left-0 w-full space-y-1 bg-blue-500 p-3  text-white ">
            <h3 className="font-dela  text-xl ">{name}</h3>
            <ProjectItemLink link={href} ariaLabel={`${name} Demo Link`}>
               See project
            </ProjectItemLink>
            <ProjectItemLink link={repository} ariaLabel={`${name} Repository Link`}>
               See repository
            </ProjectItemLink>
         </figcaption>
      </figure>
   );
};

export default ProjectItem;
