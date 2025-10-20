import { useState } from "react";
import XSVG from "./icons/XSVG";
import ChevronSVG from "./icons/ChevronSVG";

interface DropdownProps {
  buttonName: string;
  title: string;
  children?: React.ReactNode;
}

function Dropdown({buttonName, title, children}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="flex gap-1 items-center bg-white text-black font-semibold m-2 p-2 rounded-2xl" onClick={() => setIsOpen(!isOpen)}>
        <p>{buttonName}</p>
        <div className={`${isOpen ? "rotate-180" : ""} transition-all`}>
          <ChevronSVG width="1em" height="1em" />
        </div>
      </button>
      {
        isOpen && (
          <div className="absolute z-50 bg-lightgrey p-2 rounded-xl">
            <span className="mx-2 mb-2 grid grid-cols-3 justify-center items-center">
              <div></div>
              <h1 className="font-bold text-xl text-center">{title}</h1>
              <button onClick={() => setIsOpen(false)} className="justify-self-end">
                <XSVG width="1em" height="1em" />
              </button>
            </span>
            {children}
          </div>
        )
      }
    </div>
  )
}

export default Dropdown;