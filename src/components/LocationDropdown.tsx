import { useState, useRef, useEffect } from "react";
import LocationSVG from "./icons/LocationSVG";
import MailSVG from "./icons/MailSVG";
import LocateSVG from "./icons/LocateSVG";
import { RadiusMap as Map } from "./Map";

function LocationDropdown() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: Event) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    async function reverseGeocode() {
      if (!location) {
        return;
      }

      const url = `${import.meta.env.VITE_BASE_URL}/geolocation/reverse-geocode?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}`
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();

        setInputValue(`${data.city}, ${data.region}`);
      }
    }

    reverseGeocode()
  }, [location])

  function handleGetLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position);
    })
  }

  return (
    <div className="relative flex items-center flex-1 px-4 py-3" ref={containerRef}>
      <LocationSVG width="20" height="20" className="text-darkermoonstone flex-shrink-0" />
      <input
        type="text"
        placeholder="Location"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="outline-none px-2 text-gray-600 text-lg bg-transparent w-full"
      />
      {isOpen && (
        <div className="absolute top-full left-0 right-0 m-3 bg-bluewhite rounded-xl shadow-lg z-10 overflow-hidden">
          <Map controls={false} lat={location?.coords.latitude} long={location?.coords.longitude} draggable={false} />
          <button onClick={handleGetLocation} className="flex bg-moonstone rounded-2xl m-4 p-2 text-white text-bold text-lg">
            <LocateSVG
              width="22"
              height="22"
              className="m-1 ml-2 font-bold"
            />
            <p>Locate Me</p>
          </button>
          <ul>
            {
              
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default LocationDropdown;