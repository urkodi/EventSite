import { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/images/GoogleLogo.png";
import FacebookLogo from "../assets/images/FacebookLogo.png";
import AppleLogo from "../assets/images/AppleLogo.png";
import eventlogo from "../assets/images/eventlogo.png";
import useUserStore from "../lib/userStore";

import { Link } from "react-router-dom";

function LoginPage() {
  const { setUser } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    setLoading(false);

    if (!email.trim() || !password.trim()) {
      setError("Please fill out both fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
        method: "post",
        credentials: "include",
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    });

    setLoading(false);

    if (res.ok) {
        let body = await res.json();

        setUser(body);
        navigate("/")
    }
  };

  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <header className="w-screen bg-moonstone p-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
          </a>
          <Link to="/help"
              className="mr-3 font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Help
          </Link>
        </div>
      </header>

      <div className="overflow-y-scroll"
            style={{
                scrollbarColor: '#4C9DB0 transparent',
            }}>

      <main className="flex flex-col items-center justify-center mt-10 mb-10 sm:mt-30 sm:mb-20">
                <div className="w-full max-w-lg rounded-2xl sm:scale-120 p-10 bg-lightermoonstone shadow-md">
          <h2 className="font-bold mb-6 text-center text-5xl text-moonstone">
            Log In
          </h2>

          <div className="mx-auto w-[30%] rounded-xl h-2 bg-vanilla my-4"></div>

          {error && (
            <p className="text-cyan-600 text-center mb-4 font-semibold">{error}</p>
          )}

          {/* User Inputs */}
          <form className="flex flex-col mb-6" onSubmit={handleLogin}>
            <fieldset className="flex flex-col mt-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="rounded-lg p-2 bg-white text-moonstone focus:outline-vanilla"
              />
            </fieldset>

            <fieldset className="flex flex-col mt-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="rounded-lg p-2 bg-white text-moonstone focus:outline-vanilla"
              />
            </fieldset>

            <div className="mt-2 flex justify-end">
              <a
                href="/forgot-password"
                className="text-white text-[13px] underline"
              >
                Forgot Password?
              </a>
            </div>

            <div className="mt-8 w-auto h-px bg-moonstone flex items-center relative">
              <span className="px-3 bg-lightermoonstone text-moonstone relative mx-auto">
                <div className="flex justify-center items-center py-2">
                  <button
                    className="px-10 py-2 text-[20px] font-bold rounded-full bg-moonstone text-bluewhite shadow-md cursor-pointer hover:ring-3 hover:ring-vanilla"
                  >
                    Log In
                  </button>
                </div>
              </span>
            </div>

            {/* Sign up link */}
            <div className="mt-10 text-center text-moonstone">
              Don't have an account? Create one{" "}
              <a
                href="/create-account"
                className="text-white font-bold underline cursor-pointer"
              >
                here.
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
  );
};

export default LoginPage;
