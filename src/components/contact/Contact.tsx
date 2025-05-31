"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextAnimate } from "../common";
import SocialMedia from "./SocialMedia";

const Contact = () => {
   const component = useRef(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
         gsap.to("[data-id='Work']", {
            scrollTrigger: {
               scrub: 1,
               trigger: component.current,
            },
            x: "-100px",
         });

         gsap.to("[data-id='Together']", {
            scrollTrigger: {
               scrub: 1,
               trigger: component.current,
            },
            x: "100px",
         });
      }, component);

      return () => ctx.revert();
   }, []);

   return (
      <section
         ref={component}
         id="contact"
         className="grid min-h-[300px]  content-center items-center gap-10 overflow-hidden py-5 lg:min-h-[550px] 2xl:min-h-[700px]"
      >
         <h3 className="mx-auto  grid   font-dela text-3xl uppercase lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextAnimate text="Work" />
            <TextAnimate text="Together" />
         </h3>
         <SocialMedia />
      </section>
   );
};

export default Contact;
