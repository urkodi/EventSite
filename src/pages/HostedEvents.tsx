import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type HostedEvent = {
  id: number;
  title: string;
  startTime: string;
  date: string;
  address: string;
  location: string;
  image: string;
};

const HostedEvents = () => {
  const [hostedEvents] = useState<HostedEvent[]>([]); // Replace with real data later
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-moonstone min-h-screen">
      {hostedEvents.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold text-gray-800">You haven’t hosted any events yet</h2>
          <p className="text-gray-600 mt-2">
            Ready to organize your first event? Click below to get started!
          </p>
          <button
            onClick={() => navigate('/create-event')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create an Event
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hostedEvents.map(event => (
            <div key={event.id} className="bg-white text-gray-800 p-4 rounded-xl shadow-md">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <div className="bg-[#e6f7ff] text-center text-sm font-semibold py-1 rounded mb-2">Hosted Event</div>
              <h2 className="text-xl font-bold text-[#003366] mb-1">{event.title}</h2>
              <p className="text-sm"><strong>Date:</strong> {event.date} at {event.startTime}</p>
              <p className="text-sm"><strong>Location:</strong> {event.location}</p>
              <p className="text-sm"><strong>Address:</strong> {event.address}</p>
              <p className="text-sm"><strong>Event ID:</strong> #{event.id}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View on Map
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostedEvents;
