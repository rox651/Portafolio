import Image from "next/image";

import HomeroImage from "/public/images/Homero-Bracamonte.webp";

const AboutImage = () => {
   return (
      <figure className=" relative  mx-auto max-w-[400px] font-bold   lg:max-w-[500px]">
         <article className=" absolute  left-[50%]  top-[60%] z-10 w-full    translate-x-[-50%]  translate-y-[-50%] space-y-4 font-raleway lg:w-max lg:max-w-5xl">
            <h2 className="w-full translate-y-5   text-center font-dela  text-3xl   uppercase  opacity-0  lg:text-6xl xl:text-7xl 2xl:text-8xl ">
               Who I am
            </h2>
            <p className="translate-y-5 text-center  text-base  font-semibold leading-snug opacity-0 lg:text-2xl 2xl:text-4xl">
               I am a skilled <strong>web developer</strong> dedicated to creating high-quality and
               impactful digital experiences. With a keen eye for detail and a passion for{" "}
               <strong>innovation</strong>, I specialize in crafting dynamic websites that
               seamlessly blend aesthetics and functionality.
            </p>
         </article>

         <Image
            src={HomeroImage}
            width={849}
            height={1592.5}
            placeholder="blur"
            title="Homero Bracamonte"
            alt="Homero Bracamonte"
            className="mx-auto block max-h-[800px] w-full object-cover    "
            decoding="async"
            fetchPriority="high"
         />
      </figure>
   );
};

export default AboutImage;
