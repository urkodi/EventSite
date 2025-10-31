import React from "react";
import { Link } from "react-router-dom";

// icons
import eventLogo from "./assets/icons/eventlogo.svg";
import ArtIcon from "./assets/icons/palette.svg";
import SportsIcon from "./assets/icons/volleyball.svg";
import MicIcon from "./assets/icons/mic-vocal.svg";
import PartyIcon from "./assets/icons/party.svg";
import WineIcon from "./assets/icons/wine.svg";
import BurgerIcon from "./assets/icons/hamburger.svg";
import SearchIcon from "./assets/icons/SearchMoonstone.svg";

// hero background image
import heroBg from "./assets/icons/hero-bg.jpg";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-bluewhite to-moonstone text-gray-800">
      {/* ---------- HEADER ---------- */}
      <header className="flex justify-between items-center px-10 py-4 bg-moonstone shadow-md">
        <img
          src={eventLogo}
          alt="EventSite Logo"
          className="h-10 w-auto object-contain cursor-pointer"
        />
        <div className="space-x-8 text-sm font-medium text-white">
          <button className="hover:text-whiteblue transition">Help</button>
          <button className="hover:text-whiteblue transition">Sign In</button>
        </div>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      <main
        className="flex-1 flex flex-col items-center justify-start pt-0 px-6 overflow-y-auto"
        style={{
          scrollbarColor:
            "var(--color-bluewhite) var(--color-lightermoonstone)", // thumb | track
        }}
      >
        {/* ---------- HERO SECTION ---------- */}
        <div
          className="w-screen -mx-6 flex items-center justify-center mb-10 px-8 py-24 shadow-lg relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "crisp-edges",
            backgroundAttachment: "fixed", // optional parallax effect
          }}
        >
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-moonstone/50 via-moonstone/40 to-transparent"></div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="text-6xl font-bold text-white mb-4 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Experience More
              <br />
              Stress Less
            </h1>
            <p className="text-white text-lg mb-6 max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Discover events and experiences that match your interests.
            </p>

            <div className="flex items-center bg-white border border-gray-300 rounded-xl px-5 py-3 shadow-lg w-full max-w-3xl backdrop-blur-sm bg-opacity-90">
              <input
                type="text"
                placeholder="Search by location, date, or category"
                className="flex-grow outline-none text-gray-700 text-lg bg-transparent"
              />
              <img
                src={SearchIcon}
                alt="Search"
                className="w-8 h-8 ml-3 opacity-60 cursor-pointer hover:opacity-90 transition"
              />
            </div>
          </div>
        </div>

        {/* ---------- HOW IT WORKS + WHY JOIN ---------- */}
        <section className="w-full flex justify-center items-start gap-16 px-12 mb-20 max-w-7xl">
          {/* HOW IT WORKS */}
          <section className="flex flex-col flex-1 items-start">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-30 py-3 rounded-full mb-6 shadow-xl self-center text-center">
              How It Works
            </h2>
            <div className="flex gap-8 justify-start flex-wrap">
              <div className="w-66 h-56 bg-lightermoonstone rounded-2xl shadow-lg"></div>
              <div className="w-66 h-56 bg-lightermoonstone rounded-2xl shadow-lg"></div>
              <div className="w-full h-56 bg-lightermoonstone rounded-2xl shadow-lg"></div>
            </div>
          </section>

          {/* WHY JOIN */}
          <section className="flex flex-col flex-1 items-start">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-30 py-3 rounded-full mb-6 shadow-lg self-center text-center">
              Why Join?
            </h2>
            <div className="w-full h-[480px] bg-lightermoonstone rounded-2xl shadow-lg px-8 py-10 text-white flex flex-col justify-start overflow-hidden"></div>
          </section>
        </section>

        {/* ---------- EXPLORE CATEGORIES ---------- */}
        <div className="w-[90%] ml-auto mr-7 mb-16">
          <section className="flex flex-col items-start">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-lg px-30 py-2 rounded-full mb-6 shadow-lg self-center text-center">
              Explore Categories
            </h2>
            <div className="flex gap-10 flex-wrap">
              {[
                { name: "Art", icon: ArtIcon },
                { name: "Sports", icon: SportsIcon },
                { name: "Concerts", icon: MicIcon },
                { name: "Parties", icon: PartyIcon },
                { name: "Drinks", icon: WineIcon },
                { name: "Food", icon: BurgerIcon },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="w-40 h-40 bg-lightermoonstone rounded-lg flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-10 h-10 mb-2 object-contain"
                  />
                  <span className="text-sm font-medium text-white">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
