"use client";

interface TabInfo {
   description: string[];
   startDate: string;
   finishDate?: string;
}

const ExperienceTabInfo = ({ description, startDate, finishDate }: TabInfo) => {
   return (
      <div className=" grid gap-3 items-center  content-center      duration-500">
         <ul className="grid gap-3  items-center text-base  lg:text-lg ">
            {description.map(text => (
               <li key={text}>{text}</li>
            ))}
         </ul>
         <p className=" font-medium font-raleway text-sm  lg:text-base">
            Since {startDate} {finishDate && `- Until ${finishDate}`}
         </p>
      </div>
   );
};

export default ExperienceTabInfo;
