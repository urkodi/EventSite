import { CheckCircle, Calendar, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import eventlogo from "../assets/images/eventlogo.png";

export default function BookingConfirmation() {
    const event = {
        name: "Fall Music Festival 2025",
        date: "July 14 - July 17, 2025",
        location: "Roger Williams Park",
        quantity: 2,
        ticketType: "General Admission",
        totalCost: 42.50
    };

    
    const customerEmail = "customer@example.com";

    return (
        <div className="flex flex-col mx-auto h-auto max-h-screen overflow-x-hidden">
            {/* Header */}
            <header className="w-screen h-auto bg-moonstone p-4 shadow-md">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                    </a>
                    <Link to="/help"
                        className="mr-3 font-bold hover:text-darkervanilla transition text-bluewhite hover:scale-110">Help
                    </Link>
                </div>
            </header>

            <div className="overflow-y-scroll"
                style={{
                    scrollbarColor: '#4C9DB0 transparent',
                }}>

                {/* Success Content */}
                <div className="max-w-xl mx-auto mt-10 mb-10">
                        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
                            {/* Success Icon */}
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={48} className="text-green-600" />
                            </div>

                            {/* Success Message */}
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
                            <p className="text-xl text-gray-600 mb-8">Your tickets have been secured</p>
                            
                            {/* Event Details */}
                            <div className="bg-gradient-to-b from-[#ECFBFD] to-white rounded-xl p-6 mb-6 text-left">
                                <h3 className="font-bold text-moonstone mb-4 text-lg text-center">{event.name}</h3>
                                
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex items-center gap-3">
                                        <Calendar size={20} className="text-moonstone flex-shrink-0" />
                                        <span>{event.date}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <MapPin size={20} className="text-moonstone flex-shrink-0" />
                                        <span>{event.location}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Ticket size={20} className="text-moonstone flex-shrink-0" />
                                        <span>{event.quantity}x {event.ticketType}</span>
                                    </div>
                                </div>

                                {/* Total Amount */}
                                <div className="border-t border-gray-300 mt-4 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-gray-900">Total Paid</span>
                                        <span className="font-bold text-gray-900 text-xl">${event.totalCost.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Email Confirmation */}
                            <div className="border-t border-gray-300 pt-6">
                                <p className="text-sm text-gray-600 mb-6">
                                    A confirmation email has been sent to:<br />
                                    <strong className="text-gray-800">{customerEmail}</strong>
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-4 justify-center">
                                    <Link 
                                        to="/" 
                                        className="bg-moonstone text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4C9DB0] transition"
                                    >
                                        Return Home
                                    </Link>
                                    <Link 
                                        to="/my-tickets" 
                                        className="bg-white text-moonstone border-2 border-moonstone px-6 py-3 rounded-lg font-semibold hover:bg-[#ECFBFD] transition"
                                    >
                                        View My Tickets
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}