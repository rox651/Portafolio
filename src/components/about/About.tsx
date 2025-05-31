"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutImage from "./AboutImage";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top 30%",
        },
      });
      tl.to("figure img", {
        opacity: 0.6,
      })
        .to("h2", {
          y: 0,
          opacity: 1,
          ease: "power2.out",
        })
        .to("p", {
          y: 0,
          opacity: 1,
          ease: "power2.out",
        });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={component}
      className="bg-blue-950 pb-10 pt-16 text-white "
      id="about"
    >
      <div className="max-width-container ">
        <AboutImage />
      </div>
    </section>
  );
};

export default About;
