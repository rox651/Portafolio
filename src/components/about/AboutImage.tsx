import Image from "next/image";

import HomeroImage from "../../../public/images/Homero-Bracamonte.webp";
import AboutInfo from "./AboutInfo";

const AboutImage = () => {
  return (
    <figure className=" relative  mx-auto max-w-[400px] font-bold   lg:max-w-[500px]">
      <AboutInfo />
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
