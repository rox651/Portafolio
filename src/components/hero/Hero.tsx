"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import HeroTitle from "./HeroTitle";

const Hero = () => {
   const component = useRef(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
         gsap.to("[data-id='Homero']", {
            scrollTrigger: {
               scrub: 1,
            },
            x: "700px",
         });

         gsap.to("[data-id='Bracamonte']", {
            scrollTrigger: {
               scrub: 1,
            },
            x: "-700px",
         });
      }, component);

      return () => ctx.revert();
   }, []);

   return (
      <main
         ref={component}
         className="grid min-h-screen place-items-center overflow-hidden bg-white"
      >
         <HeroTitle />
      </main>
   );
};

export default Hero;
