import { useState } from "react";

export const useToggle = (initialstate = false) => {
  const [state, setState] = useState(initialstate);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};

export default useToggle;
