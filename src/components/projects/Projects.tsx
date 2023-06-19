"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projects } from "@/utils";
import ProjectItem from "./ProjectItem";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
   const component = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.to("[data-title='project-item']", {
            scrollTrigger: {
               trigger: "[data-title='project-item']",
               start: "top 70%",
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            stagger: 0.2,
         });
      }, component);

      return () => ctx.revert();
   }, []);

   return (
      <section ref={component} className="py-10" id="projects">
         <div className="max-width-container">
            <h2 className="mb-20 font-dela text-4xl lg:text-7xl">Latest Projects</h2>
            <div className="grid gap-y-16  lg:grid-cols-3  lg:justify-center lg:gap-x-5 xl:gap-y-16 ">
               {projects.map((project, index) => (
                  <ProjectItem key={project.name} project={project} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
