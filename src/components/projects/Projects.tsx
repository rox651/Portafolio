import { projects } from "@/utils";
import ProjectItem from "./ProjectItem";

const Projects = () => {
   return (
      <section className="py-10" id="projects">
         <div className="max-width-container">
            <h2 className="mb-20 font-dela text-4xl lg:text-7xl">Latest Projects</h2>
            <div className="grid gap-y-16 lg:flex lg:flex-wrap  lg:justify-center lg:gap-x-5 xl:gap-y-36 2xl:[&>*:nth-child(even)]:translate-y-[50px]">
               {projects.map((project, index) => (
                  <ProjectItem key={project.name} project={project} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
