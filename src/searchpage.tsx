import React from "react";
import Sidenav from "./features/Sidenav";


const SearchPage: React.FC = () => {
  return (
    <div className="flex w-screen -100">
      <Sidenav />
  

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top search bar + filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm w-1/2">
            <input
              type="text"
              placeholder="Find an Event"
              className="flex-1 outline-none text-gray-700"
            />
          </div>

          <div className="text-gray-600 flex items-center gap-2">
            <span>👤 Username ▼</span>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-3 mb-6">
          <select className="px-3 py-2 rounded-lg bg-white shadow-sm">
            <option>Near me</option>
          </select>
          <select className="px-3 py-2 rounded-lg bg-white shadow-sm">
            <option>Today</option>
          </select>

          {/* Category icons */}
          <div className="flex gap-3 items-center">2
            <span>🎨</span>
            <span>🎭</span>
            <span>🍽️</span>
            <span>🍸</span>
            <span>🏋️</span>
            <span>🎵</span>
          </div>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div key={card} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-32 bg-moonstone -300"></div>
              <div className="p-4 text-sm">
                <p className="text-gray-500">Date at Time</p>
                <p className="font-bold">EVENT TITLE...</p>
                <p className="text-gray-500 text-xs">Address...</p>
              </div>
              <div className="flex justify-end gap-3 p-2 text-gray-500">
                <button>🔖</button>
                <button>↗️</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
