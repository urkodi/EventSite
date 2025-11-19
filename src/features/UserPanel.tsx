import { useState, useRef } from "react";
import XSVG from "../components/icons/XSVG";
import ProfilePic from "../assets/images/DuckLogo.png"; // Replace with your actual image path

import { Link } from 'react-router-dom';

function UserPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {!isOpen && (
        <div className="fixed top-8 right-0 w-35 h-18 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-8 right-4 z-50 w-16 h-16 rounded-full bg-lightermoonstone/70 overflow-hidden shadow-md hover:ring-4 ring-vanilla transition cursor-pointer"
        >
          <img src={ProfilePic} alt="Profile" className="w-full h-full object-cover" />
        </button>
        </div>
      )}

      {/* Sliding Panel */}
      <aside
        ref={panelRef}
        className={`fixed top-0 right-0 my-8 w-[15%] bg-gradient-to-b from-lightermoonstone to-moonstone rounded-l-2xl shadow-xl z-40 transform transition-transform duration-300 ease-in-out overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        <div className="flex justify-between items-center p-3 border-b-2 border-moonstone ml-2">
          <h2 className="text-xl font-bold text-white">User Panel</h2>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-vanilla">
            <XSVG width="1.2em" height="1.2em" />
          </button>
        </div>

        <div className="p-4 ml-2 text-white text-lg space-y-2">
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