import React, { useState } from 'react';
import Panels from "../features/Panels";
import Dropdown from '../components/Dropdown';

const initialTickets = [
  {
    id: 1,
    title: 'Rhode Island College Internship Fair',
    startTime: '12:00 PM',
    date: 'Oct 12, 2025',
    address: '600 College Rd, Providence, RI 02908',
    location: 'Rhode Island College Ballroom',
    image: 'https://www.golocalprov.com/cache/images/remote/https_s3.amazonaws.com/media.golocalprov.com/RIC_Anchormen_Logo_2019.png',
    barcode: 'https://api.qrserver.com/v1/create-qr-code/?data=RICInternship2025Ticket1',
  },
  {
    id: 2,
    title: 'Cooking Masterclass: Flavors of the World',
    startTime: '2:00 PM',
    date: 'Nov 3, 2025',
    address: '45 Culinary Ave, Boston, MA 02118',
    location: 'Boston Culinary Institute',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    barcode: 'https://api.qrserver.com/v1/create-qr-code/?data=CookingMasterclass2025Ticket2',
  },
  {
    id: 3,
    title: 'Paint & Sip',
    startTime: '1:00 PM',
    date: 'Dec 25, 2025',
    address: '88 Art Blvd, New York, NY 10000',
    location: 'New York City, NYC Bar',
    image: 'https://assets.mainlinetoday.com/2024/02/wine-and-painting-AdobeStock_351266380.jpg',
    barcode: 'https://api.qrserver.com/v1/create-qr-code/?data=PaintSip2025Ticket3',
  },
  {
    id: 4,
    title: 'Glow-in-the-Dark Dance Party',
    startTime: '9:00 PM',
    date: 'Dec 5, 2025',
    address: '99 Neon Blvd, Brooklyn, NY 11211',
    location: 'Neon Warehouse',
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,q_60,w_750/v1/classpop/664f9c067b50c',
    barcode: 'https://api.qrserver.com/v1/create-qr-code/?data=GlowDanceParty2025Ticket4',
  },
];

const MyTickets = () => {
  const [tickets] = useState(initialTickets);
  const [activeQR, setActiveQR] = useState<string | null>(null);


  return (
    <>
      <Panels>
      <div 
        className="flex flex-col h-full p-6 overflow-y-scroll"
        style={{
          scrollbarColor: '#9CCED6 transparent',
        }}
      >
        <div className="h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tickets.map(ticket => (
              <div
                key={ticket.id}
                className="h-[480px] bg-lightermoonstone text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <img
                    src={ticket.image}
                    alt={ticket.title}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm mb-1">{ticket.date}</p>
                  <h2 className="text-xl font-semibold mb-1">{ticket.title}</h2>
                  <p className="text-sm text-black mb-1">{ticket.location}</p>
                  <p className="text-sm text-black">{ticket.address}</p>
                </div>
                  <button
                    onClick={() => setActiveQR(ticket.barcode)}
                    className="w-[50%] px-4 py-2 bg-moonstone text-white rounded-2xl "
                    >
                      QR Code
                  </button>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ticket.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[75%] px-4 py-2 bg-darkervanilla text-black text-sm rounded-2xl"
                    > View on Map
                  </a>
                </div>
            ))}
          </div>
        </div>
      </div>

      {activeQR && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-72">
          <button
            onClick={() => setActiveQR(null)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
             aria-label="Close"
            >
              &times;
          </button>
          <img src={activeQR} alt="QR Code" className="w-64 h-64 object-contain" 
          />
        </div>
      </div>
    )}
    </Panels>
    </>
  );
};

export default MyTickets;