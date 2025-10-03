import Image from "next/image";
import { Project } from "@/types";
import ProjectItemLink from "./ProjectItemLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SanityDocument } from "@sanity/client";
import { Icon } from "@iconify/react";

const ProjectItem = ({ project }: { project: Project & SanityDocument }) => {
	const { title, href, github, mainImage, languages } = project;

	return (
		<figure className="relative grid min-h-[350px] w-full  place-items-center  overflow-hidden rounded-md border-2 ">
			<Image
				src={mainImage.asset.url}
				width={1200}
				height={850}
				className=" h-full w-full object-cover object-bottom "
				alt={title}
			/>
			<figcaption className="  absolute bottom-0  left-0 w-full space-y-2 border-t bg-white p-3  ">
				<h3 className="font-dela  text-xl ">{title}</h3>
				<div className="flex items-center gap-2">
					{languages.map(({ _id, title, icon }) => (
						<Icon
							key={_id}
							icon={icon.name}
							className="text-2xl"
							aria-label={title}
						/>
					))}
				</div>
				<div className="flex w-1/3 items-center gap-1">
					<ProjectItemLink link={href} ariaLabel={`${title} Demo`}>
						Project
						<FaExternalLinkAlt />
					</ProjectItemLink>
					{github ? (
						<ProjectItemLink link={github} ariaLabel={`${github} Repository`}>
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
