import { raleway, dela } from "@/utils";
import "../styles/globals.css";
import { Footer, Header } from "@/components";
import Provider from "./provider";

export const metadata = {
   title: "Homero Bracamonte - Web Developer",
   description:
      "I am a skilled web developer dedicated to creating high-quality and impactful digital experiences. With a keen eye for detail and a passion for innovation, I specialize in crafting dynamic websites that seamlessly blend aesthetics and functionality.",
   generator: "Next.js",
   applicationName: "Homero Bracamonte - Web Developer",
   referrer: "origin-when-cross-origin",
   keywords: [
      "web developer",
      "high-quality",
      "impactful digital experiences",
      "detail-oriented",
      "innovation",
      "dynamic websites",
      "aesthetics",
      "functionality",
   ],
   authors: [{ name: "Homero Bracamonte" }],
   category: "technology",
   colorScheme: "light",
   themeColor: "light",
   creator: "Homero Bracamonte",
   publisher: "Homero Bracamonte",
   formatDetection: {
      email: true,
      address: false,
      telephone: false,
   },
   metadataBase: new URL("https://homero-bracamonte-portfolio.vercel.app"),
   openGraph: {
      title: "Homero Bracamonte - Web Developer",
      description:
         "I am a skilled web developer dedicated to creating high-quality and impactful digital experiences. With a keen eye for detail and a passion for innovation, I specialize in crafting dynamic websites that seamlessly blend aesthetics and functionality.",
      url: "https://homero-bracamonte-portfolio.vercel.app",
      siteName: "Homero Bracamonte - Web Developer",
      type: "website",
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${dela.variable} ${raleway.variable} overflow-x-hidden `}>
            <Provider>
               <Header />
               {children}
               <Footer />
            </Provider>
         </body>
      </html>
   );
}
