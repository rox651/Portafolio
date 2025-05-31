import { socials } from "@/utils";

const SocialMedia = () => {
   return (
      <div className="  flex items-center justify-center  gap-5   ">
         {socials.map(link => {
            const { icon, href, name } = link;
            return (
               <a className="group  " aria-label={name} href={href} key={name}>
                  {icon}
               </a>
            );
         })}
      </div>
   );
};

export default SocialMedia;
