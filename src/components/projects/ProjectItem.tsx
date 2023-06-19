import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { Project } from "@/types";
import { formatProjectNumber } from "@/utils";

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
   const { name, href, image } = project;
   const projectNumber = formatProjectNumber({ number: index + 1 });

   return (
      <div
         data-title="project-item"
         className="   group relative mx-auto grid h-[500px]  w-full place-items-center bg-gradient-to-br  from-blue-950 via-blue-950  to-blue-900 p-5 font-dela opacity-0 shadow-lg shadow-black/10 lg:mx-0 lg:h-[600px] 2xl:h-[680px] "
      >
         <span
            aria-label="Number of project"
            className=" absolute  left-5 top-5 text-2xl  text-white  transition-[opacity_transform] duration-500 lg:text-4xl lg:group-hover:translate-x-52 lg:group-hover:opacity-0"
         >
            {projectNumber}
         </span>
         <figure className="grid h-full w-full place-items-center lg:w-[400px]">
            <Image
               src={image}
               width={280}
               height={300}
               className="max-w-[200px] object-contain drop-shadow-lg lg:max-w-none"
               alt={name}
            />
         </figure>
         <a
            href={href}
            target="_blank"
            aria-label={`${name} Link`}
            className=" absolute bottom-5 left-5 flex items-center gap-3 text-center text-lg text-white  transition-[opacity_transform] duration-500 lg:translate-y-full  lg:text-2xl lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
         >
            See project
            <BsArrowUpRight className="transition-transform duration-500 " />
         </a>
      </div>
   );
};

export default ProjectItem;
