import React, { useState } from 'react';

const initialBookmarkedEvents = [
  {
    id: 1,
    title: 'Rhode Island College Internship',
    date: 'Oct 12, 2025 at 7:00 PM',
    location: 'Rhode Island College',
    image: 'https://www.golocalprov.com/cache/images/remote/https_s3.amazonaws.com/media.golocalprov.com/RIC_Anchormen_Logo_2019.png',
  },
  {
    id: 2,
    title: 'Computer Science Job Fair',
    date: 'Nov 3, 2025 at 10:00 AM',
    location: 'Boston Convention Center',
    image: 'https://jessup.edu/wp-content/uploads/2023/12/Programming-in-Computer-Science.jpg',
  },
  {
    id: 3,
    title: 'Paint & Sip',
    date: 'Dec 5, 2025 at 1:00 PM',
    location: 'New York City, NYC Bar',
    image: 'https://assets.mainlinetoday.com/2024/02/wine-and-painting-AdobeStock_351266380.jpg'
  },
];

const Bookmark = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState(initialBookmarkedEvents);
  const [confirmId, setConfirmId] = useState<number | null>(null);

  const handleRemove = (id: number) => {
    const updated = bookmarkedEvents.filter(event => event.id !== id);
    setBookmarkedEvents(updated);
    setConfirmId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-moonstone">Bookmarked Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookmarkedEvents.map(event => (
          <div
            key={event.id}
            className="bg-lightermoonstone text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="text-sm mb-2">{event.date}</p>
            <h2 className="text-xl font-semibold mb-1">{event.title}</h2>
            <p className="text-sm text-white/80 mb-4">{event.location}</p>
            <button
              onClick={() => setConfirmId(event.id)}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
            >
              Remove
            </button>
            {confirmId === event.id && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center rounded-xl">
                <div className="bg-white text-black p-4 rounded shadow-lg text-center">
                  <p className="mb-4">Are you sure you want to remove this event?</p>
                  <button
                    onClick={() => handleRemove(event.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                  >
                    Yes, remove
                  </button>
                  <button
                    onClick={() => setConfirmId(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
