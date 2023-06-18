import React from "react";
import { TextAnimate } from "../common";
import SocialMedia from "./SocialMedia";

const Contact = () => {
   return (
      <section className="grid min-h-[300px]  content-center items-center gap-10 overflow-hidden py-5 lg:min-h-[700px]">
         <h3 className="mx-auto  grid   font-dela text-3xl uppercase lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextAnimate text="Work" />
            <TextAnimate text="Together" />
         </h3>
         <SocialMedia />
      </section>
   );
};

export default Contact;
