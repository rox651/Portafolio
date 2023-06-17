"use client";

import { useCursor } from "@/hooks";

const Cursor = () => {
   const { stateX, stateY } = useCursor();
   return (
      <div
         style={{
            left: `${stateX}px`,
            top: `${stateY}px`,
         }}
         className=" absolute w-3 h-3 bg-blue-600 rounded-full pointer-events-none translate-x-[-50%] z-50 translate-y-[-50%]"
      ></div>
   );
};

export default Cursor;
