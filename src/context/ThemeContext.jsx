import { useReducer, useState } from "react";
import { Theme } from "./Context";
import { inishilState, reducer } from "./store";

export default function ContextProvider({ children }) {
  const [color, setColor] = useState("light");

  function changeColor() {
    const html = document.querySelector("html");
    const newColor = color == "light" ? "dark" : "light";
    setColor(newColor);

    if (newColor == "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  const [count,despash]= useReducer(reducer,inishilState)

  return (
    <Theme.Provider value={{ color, changeColor,count ,despash}}>
      {children}
    </Theme.Provider>
  );
}
