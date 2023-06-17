import { experience, skills } from "@/utils";
import ExperienceLink from "./ExperienceTab";
import SkillsLink from "./SkillsLink";

const Experience = () => {
   return (
      <section className="py-20 bg-blue-950 text-white">
         <div className="max-width-container grid lg:grid-cols-[2fr_0.6fr] gap-10 font-dela">
            <div className="grid">
               <h2 className=" text-4xl lg:text-7xl">Experience</h2>
               <ul className=" grid  mt-5  font-dela text-2xl lg:text-4xl">
                  {experience.map(link => (
                     <ExperienceLink key={link.name} link={link} />
                  ))}
               </ul>
            </div>
            <div>
               <h2 className=" text-right lg:text-left text-3xl lg:text-5xl">Skills</h2>
               <ul className=" space-y-2 mt-5  text-right lg:text-left font-dela text-base lg:text-2xl">
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
