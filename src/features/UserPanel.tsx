import { useState, useRef } from "react";
import XSVG from "../components/icons/XSVG";
import ProfilePic from "../assets/images/DuckLogo.png";

import { Link, useNavigate } from 'react-router-dom';
import Calendar from "../components/Calendar";
import Clock from "../components/Clock";
import useUserStore from "../lib/userStore";

function UserPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { removeUser } = useUserStore();

  const handleSignOut = () => {
    removeUser();
    
    localStorage.removeItem('authToken');
    
    setIsOpen(false);

    navigate('/landing');
  };

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
          <h2 className="text-2xl font-bold text-white">User Panel</h2>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-vanilla">
            <XSVG width="1.2em" height="1.2em" />
          </button>
        </div>

        <div className="p-4 ml-2 text-white text-xl space-y-2 h-full flex flex-col">
          <div className="flex flex-col gap-4 mb-4">
          <Link
            to="/profile" 
            className="text-white hover:text-vanilla font-semibold transition"
            >Profile
          </Link>
          <Link
            to="/hosted-events" 
            className="text-white hover:text-vanilla font-semibold transition"
            >Hosted Events
          </Link>
          </div>

          {/* Bottom Section */}
          <div className="space-y-2 pb-4">
            <Calendar />
            <Clock />
            
            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition border border-white/30 hover:border-white/50"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default UserPanel;