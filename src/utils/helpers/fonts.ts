import { Montserrat, Dela_Gothic_One } from "next/font/google";

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dela",
});

const montserrat = Montserrat({
  weight: ["200", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export { dela, montserrat };
