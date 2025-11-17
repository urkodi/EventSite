import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Panels from '../features/Panels';

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
    title: 'React Dev Meetup',
    startTime: '6:00 PM',
    date: '2025-11-20',
    address: '123 Main St, Lincoln, RI',
    image: 'https://monsterspost.com/wp-content/uploads/2019/03/Images.jpg'
  },
  {
    id: 1,
    title: 'React Dev Meetup',
    startTime: '6:00 PM',
    date: '2025-11-20',
    address: '123 Main St, Lincoln, RI',
    image: 'https://monsterspost.com/wp-content/uploads/2019/03/Images.jpg'
  },
  {
    id: 1,
    title: 'React Dev Meetup',
    startTime: '6:00 PM',
    date: '2025-11-20',
    address: '123 Main St, Lincoln, RI',
    image: 'https://monsterspost.com/wp-content/uploads/2019/03/Images.jpg'
  },
  {
    id: 1,
    title: 'React Dev Meetup',
    startTime: '6:00 PM',
    date: '2025-11-20',
    address: '123 Main St, Lincoln, RI',
    image: 'https://monsterspost.com/wp-content/uploads/2019/03/Images.jpg'
  },
  {
    id: 1,
    title: 'React Dev Meetup',
    startTime: '6:00 PM',
    date: '2025-11-20',
    address: '123 Main St, Lincoln, RI',
    image: 'https://monsterspost.com/wp-content/uploads/2019/03/Images.jpg'
  }
 

  ]); // Replace with real data later
  const navigate = useNavigate();

  return (
    <Panels>
      <div className="px-6 mt-2 min-h-screen">
        <div className="text-3xl text-white font-bold mb-4">My Hosted Events</div>
        {hostedEvents.length === 0 ? (
          <div className="text-center mt-10">
            <h2 className="text-3xl font-bold text-white">You haven’t hosted any events yet</h2>
            <p className="text-white mt-2">
              Ready to organize your first event? Click below to get started!
            </p>
            <button
              onClick={() => navigate('/create-event')}
              className="mt-4 px-5 py-3 bg-vanilla text-moonstone font-semibold rounded-xl hover:bg-darkervanilla transition"
            >
              Create an Event!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-y-auto h-[72vh] overflow-x-hidden pr-8" 
              style={{ 
                scrollbarColor: "#E9CC73 transparent" 
                }}>
            {hostedEvents.map(event => (
              <div key={event.id} className="bg-white w-58 h-90 p-4 rounded-2xl shadow-md">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md mb-2" />
                <div className="bg-lightermoonstone/60 text-center text-sm font-semibold py-1 rounded mb-2">Hosted Event</div>
                <h2 className="text-xl font-bold mb-1">{event.title}</h2>
                <p className="text-sm text-gray-700"><strong></strong> {event.date} at {event.startTime}</p>
                <p className="text-sm text-gray-700"><strong></strong> {event.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-vanilla rounded-xl hover:bg-darkervcanilla font-semibold transition"
                >
                  View on Map
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </Panels>
  );
};

export default HostedEvents;
