
import { useState } from "react";
import eventlogo from "./assets/images/eventlogo.png";

export default function EventCheckout() {
//Event Details - will come from API 
    const event ={
        name: "Fall Music Festival 2025",
        date: "July 14 - July 17, 2025",
        location: "Roger Williams Park",
        ticketPrice: 20.00,
        serviceFee: 2.50,
        quantity: 2,
        ticketType: "General Admission"
    };

    //Calculate total cost
    const totalCost = (event.ticketPrice * event.quantity) + event.serviceFee;

    /////
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <div className="flex flex-col mx-auto h-auto"> 

            <header className="w-screen h-auto bg-moonstone p-4 shadow-md">
                    <div className="flex items-left">
                        <a href="/">
                            <img src={eventlogo} alt="Event Logo" className="h-10 transition-transform duration-300 hover:scale-120 hover:-translate-y-0" />
                            </a>
                    </div>
            </header>

            <div className="max-w-4xl mx-auto mt-10">
                {/* Header */}
                <div className="p-4 rounded-3xl bg-gradient-to-b from-lightermoonstone to-moonstone">
                    <div className="text-center mb-8 mt-5">
                        <h1 className="text-6xl font-bold text-moonstone mb-2">
                            Complete Your Booking
                        </h1>
                        <div className="mx-auto w-[65%] rounded-xl h-2 bg-vanilla mb-5 mt-5"></div>
                        <p className="text-white text-xl font-normal">Secure your spot at the event!</p>
                    </div>
              
                    {/* Two column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">


                        {/* Left column - Event Details */}
                        <div className="lg:col-span-4 bg-white rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-moonstone mb-4">Order Summary</h2>
                            {/* Event Card with image and details */}
                            <div className="flex gap-4 mb-4 pb-6 border-b border-[#9CCED6]">
                            {/* Image placeholder */}
                            <div className="w-24 h-24 bg-[#ECFBFD] rounded-lg flex-shrink-0 border border-[#9CCED6]"></div>
                            
                            {/* Event details */}
                            <div>
                                <h3 className="font-semibold text-moonstone">{event.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{event.date} </p>
                                <p className="text-sm text-gray-600 mt-1">{event.location}</p>
                                <p className="text-sm text-gray-600 mt-1">{event.ticketType}</p>
                            </div>
                            </div>
                              {/* Price Breakdown */}
                                                        
                            <div className="space-y-3">
                            <div className="flex justify-between text-gray-700">
                                <span>Ticket Price ({event.quantity}x)</span>
                                <span>${event.ticketPrice.toFixed(2)}</span>
                            </div>
                            
                            <div className="flex justify-between text-gray-700">
                                <span>Service Fee</span>
                                <span>${event.serviceFee.toFixed(2)}</span>
                            </div>

                            <div className="border-t border-[#9CCED6] pt-2 mt-3">
                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                <span>Total</span>
                                <span>${totalCost.toFixed(2)}</span>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* Right column - Payment Form */}
                        <div className="lg:col-span-3 bg-white rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-moonstone mb-4">Payment Information</h2>   
                            
                                {/* Contact Details */}
                                <div className="mb-6">
                                <h3 className="text-md font-semibold text-gray-900 mb-3">Contact Details</h3>
                                
                                {/* First and Last Name Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#9CCED6] rounded-lg focus:ring-2 focus:ring-[#4C9DB0] focus:border-transparent outline-none"
                                        placeholder="John"/>
                                    </div>
                                    
                                    <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#9CCED6] rounded-lg focus:ring-2 focus:ring-[#4C9DB0] focus:border-transparent outline-none"
                                        placeholder="Doe"
                                    />
                                    </div>
                                </div>
                            
                                {/* Email */}
                                <div className="mt-4">
                                    <label className="block text-sm text-gray-700 font-medium mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#9CCED6] rounded-lg focus:ring-2 focus:ring-[#4C9DB0] focus:border-transparent outline-none"
                                        placeholder="jenna.stone@example.com"/>
                                </div>
                                {/* Payment Method */}
                                <div className="mb-6">
                                <h3 className="block text-sm font-medium text-gray-700 mt-4 mb-3">Payment Method</h3>
                                
                                <div className="flex gap-2">
                                    <button
                                    type="button"
                                    onClick={() => setPaymentMethod('card')}
                                    className={`flex-1 py-2 px-4 border-2 rounded-lg font-medium transition ${
                                        paymentMethod === 'card'
                                        ? 'bg-[#4C9DB0] text-white border-[#4C9DB0]'
                                        : 'bg-white text-gray-900 border-[#9CCED6] hover:border-[#4C9DB0]'
                                    }`}
                                    >
                                    Card
                                    </button>
                                    
                                    <button
                                    type="button"
                                    onClick={() => setPaymentMethod('google')}
                                    className={`flex-1 py-2 px-4 border-2 rounded-lg font-medium transition ${
                                        paymentMethod === 'google'
                                        ? 'bg-[#4C9DB0] text-white border-[#4C9DB0]'
                                        : 'bg-white text-gray-900 border-[#9CCED6] hover:border-[#4C9DB0]'
                                    }`}
                                    >
                                    Google Pay
                                    </button>
                                    
                                    <button
                                    type="button"
                                    onClick={() => setPaymentMethod('apple')}
                                    className={`flex-1 py-2 px-4 border-2 rounded-lg font-medium transition ${
                                        paymentMethod === 'apple'
                                        ? 'bg-[#4C9DB0] text-white border-[#4C9DB0]'
                                        : 'bg-white text-gray-900 border-[#9CCED6] hover:border-[#4C9DB0]'
                                    }`}
                                    >
                                    Apple Pay
                                    </button>
                                </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>        
    );
}