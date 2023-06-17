"use client";

import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
   const [visible, setVisibility] = useState<boolean>(initialState);

   const toggle = useCallback(() => setVisibility(prev => !prev), []);

   const setToggleStatus = (value: boolean) => setVisibility(value);

   return { visible, toggle, setToggleStatus };
};

export default useToggle;
