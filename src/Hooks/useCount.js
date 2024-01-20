import { useState } from "react";

export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return { count, increaseCount, resetCount, decreaseCount };
};

export default useCount;
