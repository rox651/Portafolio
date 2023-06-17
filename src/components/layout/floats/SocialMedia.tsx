import { socials } from "@/utils";

const SocialMedia = () => {
   return (
      <div className=" flex items-center gap-3 space-y-0 lg:block fixed bottom-6 right-6  lg:space-y-3">
         {socials.map(link => {
            const { icon, href, name } = link;
            return (
               <a
                  className="block max-w-max p-2 shadow-blue-500 shadow-sm rounded-full group bg-white"
                  aria-label={name}
                  href={href}
                  key={name}
               >
                  {icon}
               </a>
            );
         })}
      </div>
   );
};

export default SocialMedia;
