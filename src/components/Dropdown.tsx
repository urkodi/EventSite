import { useState, useEffect, useRef } from "react";
import XSVG from "./icons/XSVG";
import ChevronSVG from "./icons/ChevronSVG";

interface DropdownProps {
  buttonName: string;
  title: string;
  children?: React.ReactNode;
}

function Dropdown({ buttonName, title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 items-center bg-white text-black/70 text-lg m-2 py-1 px-3 rounded-4xl"
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
        role="button"
      >
        <p>{buttonName}</p>
        <div className={`${isOpen ? "rotate-180" : ""} transition-all`}>
          <ChevronSVG width="1em" height="1em" />
        </div>
      </button>

      {isOpen && (
        <div
          id="dropdown-content"
          className="absolute z-50 bg-lightgrey p-4 rounded-xl min-w-[300px] max-h-[370px] overflow-y-scroll shadow-lg"
          style={{ scrollbarColor: "#E9CC73 transparent"
          }}
        >
          <div className="relative mb-3">
            <h1 className="font-semibold text-black/70 text-xl text-center">{title}</h1>
              <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 p-1">
                <XSVG width="1em" height="1em" />
              </button>
          </div>

          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;