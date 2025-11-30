import React, { useState } from 'react';
import Panels from '../features/Panels';
import EventBlock from '../components/EventBlock';

const initialBookmarkedEvents = [
  {
    eventId: '1',
    title: 'Music Festival',
    date: 'Oct 12, 2025 at 7:00 PM',
    address: 'AMP Amica Mutual Pavilion',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-971260876-1559600482.jpg',
    category: 'Music'
  },
  {
    eventId: '2',
    title: 'Computer Science Job Fair',
    date: 'Nov 3, 2025 at 10:00 AM',
    address: 'Boston Convention Center',
    image: 'https://jessup.edu/wp-content/uploads/2023/12/Programming-in-Computer-Science.jpg',
    category: 'Career'
  },
  {
    eventId: '3',
    title: 'Paint & Sip',
    date: 'Dec 5, 2025 at 1:00 PM',
    address: 'New York City, Central Park',
    image: 'https://assets.mainlinetoday.com/2024/02/wine-and-painting-AdobeStock_351266380.jpg',
    category: 'Art'
  },
  {
    eventId: '4',
    title: 'Cultural Festival',
    date: 'Dec 5, 2025 at 1:00 PM',
    address: 'New York City, NYC Bar',
    image: 'https://wjla.com/resources/media/6c0acf9b-3e14-4886-9115-92ac22d831f7-large16x9_worldculturefestival.png',
    category: 'Culture'
  },
];

const Bookmark = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState(initialBookmarkedEvents);

  const handleRemove = (eventId: string) => {
    const updated = bookmarkedEvents.filter(event => event.eventId !== eventId);
    setBookmarkedEvents(updated);
    
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
    const filteredBookmarks = bookmarks.filter((event: any) => event.eventId !== eventId);
    localStorage.setItem('bookmarkedEvents', JSON.stringify(filteredBookmarks));
  };

  return (
    <Panels>
      <div className="flex flex-col w-full px-8 mt-4 mb-1">
        <h1 className="font-bold text-white text-4xl px-2 mb-6">Bookmarked Events</h1>
        <div className="overflow-y-auto h-[calc(100vh-180px)] overflow-x-hidden pr-2"
          style={{
            scrollbarColor:"#E9CC73 transparent",
          }}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-2 mb-8">
            {bookmarkedEvents.length > 0 ? (
              bookmarkedEvents.map(event => (
                <EventBlock
                  key={event.eventId}
                  eventId={event.eventId}
                  imageUrl={event.image}
                  link="/event-details"
                  eventTitle={event.title}
                  eventDate={event.date}
                  eventAddress={event.address}
                  category={event.category}
                  isBookmarked={true}
                  onRemoveConfirm={handleRemove}
                />
              ))
            ) : (
              <p className="text-white italic opacity-70 col-span-full text-center">
                No bookmarked events yet.
              </p>
            )}
          </ul>
        </div>
      </div>
    </Panels>
  );
};

export default Bookmark;