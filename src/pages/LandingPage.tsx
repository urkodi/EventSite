import { Link } from "react-router-dom";

// icons
import eventlogo from "../assets/icons/eventlogo.svg";
import ArtIcon from "../assets/icons/palette.svg";
import SportsIcon from "../assets/icons/volleyball.svg";
import MicIcon from "../assets/icons/mic-vocal.svg";
import PartyIcon from "../assets/icons/party.svg";
import WineIcon from "../assets/icons/wine.svg";
import BurgerIcon from "../assets/icons/hamburger.svg";
import SearchIcon from "../assets/icons/SearchMoonstone.svg";

import landingBg from "../assets/images/landingBg.png"

function LandingPage() {
  return (
    <div className="max-h-screen w-full flex flex-col overflow-x-hidden bg-gradient-to-b from-whiteblue to-lightermoonstone text-gray-800">
      <header className="w-screen h-auto bg-moonstone p-4 shadow-md">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                    </a>
                     <div className="mr-3 flex gap-5">
                      <Link to="/login"
                        className="font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Sign In
                      </Link>
                        <Link to="/create-account"
                        className="font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Create Account
                      </Link>
                      <Link to="/help"
                        className="font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Help
                      </Link>
                  </div>
                </div>
            </header>

      <main
        className="flex-1 flex flex-col items-center justify-start px-6 overflow-y-scroll"
        style={{
          scrollbarColor: '#4C9DB0 transparent',
        }}
      >
        <div
          className="w-full flex items-start justify-start mb-10 px-8 py-24 shadow-lg relative bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: `url(${landingBg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundAttachment: "fixed", 
          }}
        >          
        <div className="absolute inset-0 bg-gradient-to-b from-whiteblue via-whiteblue/25 to-transparent"></div>

          <div className="relative flex flex-col items-start text-left ml-10">
            <h1 className="text-6xl font-bold text-moonstone mb-2 leading-tight drop-shadow-md">
              Welcome To
            </h1>

            <h1 className="text-6xl font-bold text-moonstone/75 mb-2 leading-tight drop-shadow-md">
              Whist
            </h1>

          </div>

          <div className="absolute right-20 w-full max-w-[45%]">
            <h1 className="text-4xl text-center font-bold text-moonstone/90 mb-2 leading-tight drop-shadow-md">
              Experience More, Stress Less
            </h1>
            <p className="text-moonstone text-center font-bold text-lg mb-6 drop-shadow-md">
              Discover events and experiences that match your interests.
            </p>
            <div className="flex items-center bg-white rounded-2xl px-3 py-3 shadow-lg backdrop-blur-sm bg-opacity-90">
              <img
                src={SearchIcon}
                alt="Search"
                className="w-8 h-8 ml-3 opacity-60 cursor-pointer hover:opacity-90 transition mx-2"
              />
              <input
                type="text"
                placeholder="Search by location, date, or category"
                className="flex-grow outline-none text-gray-500 text-lg bg-transparent"
              />
            </div>
          </div>
        </div>

        <section className="w-full flex justify-center items-start gap-16 px-12 mb-20 max-w-7xl">

          <section className="flex flex-col w-[50%]">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-30 py-3 rounded-full mb-6 shadow-xl self-center text-center">
              How It Works
            </h2>
            
            <div className="flex gap-8 justify-center flex-wrap">
                <div className="w-max overflow-x-scroll"
                  style={{
                          scrollbarColor: '#ECFBFD transparent',
                      }}>
                  <div className="flex gap-7 w-max px-4 py-2">
                      <div className="w-40 h-40 bg-white rounded-2xl"></div>
                      <div className="w-40 h-40 bg-white rounded-2xl"></div>
                      <div className="w-40 h-40 bg-white rounded-2xl"></div>
                      <div className="w-40 h-40 bg-white rounded-2xl"></div>
                      <div className="w-40 h-40 bg-white rounded-2xl"></div>
                  </div>
                </div>

                <section className="flex flex-col items-center">
                  <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-25 py-3 rounded-full mb-6 shadow-xl self-center text-center">
                    Explore Categories
                  </h2>
                  <div className="w-[50%] overflow-x-scroll"
                  style={{
                          scrollbarColor: '#ECFBFD transparent',
                      }}>
                    <div className="flex gap-7 w-max px-4 py-2">
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
                        className="w-40 h-40 bg-white rounded-3xl flex flex-col items-center justify-center hover:scale-105 transition"
                      >
                        <img
                          src={cat.icon}
                          alt={cat.name}
                          className="w-10 h-10 mb-2 object-contain"
                        />
                        <span className="text-sm font-medium text-moonstone">
                          {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  </div>
                </section>
              </div>
            </section>

          <section className="flex flex-col w-[50%]">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-30 py-3 rounded-full mb-6 shadow-lg self-center text-center">
              Why Join?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg w-full py-50 text-white flex flex-col"></div>
          </section>
        </section>

      </main>
    </div>
  );
};

export default LandingPage;
