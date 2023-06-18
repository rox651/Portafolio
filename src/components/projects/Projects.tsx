import { projects } from "@/utils";
import ProjectItem from "./ProjectItem";

const Projects = () => {
   return (
      <section className="py-10">
         <div className="max-width-container">
            <h2 className="mb-20 font-dela text-4xl lg:text-7xl">Latest Projects</h2>
            <div className="grid gap-y-16 lg:flex lg:flex-wrap  lg:justify-center lg:gap-x-20 lg:gap-y-36 xl:gap-x-5 lg:[&>*:nth-child(even)]:translate-y-[50px]">
               {projects.map((project, index) => (
                  <ProjectItem key={project.name} project={project} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
