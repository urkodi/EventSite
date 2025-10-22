import React, { useState } from 'react';

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
    title: 'Computer Science Job Fair',
    startTime: '10:00 AM',
    date: 'Nov 3, 2025',
    address: '415 Tech, Boston, MA 02210',
    location: 'Boston Convention Center',
    image: 'https://jessup.edu/wp-content/uploads/2023/12/Programming-in-Computer-Science.jpg',
    barcode: 'https://api.qrserver.com/v1/create-qr-code/?data=CSJobFair2025Ticket2',
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
];

const MyTickets = () => {
  const [tickets] = useState(initialTickets);

  return (
    <div className="p-6 bg-moonstone min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map(ticket => (
          <div
            key={ticket.id}
            className="bg-white text-gray-800 p-4 rounded-xl shadow-md"
          >
            <img
              src={ticket.image}
              alt={ticket.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <div className="bg-[#f5f5dc] text-center text-sm font-semibold py-1 rounded mb-2">
              Event Ticket
            </div>
            <h2 className="text-xl font-bold text-[#003366] mb-1">{ticket.title}</h2>
            <p className="text-sm"><strong>Date:</strong> {ticket.date} at {ticket.startTime}</p>
            <p className="text-sm"><strong>Location:</strong> {ticket.location}</p>
            <p className="text-sm"><strong>Address:</strong> {ticket.address}</p>
            <p className="text-sm"><strong>Ticket ID:</strong> #{ticket.id}</p>
            <img
              src={ticket.barcode}
              alt="Scan to enter"
              className="w-32 mt-3 mx-auto"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ticket.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
