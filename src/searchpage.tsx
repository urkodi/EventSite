import React, { useState } from "react";
import Panels from "./features/Panels";
import BookmarkIcon from "./assets/icons/bookmark.svg";
import ExternalLinkIcon from "./assets/icons/external-link.svg";
import MicIcon from "./assets/icons/mic-vocal.svg";
import WineIcon from "./assets/icons/wine.svg";
import BurgerIcon from "./assets/icons/hamburger.svg";
import BallIcon from "./assets/icons/volleyball.svg";
import ArtIcon from "./assets/icons/palette.svg";
import PartyIcon from "./assets/icons/party.svg";  

const SearchPage: React.FC = () => {
  // ---------- PLACEHOLDER FOR CATEGORY FILTER FOR DEMO PURPOSES ----------
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "Music", icon: MicIcon },
    { name: "Drinks", icon: WineIcon },
    { name: "Food", icon: BurgerIcon },
    { name: "Sports", icon: BallIcon },
    { name: "Art", icon: ArtIcon },
    { name: "Party", icon: PartyIcon },
  ];

  // ---------- TEMPORARY PLACEHOLDER EVENTS ----------
  const events = [
    { id: 1, title: "Music Festival", category: "Music" },
    { id: 2, title: "Wine Tasting", category: "Drinks" },
    { id: 3, title: "Food Truck Rally", category: "Food" },
    { id: 4, title: "Volleyball Game", category: "Sports" },
    { id: 5, title: "Art Exhibit", category: "Art" },
    { id: 6, title: "Summer Party", category: "Party" },
    { id: 7, title: "Jazz Night", category: "Music" },
    { id: 8, title: "BBQ Bash", category: "Food" },
    { id: 9, title: "Basketball Finals", category: "Sports" },
  ];

  const filteredEvents = selectedCategory
    ? events.filter((e) => e.category === selectedCategory)
    : events;

  return (
    <Panels>
      {/* ---------- SEARCH + FILTER SECTION --------- */}
      <div className="flex flex-col w-full px-8 pt-6">
        {/* Search Bar */}
        <div className="bg-white flex items-center px-4 py-3 rounded-lg shadow-md w-full">
          <input
            type="text"
            placeholder="Find an Event"
            className="w-full focus:outline-none text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Filter Buttons + Icon Buttons */}
        <div className="flex items-center gap-3 w-full mt-4">
          <button className="bg-white text-gray-700 rounded-full px-4 py-1 shadow-sm hover:bg-gray-100">
            Near Me ▾
          </button>
          <button className="bg-white text-gray-700 rounded-full px-4 py-1 shadow-sm hover:bg-gray-100">
            Today ▾
          </button>

          {/* Icon Filters */}
          <div className="flex gap-2">
            {categories.map(({ name, icon }, i) => (
              <button
                key={i}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === name ? null : name
                  )
                }
                className={`bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:bg-gray-100 transition ${
                  selectedCategory === name
                    ? "ring-2 ring-[var(--color-vanilla)]"
                    : ""
                }`}
              >
                <img src={icon} alt={name} className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- SCROLLABLE EVENT GRID SECTION ---------- */}
      <div className="px-8 py-6 h-[70vh] overflow-y-auto"
        style={{
          scrollbarColor: '#ECFBFD transparent',
        }}
      >
        <div className="grid grid-cols-3 gap-4">
          {filteredEvents.map((event, i) => (
            <div
              key={i}
              className="bg-lightermoonstone rounded-xl shadow transition hover:scale-[1.02] flex flex-col overflow-hidden h-[20rem]"
            >
              {/* Event Image Placeholder */}
              <div className="bg-[var(--color-whiteblue)] h-3/5 w-full" />

              {/* Event Info */}
              <div className="flex flex-col justify-between flex-grow p-4 text-sm text-gray-800 bg-lightermoonstone">
                <div>
                  <p className="font-semibold text-[var(--color-bluewhite)]">Date and Time</p>
                  <p className="font-bold">{event.title}</p>
                  <p>{event.category}</p>
                </div>

                {/* Bookmark + External Link Icons */}
                <div className="flex justify-end mt-2 gap-2">
                  <img
                    src={ExternalLinkIcon}
                    alt="External Link"
                    className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
                  />
                  <img
                    src={BookmarkIcon}
                    alt="Bookmark"
                    className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Panels>
  );
};

export default SearchPage;
