interface Link {
   name: string;
}

const SkillsLink = ({ link }: { link: Link }) => {
   return (
      <li className=" border-b-2 border-white py-1 lg:py-2">
         <h3>{link.name}</h3>
      </li>
   );
};

export default SkillsLink;
