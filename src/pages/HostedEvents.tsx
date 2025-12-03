// src/pages/HostedEvents.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Panels from "../features/Panels";
import EventBlock from "../components/EventBlock";

type HostedEvent = {
  id: number;
  title: string;
  startTime: string;
  date: string;
  address: string;
  image: string;
};

const HostedEvents = () => {
  const [hostedEvents] = useState<HostedEvent[]>([
    {
      id: 1,
      title: "Catering Event",
      startTime: "6:00 PM",
      date: "2025-11-20",
      address: "123 Main St, Lincoln, RI",
      image: "https://www.shelter-structures.com/wp-content/uploads/2025/07/Tent-for-Outdoor-Events.webp",
    },
  ]);

  const navigate = useNavigate();

  return (
    <Panels>
      <div className="px-4 mt-2 min-h-screen">
        {hostedEvents.length === 0 ? (
          <div className="text-center mt-10">
            <h2 className="text-3xl font-bold text-white">
              You haven’t hosted any events yet
            </h2>
            <p className="text-white mt-2">
              Ready to organize your first event? Click below to get started!
            </p>
            <button
              onClick={() => navigate("/create-event")}
              className="mt-4 px-5 py-3 bg-vanilla text-moonstone font-semibold rounded-xl hover:bg-darkervanilla transition"
            >
              Create an Event!
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="text-3xl text-white font-bold mb-4 ml-2">
              My Hosted Events
            </div>

            {/* MATCHES SEARCH PAGE GRID FORMAT */}
            <div
              className="overflow-y-auto h-[72vh] overflow-x-hidden"
              style={{ scrollbarColor: "#E9CC73 transparent" }}
            >
              <div
                  className="mt-2 grid gap-4 px-2"
                  style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
                  }}
                >

                {hostedEvents.length > 0 ? (
                  hostedEvents.map((event) => (
                    <EventBlock
                      key={event.id}
                      eventId={String(event.id)}
                      imageUrl={event.image}
                      link={`/events/${event.id}`}
                      eventDate={`${event.date}`}
                      eventTime={event.startTime}
                      eventTitle={event.title}
                      eventAddress={event.address}
                      category="Hosted Event"
                      showMapButton={true}
                      hideBookmark={true}
                    />
                  ))
                ) : (
                  <p className="text-white italic opacity-70 col-span-full">
                    No hosted events found.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Panels>
  );
};

export default HostedEvents;
