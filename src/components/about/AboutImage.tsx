import Image from "next/image";
import HomeroImage from "/public/images/Homero-Bracamonte.webp";

const AboutImage = () => {
   return (
      <figure className=" font-bold  relative max-w-[400px] lg:max-w-[500px]   mx-auto">
         <article className=" font-raleway  z-10  lg:w-max w-full lg:max-w-5xl    space-y-4  absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="font-dela   w-full text-center  duration-300   uppercase text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl ">
               Who I am
            </h2>
            <p className="leading-snug text-base lg:text-2xl 2xl:text-4xl font-black text-center">
               I am a skilled <strong className=" text-blue-400">web developer</strong> dedicated to
               creating high-quality and impactful digital experiences. With a keen eye for detail
               and a passion for <strong className=" text-blue-400">innovation</strong>, I
               specialize in crafting dynamic websites that seamlessly blend aesthetics and
               functionality.
            </p>
         </article>

         <Image
            src={HomeroImage}
            width={849}
            height={1592.5}
            placeholder="blur"
            title="Homero Bracamonte"
            alt="Homero Bracamonte"
            className="block mx-auto w-full max-h-[800px] object-cover opacity-40  "
         />
      </figure>
   );
};

export default AboutImage;
