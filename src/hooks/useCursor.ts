"use client";

import { useEffect, useState } from "react";

const useMousePosition = () => {
   const [stateX, setStateX] = useState<number>();
   const [stateY, setStateY] = useState<number>();

   console.log(stateX, stateY);

   useEffect(() => {
      const updatePosition = (event: MouseEvent) => {
         const { pageX, pageY } = event;
         setStateX(pageX);
         setStateY(pageY);
      };
      document.addEventListener("mousemove", updatePosition);

      return () => {
         document.removeEventListener("mousemove", updatePosition);
      };
   }, []);

   return { stateX, stateY };
};

export default useMousePosition;
