import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
export const myContext = createContext();

export const UseProvider = ({ children }) => {
  const [slide, setSlide] = useState(false);

  const click = () => {
    return setSlide(!slide);
  };

  return (
    <myContext.Provider value={{ click, slide }}>
      {children}</myContext.Provider>
  );
};

export const useStateProvider = () => useContext(myContext);
