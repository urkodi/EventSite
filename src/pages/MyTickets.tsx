import React, { useState } from 'react';
import Panels from "../features/Panels";
import EventBlock from '../components/EventBlock';
import useUserStore from '../lib/userStore';

const initialTickets = [
  {
    id: 1,
    eventId: "1",
    title: 'Rhode Island College Internship Fair',
    startTime: '12:00 PM',
    date: 'Oct 12, 2025',
    address: '600 College Rd, Providence, RI 02908',
    location: 'Rhode Island College Ballroom',
    image: 'https://www.golocalprov.com/cache/images/remote/https_s3.amazonaws.com/media.golocalprov.com/RIC_Anchormen_Logo_2019.png',
    category: 'Career'
  },
  {
    id: 2,
    eventId: "2",
    title: 'Cooking Masterclass: Flavors of the World',
    startTime: '2:00 PM',
    date: 'Nov 3, 2025',
    address: '45 Culinary Ave, Boston, MA 02118',
    location: 'Boston Culinary Institute',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    category: 'Food'
  },
  {
    id: 3,
    eventId: "3",
    title: 'Paint & Sip',
    startTime: '1:00 PM',
    date: 'Dec 25, 2025',
    address: '88 Art Blvd, New York, NY 10000',
    location: 'New York City, NYC Bar',
    image: 'https://assets.mainlinetoday.com/2024/02/wine-and-painting-AdobeStock_351266380.jpg',
    category: 'Art'
  },
  {
    id: 4,
    eventId: "4",
    title: 'Glow-in-the-Dark Dance Party',
    startTime: '9:00 PM',
    date: 'Dec 5, 2025',
    address: '99 Neon Blvd, Brooklyn, NY 11211',
    location: 'Neon Warehouse',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,q_60,w_750/v1/classpop/664f9c067b50c',
    category: 'Party'
  },
];

const MyTickets = () => {
  const { user } = useUserStore();
  const [tickets] = useState(initialTickets);

  return (
    <Panels>
      <div className="flex flex-col w-full px-8 mt-4 mb-1">
        <h1 className="font-bold text-white text-4xl px-2 mb-6">My Tickets</h1>
        <div className="overflow-y-auto h-[calc(100vh-180px)] overflow-x-hidden pr-2"
          style={{
            scrollbarColor:"#E9CC73 transparent",
          }}>
          <div className="mt-6 grid gap-y-6 gap-x-2 px-4 place-items-center" 
              style={{ 
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
               }}>
            {tickets.length > 0 ? (
              tickets.map(ticket => (
                <EventBlock
                  key={ticket.eventId}
                  eventId={ticket.eventId}
                  imageUrl={ticket.image}
                  link="/event-details"
                  eventTitle={ticket.title}
                  eventDate={ticket.date}
                  eventAddress={ticket.address}
                  category={ticket.category}
                  showMapButton={true}
                  hideBookmark={true}
                />
              ))
            ) : (
              <p className="text-white italic opacity-70 col-span-full text-center">
                No tickets found.
              </p>
            )}
          </div>
        </div>
      </div>
    </Panels>
  );
};

export default MyTickets;