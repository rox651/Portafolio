import { About, Contact, Experience, Hero, Projects } from "@/components";

export default function Home() {
  return (
    <div className="font-montserrat">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
