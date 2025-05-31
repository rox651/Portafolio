import { experience } from "@/utils";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
   return (
      <section className="bg-blue-950 pb-10 pt-10 text-white lg:pb-20" id="experience">
         <div className="max-width-container grid gap-10  ">
            <h2 className="font-dela text-4xl lg:text-6xl">Experience</h2>
            <ol className="relative border-s border-white/50 ">
               {experience.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
               ))}
            </ol>
         </div>
      </section>
   );
};

export default Experience;
