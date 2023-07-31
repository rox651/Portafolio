import { projects } from "@/utils";
import ProjectItem from "./ProjectItem";

const Projects = () => {
   return (
      <section className="py-10" id="projects">
         <div className="max-width-container">
            <h2 className="mb-10 font-dela text-4xl lg:mb-20 lg:text-7xl">Latest Projects</h2>
            <div className="grid gap-y-10  lg:grid-cols-3  lg:justify-center lg:gap-x-5 xl:gap-y-16 ">
               {projects.map(project => (
                  <ProjectItem key={project.name} project={project} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
