import React from "react";
import { Link } from "react-router-dom";
import eventLogo from "C:/Users/ur1na/OneDrive/Desktop/Source/EventSite/src/assets/icons/eventlogo.svg"; 

const LandingPage: React.FC = () => {
  return (
    // ⬇️ Changed bg-white → gradient so it applies sitewide
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-bluewhite to-vanilla text-gray-800 overflow-y-auto">
      {/* ---------- NAVBAR ---------- */}
      {/* Header stays transparent — now it sits on the gradient */}
      <header className="flex justify-between items-center px-10 py-4 bg-transparent">
        <img
          src={eventLogo}
          alt="EventSite Logo"
          className="h-10 w-auto object-contain cursor-pointer"
        />
        <div className="space-x-8 text-sm font-medium">
          <button className="text-gray-600 hover:text-moonstone">Help</button>
          <button className="text-gray-600 hover:text-moonstone">Sign In</button>
        </div>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      {/* ⬇️ Removed gradient here (it’s already applied to the wrapper) */}
      <main className="flex-1 flex flex-col items-center justify-start py-6 px-6">
        {/* HERO */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-5xl font-extrabold text-moonstone mb-4 leading-tight">
            Experience More,<br />Stress Less
          </h1>
          <p className="text-gray-600 mb-6 text-lg max-w-md">
            Discover events and experiences that match your interests.
          </p>
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-5 py-3 shadow-md w-96">
            <input
              type="text"
              placeholder="Search by location, date, or category"
              className="flex-grow outline-none text-gray-700 text-lg"
            />
            <span className="text-gray-400 text-xl ml-2">🔍</span>
          </div>
        </div>

        {/* MAIN SECTIONS */}
        <div className="flex justify-between items-start w-[85%] mx-auto">
          {/* HOW IT WORKS */}
          <section className="flex flex-col items-start">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-lg px-43 py-1 rounded-full mb-4 shadow-lg">
              How It Works
            </h2>
            <div className="flex gap-4">
              <div className="w-36 h-36 bg-lightermoonstone rounded-lg shadow-lg"></div>
              <div className="w-36 h-36 bg-lightermoonstone rounded-lg shadow-lg"></div>
              <div className="w-36 h-36 bg-lightermoonstone rounded-lg shadow-lg"></div>
            </div>
          </section>

          {/* WHY JOIN */}
          <section className="flex flex-col items-start">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-lg px-35 py-1 rounded-full mb-4 shadow-sm">
              Why Join?
            </h2>
            <div className="w-96 h-64 bg-lightermoonstone rounded-xl shadow-md px-6 py-10 text-white flex flex-col justify-start overflow-hidden">

            </div>
          </section>
        </div>

        {/* EXPLORE CATEGORIES */}
        <div className="w-[85%] mx-auto mt-10">
          <section className="flex flex-col items-start">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-lg px-40 py-1 rounded-full mb-4 shadow-sm">
              Explore Categories
            </h2>
            <div className="flex gap-6">
              {["Art", "Sports", "Concerts"].map((cat) => (
                <div
                  key={cat}
                  className="w-36 h-36 bg-lightermoonstone rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
                >
                  <span className="text-3xl mb-2">
                    {cat === "Art" ? "🎨" : cat === "Sports" ? "🏀" : "🎤"}
                  </span>
                  <span className="text-sm font-medium text-white">{cat}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ---------- FOOTER ---------- */}
      {/* ⬇️ Transparent footer to blend with gradient */}
      <footer className="text-center py-3 text-xs text-gray-500 border-t border-transparent bg-transparent">
        © 2025 EventSite —{" "}
        <Link to="/" className="text-moonstone hover:underline">
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;

