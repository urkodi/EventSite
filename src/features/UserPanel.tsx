import { useState, useRef, useEffect } from "react";
import XSVG from "../components/icons/XSVG";
import ProfilePic from "../assets/images/DuckLogo.png"; // Replace with your actual image path

import { Link } from 'react-router-dom';

function UserPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {!isOpen && (
<<<<<<< HEAD
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-8 right-4 z-50 w-16 h-16 rounded-full overflow-hidden shadow-md hover:ring-4 ring-vanilla bg-lightermoonstone/80 transition cursor-pointer"
=======
        <div className="fixed top-8 right-0 w-35 h-18 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-8 right-4 z-50 w-16 h-16 rounded-full bg-lightermoonstone/70 overflow-hidden shadow-md hover:ring-4 ring-vanilla transition cursor-pointer"
>>>>>>> ee61e0805a07db8fd831e2e45fba5d1577397d90
        >
          <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
        </button>
      )}

      {/* Sliding Panel */}
      <aside
        ref={panelRef}
        className={`fixed top-0 right-0 my-8 sm:h-[88%] lg:h-[93%] lg:p-3 w-[15%] bg-lightermoonstone rounded-l-xl shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-3 border-b-2 border-moonstone">
          <h2 className="text-xl font-bold text-white">User Panel</h2>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-vanilla">
            <XSVG width="1.2em" height="1.2em" />
          </button>
        </div>

        <div className="p-4 text-white text-lg space-y-2">
          <div className="flex flex-col gap-2 mb-4">
          <Link
            to="/profile" 
            className="text-white hover:text-moonstone font-semibold"
            >Profile
          </Link>
          <Link
            to="/hosted-events" 
            className="text-white hover:text-moonstone font-semibold"
            >Hosted Events
          </Link>
          </div>
          <p>more blah blah</p>
          {/* Add user-specific content here */}
        </div>
      </aside>
    </>
  );
}

export default UserPanel;