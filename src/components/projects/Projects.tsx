import ProjectItem from "./ProjectItem";
import type { SanityDocument } from "@sanity/client";

import { client } from "@/utils/sanity";
import { Project } from "@/types";

const PROJECTS_QUERY = `
*[_type == "project"]
| order(_createdAt asc)
{
  _id,
  title,
  slug,
  href,
  github,
  category->{
    _id,
    title,
    description
  },
  languages[]->{
    _id,
    title,
    icon
  },
  mainImage{
    asset->{
      url,
      metadata { dimensions }
    }
  }
}
`;

const options = { next: { revalidate: 60 } };

const Projects = async () => {
	const projects = await client.fetch<(SanityDocument & Project)[]>(
		PROJECTS_QUERY,
		{},
		options,
	);

	return (
		<section className="pt-10" id="projects">
			<div className="max-width-container">
				<h2 className="mb-10 text-center font-dela text-4xl lg:text-6xl">
					Projects
				</h2>
				<div className="grid gap-y-5  lg:grid-cols-2  lg:justify-center lg:gap-x-5  ">
					{projects.map((project) => (
						<ProjectItem key={project._id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
