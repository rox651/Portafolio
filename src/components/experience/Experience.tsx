import { experience, skills } from "@/utils";
import ExperienceLink from "./ExperienceTab";
import SkillsLink from "./SkillsLink";

const Experience = () => {
   return (
      <section className="bg-blue-950  py-20 text-white" id="experience">
         <div className="max-width-container grid gap-10 font-dela lg:grid-cols-[2fr_0.6fr]">
            <div className="grid">
               <h2 className=" text-4xl lg:text-7xl">Experience</h2>
               <ul className=" mt-5  grid  font-dela text-2xl lg:text-4xl">
                  {experience.map(link => (
                     <ExperienceLink key={link.name} link={link} />
                  ))}
               </ul>
            </div>
            <div>
               <h2 className=" text-right text-3xl lg:text-left lg:text-5xl">Skills</h2>
               <ul className=" mt-5 space-y-2  text-right font-dela text-base lg:text-left lg:text-2xl">
                  {skills.map(link => (
                     <SkillsLink key={link.name} link={link} />
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Experience;
