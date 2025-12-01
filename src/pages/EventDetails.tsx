import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Panels from "../features/Panels";

import BookmarkSVG from "../components/icons/BookmarkSVG";
import ShareSVG from "../components/icons/ShareSVG";

import { Link } from 'react-router-dom';

type EventData = {
  eventId: string;
  imageUrl: string;
  eventTitle: string;
  eventDate: string;
  eventTime?: string;
  eventAddress: string;
  category: string;
  description?: string;
  link?: string;
  price?: string | number;
};

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState<EventData | null>(null);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!event) return;

    const saved = JSON.parse(localStorage.getItem("bookmarkedEvents") || "[]");
    const exists = saved.some((ev: any) => ev.eventId === event.eventId);
    setIsBookmarked(exists);
  }, [event]);

  const mockEvents: EventData[] = [
    {
      eventId: "1",
      imageUrl:
        "https://images.pexels.com/photos/20804701/pexels-photo-20804701.jpeg?cs=srgb&dl=pexels-agrosales-20804701.jpg&fm=jpg",
      eventTitle: "Duck Hunt",
      eventDate: "October 30th 2025",
      eventAddress: "44 Hummingbird Ln",
      category: "Food",
      eventTime: "7:00 PM",
      description: "Join us for a fun outdoor duck hunt event with friends!",
      link: "/events/1",
      price: "$25"
    },
    {
      eventId: "2",
      imageUrl:
        "https://www.stockvault.net/data/2020/01/18/272608/thumb16.jpg",
      eventTitle: "Art Expo",
      eventDate: "October 30th 2025",
      eventAddress: "44 Hummingbird Ln",
      category: "Art",
      eventTime: "5:00 PM",
      description: "A creative display of modern and classic artwork.",
      link: "/events/2",
      price: "FREE"
    },
  ];

  useEffect(() => {
    const found = mockEvents.find((ev) => ev.eventId === eventId);
    setEvent(found ?? null);
  }, [eventId]);

  const handleBookmark = () => {
    if (!event) return;

    const newState = !isBookmarked;
    setIsBookmarked(newState);

    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedEvents") || "[]");

    if (newState) {
      bookmarks.push(event);
    } else {
      const filtered = bookmarks.filter((ev: any) => ev.eventId !== event.eventId);
      localStorage.setItem("bookmarkedEvents", JSON.stringify(filtered));
      return;
    }

    localStorage.setItem("bookmarkedEvents", JSON.stringify(bookmarks));
  };

  const handleShare = async () => {
    if (!event) return;

    const shareUrl = `${window.location.origin}/events/${event.eventId}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  const handleMapClick = () => {
    setShowMap(true);
    setMapPosition({ x: 0, y: 0 });
  };

  const handleCloseMap = () => setShowMap(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - mapPosition.x,
      y: e.clientY - mapPosition.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setMapPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!event) {
    return (
      <Panels>
        <div className="p-6 text-white">Loading...</div>
      </Panels>
    );
  }

  return (
    <Panels>
      <div className="flex flex-col w-full h-full text-white p-8 gap-6 overflow-y-auto">

        <h1 className="font-bold text-4xl px-6 py-4 bg-moonstone rounded-2xl shadow-md mb-4">
          Event Details
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          <div className="relative w-[50%] h-[320px]">
            <img
              src={event.imageUrl}
              alt={event.eventTitle}
              className="w-full h-full object-cover rounded-2xl border-4 border-bluewhite shadow-md"
            />
          </div>

          <div className="relative bg-bluewhite text-moonstone p-6 rounded-xl shadow-md w-[60%] h-full flex flex-col gap-3">
            <h1 className="text-4xl font-bold">{event.eventTitle}</h1>

            <div className="py-1 bg-vanilla rounded-lg"></div>

            <p className="text-xl font-semibold">
              {event.eventDate} {event.eventTime ? `• ${event.eventTime}` : ""}
            </p>
            
            <p className="text-lg">{event.eventAddress}</p>
            
            <p className="italic text-md">Category: {event.category}</p>
            <button
                onClick={handleMapClick}
                className="px-3 py-2 w-[100px] bg-vanilla rounded-full text-lg font-semibold hover:bg-darkervanilla absolute bottom-6 left-6 transition"
              >
                Map
              </button>
              
            <div className="absolute bottom-6 right-6 flex flex-col gap-4">
              <button onClick={handleBookmark} className="text-moonstone">
                <BookmarkSVG width="2em" height="2em" filled={isBookmarked} />
              </button>

              <button onClick={handleShare} className="text-moonstone relative">
                <ShareSVG width="2em" height="2em" />
                {showCopied && (
                  <span className="absolute -top-6 right-0 bg-moonstone text-white text-xs px-2 py-1 rounded">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          
        </div>

        {event.description && (
          <div className="relative bg-bluewhite text-moonstone p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-2">About this event</h2>
            <div className="h-1 bg-vanilla rounded-lg mb-1 w-full"></div>

            {event.price && (
              <p className="text-lg font-semibold text-moonstone mb-2">
                Price: <span className="text-moonstone">{event.price}</span>
              </p>
            )}

            <p className="mb-16">{event.description}</p>

            <div className="absolute bottom-8 right-6">
              <Link
                //ask whether to add in this way 
                //to={`/checkout/${event.eventId}`}
                to="/checkout"
                className="py-3 px-4 bg-lightermoonstone text-white font-semibold rounded-full hover:bg-moonstone transition"
              >
                Book Event!
              </Link>
            </div>
          </div>
        )}


        <button
          onClick={() => navigate(-1)}
          className="py-3 bg-vanilla text-moonstone font-semibold rounded-full hover:bg-darkervanilla transition w-[120px]"
        >
          ← Back
        </button>
      </div>

      {showMap && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl shadow-2xl w-[80vw] h-[70vh] max-w-2xl flex flex-col"
            style={{
              transform: `translate(${mapPosition.x}px, ${mapPosition.y}px)`
            }}
          >
            <div
              className="flex justify-between items-center p-4 bg-bluewhite cursor-grab active:cursor-grabbing rounded-t-2xl"
              onMouseDown={handleMouseDown}
            >
              <div>
                <h3 className="font-bold text-lg">{event.eventTitle}</h3>
                <p className="text-sm text-gray-600">{event.eventAddress}</p>
              </div>
              <button
                onClick={handleCloseMap}
                className="text-moonstone font-semibold"
              >
                ✕
              </button>
            </div>

            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                event.eventAddress
              )}&output=embed`}
              className="w-full h-full rounded-b-2xl"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </Panels>
  );
}

export default EventDetails;
