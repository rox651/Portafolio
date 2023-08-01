const AboutInfo = () => {
   return (
      <article className=" absolute  left-[50%]  top-[60%] z-10 w-full    translate-x-[-50%]  translate-y-[-50%] space-y-4 font-raleway lg:w-max lg:max-w-5xl">
         <h2 className="w-full translate-y-5   text-center font-dela  text-3xl   uppercase  opacity-0  lg:text-6xl xl:text-7xl 2xl:text-8xl ">
            Who I am
         </h2>
         <p className="translate-y-5 text-center  text-base  font-semibold leading-snug opacity-0 lg:text-2xl 2xl:text-4xl">
            Skilled <strong>web developer</strong> dedicated to creating high-quality and
            impactful digital experiences. With a keen eye for detail and a passion for{" "}
            <strong>innovation</strong>, I specialize in crafting dynamic websites that seamlessly
            blend aesthetics and functionality.
         </p>
      </article>
   );
};

export default AboutInfo;
