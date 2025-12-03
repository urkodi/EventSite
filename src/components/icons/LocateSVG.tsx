import React from "react";

function LocateSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // allows width, height, className, onClick, etc.
    >
      <path d="M2 12h3m14 0h3M12 2v3m0 14v3" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

export default LocateSVG;