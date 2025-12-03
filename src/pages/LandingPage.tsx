import { Link } from "react-router-dom";
import LocationDropdown from "../components/LocationDropdown.tsx";
// icons
import eventlogo from "../assets/icons/eventlogo.svg";

import landingBg from "../assets/images/LandingBg.png";
import LocationSVG from "../components/icons/LocationSVG";
import SearchSVG from "../components/icons/SearchSVG";
import HelpSVG from "../components/icons/HelpSVG.tsx";
import FaqSVG from "../components/icons/FaqSVG.tsx";
import ContactSVG from "../components/icons/ContactSVG.tsx";
import CategoryCarousel from "../components/CategoryCarousel.tsx";
import BrowseSVG from "../components/icons/BrowseSVG.tsx";
import HomeSVG from "../components/icons/HomeSVG.tsx";

function LandingPage() {
  return (
    <div className="item-center max-h-screen w-full flex flex-col overflow-x-hidden bg-linear-to-b from-whiteblue to-lightermoonstone text-gray-800">
      <header className="w-screen h-auto bg-moonstone p-4 shadow-md">
        <nav className="flex items-center justify-between">
          <section className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img
                src={eventlogo}
                alt="Event Logo"
                className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0"
              />
              <span className="text-white font-bold text-3xl transition-all hover:text-lightermoonstone hover:scale-110 hover:-translate-y-0">
                Whist
              </span>
            </a>
            <Link
              to="/contact-us"
              className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone ml-6"
            >
              <FaqSVG width="22" height="22" className="m-1 ml-2 font-bold" />
              <p>Faq</p>
            </Link>
            <Link
              to="/help"
              className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone ml-2"
            >
              <HelpSVG width="22" height="22" className="m-1 ml-2 font-bold" />
              <p>Help</p>
            </Link>
            <Link
              to="/contact-us"
              className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone ml-2"
            >
              <ContactSVG
                width="22"
                height="22"
                className="m-1 ml-2 font-bold"
              />
              <p>Contact Us</p>
            </Link>
          </section>
          <section className="mr-3 flex gap-5 items-center">
            <Link
              to="/login"
              className="font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110"
            >
              Sign In
            </Link>
            <Link
              to="/create-account"
              className="font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110 bg-darkermoonstone px-4 py-2 rounded-full shadow-md"
            >
              Create Account
            </Link>
          </section>
        </nav>
      </header>

      <main
        className="flex-1 flex flex-col h-fit items-center justify-start px-6"
        style={{
          scrollbarColor: "#4C9DB0 transparent",
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

          <div className="flex justify-between items-start w-full">
            {/*  Welcome part of landing page
            <div className="flex-1 flex flex-col items-start text-left ml-10">
              <h1 className="text-6xl font-bold text-moonstone mb-2 leading-tight drop-shadow-md">
                Welcome To
              </h1>
              <h1 className="text-7xl font-bold text-darkermoonstone mb-2 leading-tight drop-shadow-md">
                Whist
              </h1>
            </div> */}

            <div className="flex-1 ml-16">
              <h1 className="w-fit min-w-0 text-5xl text-center font-bold text-darkermoonstone/90 mb-2 leading-tight drop-shadow-md">
                Experience More, Stress Less
              </h1>
              <p className="w-fit min-w-0 text-moonstone text-center font-bold text-3xl mb-6 drop-shadow-md">
                Discover events and experiences that match your interests.
              </p>
              <div className="w-fit min-w-0 flex items-center max-w-4xl bg-white rounded-full shadow-md">
                <div className="flex items-center flex-1 px-4 py-3">
                  <SearchSVG
                    width="20"
                    height="20"
                    className="text-darkermoonstone"
                  />
                  <input
                    type="text"
                    placeholder="Search events"
                    className="outline-none px-2.5 text-gray-600 bg-transparent"
                  />
                </div>

                <div className="h-6 w-px bg-gray-300" />
                <LocationDropdown></LocationDropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full">
          <CategoryCarousel></CategoryCarousel>
        </div>
        <section className="w-full flex flex-row justify-center items-start md:gap-16 px-12 mb-20 max-w-7xl lg:gap-32">
          <section className="flex flex-col w-[50%]">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-30 py-3 rounded-full mb-6 shadow-xl self-center text-center">
              How It Works
            </h2>

            <div className="flex gap-8 justify-center flex-wrap">
              {/* Info on how the website works */}
              <div
                className="w-max overflow-x-scroll"
                style={{
                  scrollbarColor: "#ECFBFD transparent",
                }}
              >
                <div className="flex gap-7 w-max px-4 py-2">
                  <div className="w-40 h-40 bg-white rounded-2xl">
                    <p className="text-moonstone font-bold px-3 py-3 text-center">
                      Log in or create an account for a more personalized
                      experience.
                    </p>
                    <div className="mx-auto w-[50%] rounded-xl h-2 bg-vanilla"></div>
                  </div>
                  <div className="w-40 h-40 bg-white rounded-2xl">
                    <p className="text-moonstone font-bold px-3 py-3 text-center">
                      Browse events freely without an account.
                    </p>
                    <div className="mx-auto w-[50%] rounded-xl h-2 bg-vanilla"></div>
                  </div>
                  <div className="w-40 h-40 bg-white rounded-2xl">
                    <p className="text-moonstone font-bold px-3 py-3 text-center">
                      Find events happening near you or further away.
                    </p>
                    <div className="mx-auto w-[50%] rounded-xl h-2 bg-vanilla"></div>
                  </div>
                  <div className="w-40 h-40 bg-white rounded-2xl">
                    <p className="text-moonstone font-bold px-3 py-3 text-center">
                      Sign in to host your own events or sign up for an event.
                    </p>
                    <div className="mx-auto w-[50%] rounded-xl h-2 bg-vanilla"></div>
                  </div>
                  <div className="w-40 h-40 bg-white rounded-2xl">
                    <p className="text-moonstone font-bold px-3 py-3 text-center">
                      Create your own profile and receive notifications on
                      events.
                    </p>
                    <div className="mx-auto w-[50%] rounded-xl h-2 bg-vanilla"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col w-[50%]">
            <h2 className="bg-moonstone text-whiteblue font-semibold text-xl px-30 py-3 rounded-full mb-6 shadow-lg self-center text-center">
              Why Join?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg w-full py-50 flex flex-col">
              <p className="text-moonstone ml-5">
                Insert content here blah blah blah someone help me...
              </p>
            </div>
          </section>
        </section>
      </main>

      <footer className="flex bg-moonstone text-white py-10">
        <div className="max-w-9xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <a href="/" className="flex items-center gap-2">
                <img
                  src={eventlogo}
                  alt="Event Logo"
                  className="text-white h-10"
                />
                <span className="text-white font-bold text-3xl transition-all hover:text-lightermoonstone hover:translate-y-0">
                  Whist
                </span>
              </a>
              <p className="text-sm opacity-80">
                Discover events, explore local experiences, and connect with
                your community.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 ml-8">Links</h3>
              <ul className="space-y-2 text-sm ml-8">
                <li>
                  <Link 
                    to="/homepage"
                    className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone"
                  >
                    <HomeSVG
                      width="22"
                      height="22"
                      className="mr-1 font-bold"
                    />
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/browse"
                    className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone"
                  >
                    <BrowseSVG
                      width="22"
                      height="22"
                      className="mr-1 font-bold"
                    />
                    <p>Browse</p>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/help"
                    className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone"
                  >
                    <HelpSVG
                      width="22"
                      height="22"
                      className="mr-1 font-bold"
                    />
                    <p>Help</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone"
                  >
                    <ContactSVG
                      width="22"
                      height="22"
                      className="mr-1 font-bold"
                    />
                    <p>Contact Us</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:scale-110 transition">
                  <Link
                    to="/contact-us"
                    className="flex items-center align-middle font-bold hover:text-bluewhite transition-all text-lightermoonstone"
                  >
                    <ContactSVG
                      width="22"
                      height="22"
                      className="mr-1 font-bold"
                    />
                  </Link>
                </a>
                <a href="#" className="hover:scale-110 transition">
                </a>
                <a href="#" className="hover:scale-110 transition">
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
            © {new Date().getFullYear()} Whist. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
