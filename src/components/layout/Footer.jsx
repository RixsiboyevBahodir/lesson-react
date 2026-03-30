import { useContext } from "react";
import { Theme } from "../../context/Context";
import { IoMoon } from "react-icons/io5";
import { GrSun } from "react-icons/gr";

export default function Footer() {
  const { color, changeColor } = useContext(Theme);

  return (
    <div>
      <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full" onClick={changeColor}>
        {color === "light" ? <IoMoon /> : <GrSun className="text-yellow-400"/>}
      </button>
    </div>
  );
}
