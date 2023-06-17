import { CommonLink } from "@/types";

interface Link {
   name: string;
}

const SkillsLink = ({ link }: { link: Link }) => {
   return (
      <li className=" py-1 lg:py-2 border-b-2 border-white">
         <h3>{link.name}</h3>
      </li>
   );
};

export default SkillsLink;
