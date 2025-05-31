import Image from "next/image";
import { Project } from "@/types";
import ProjectItemLink from "./ProjectItemLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ project }: { project: Project }) => {
  const { name, href, image, repository, languages } = project;

  return (
    <figure className="relative grid min-h-[350px] w-full  place-items-center  overflow-hidden rounded-md border-2 ">
      <Image
        src={image}
        width={1200}
        height={850}
        className=" h-full w-full object-cover object-bottom "
        alt={name}
      />
      <figcaption className="  absolute bottom-0  left-0 w-full space-y-2 border-t bg-white p-3  ">
        <h3 className="font-dela  text-xl ">{name}</h3>
        <div className="flex items-center gap-2">
          {languages.map(({ name, color, icon: Icon }) => (
            <Icon
              key={name}
              className="text-2xl"
              style={{ color }}
              aria-label={name}
            />
          ))}
        </div>
        <div className="flex w-1/3 items-center gap-1">
          <ProjectItemLink link={href} ariaLabel={`${name} Demo`}>
            Project
            <FaExternalLinkAlt />
          </ProjectItemLink>
          {repository ? (
            <ProjectItemLink link={repository} ariaLabel={`${name} Repository`}>
              Repo
              <FaGithub />
            </ProjectItemLink>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
};

export default ProjectItem;
