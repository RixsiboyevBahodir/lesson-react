import { useState } from "react";
import { Theme } from "./Context";

export default function ContextProvider({ children }) {
  const [color, setColor] = useState("light");

  const [wishList, setWshList] = useState([]);

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

  return (
    <Theme.Provider value={{ color, changeColor, setWshList, wishList }}>
      {children}
    </Theme.Provider>
  );
}
