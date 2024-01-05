import { projects } from "@/utils";
import ProjectItem from "./ProjectItem";

const Projects = () => {
   return (
      <section className="pt-10" id="projects">
         <div className="max-width-container">
            <h2 className="mb-10 text-center font-dela text-4xl lg:text-6xl">Projects</h2>
            <div className="grid gap-y-5  lg:grid-cols-2  lg:justify-center lg:gap-x-5  ">
               {projects.map(project => (
                  <ProjectItem key={project.name} project={project} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
