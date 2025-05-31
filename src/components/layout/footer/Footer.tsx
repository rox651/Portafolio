import { BiCodeAlt } from "react-icons/bi";
const Footer = () => {
   const currentYear = new Date().getFullYear();
   return (
      <footer className=" font-montserrat bg-blue-500 px-5 py-3 text-center text-sm text-white lg:py-5 lg:text-lg">
         <p className="flex items-center justify-center gap-2 lg:gap-5">
            <BiCodeAlt />{" "}
            <span>
               Made with code by <br /> <strong> © {currentYear} Homero Bracamonte </strong>
            </span>
            <BiCodeAlt />
         </p>
      </footer>
   );
};

export default Footer;
