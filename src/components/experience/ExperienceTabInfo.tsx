interface TabInfo {
   description: string[];
   startDate: string;
   finishDate?: string;
}

const ExperienceTabInfo = ({ description, startDate, finishDate }: TabInfo) => {
   return (
      <div className=" grid content-center items-center  gap-3      duration-500">
         <ul className="grid items-center  gap-3 text-base  lg:text-lg ">
            {description.map(text => (
               <li key={text}>{text}</li>
            ))}
         </ul>
         <p className=" font-montserrat text-sm font-medium  lg:text-base">
            Since {startDate} {finishDate && `- Until ${finishDate}`}
         </p>
      </div>
   );
};

export default ExperienceTabInfo;
