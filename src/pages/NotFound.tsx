import React from "react";
import { useNavigate } from "react-router-dom";
import HelpDuck from "../assets/images/HelpDuck.png";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-10 px-4">

      {/* Main Card */}
      <div className="bg-lightermoonstone rounded-[32px] shadow-xl
                      max-w-6xl w-full py-12 px-10 flex flex-col items-center">

        {/* Decorative top bar */}
        <div className="w-200 h-2 rounded-full bg-vanilla mb-6"></div>

        {/* Title */}
        <h1 className="text-9xl font-extrabold text-[#305B71] tracking-wide">
          404
        </h1>
        <p className="text-4xl text-[#305B71] mt-2 font-medium"> 
          Page Not Found
        </p>

        {/* Duck Placeholder */}
        <div className="relative mt-10 w-200 h-75">
  <img 
    src={HelpDuck} 
    alt="duck"
    className="w-full h-full object-contain rounded-2xl"
  />
</div>


        {/* Message */}
        <p className="text-xl font-bold text-[#305B71] mt-8 text-center max-w-lg leading-relaxed">
          Oops! Looks like we couldn't find the page you were looking for.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-moonstone text-white px-7 py-3 
                     rounded-xl shadow-md hover:bg-moonstone transition
                     font-semibold"
        >
          Back to Home
        </button>

        
      </div>
    </div>
  );
};

export default NotFound;
