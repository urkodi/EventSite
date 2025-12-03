import { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutProvider, PaymentElement, useCheckout } from '@stripe/react-stripe-js/checkout';
import eventlogo from "../assets/images/eventlogo.png";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Payment Form Component (handles Stripe payment)
function PaymentForm({ totalCost, firstName, lastName, email }: any) {
    const checkoutState = useCheckout();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    if (checkoutState.type === 'loading') {
        return (
            <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-moonstone mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading payment form...</p>
            </div>
        );
    }

    if (checkoutState.type === 'error') {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600">Error: {checkoutState.error.message}</p>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate contact info
        if (!firstName || !lastName || !email) {
            setError({ message: 'Please fill in all contact details' });
            return;
        }

        setLoading(true);
        setError(null);

        // Update email in Stripe
        const emailResult = await checkoutState.checkout.updateEmail(email);
        if (emailResult.type === 'error') {
            setError(emailResult.error);
            setLoading(false);
            return;
        }

        // Confirm payment
        const result = await checkoutState.checkout.confirm();
        if (result.type === 'error') {
            setError(result.error);
            setLoading(false);
        }
        // On success, user will be redirected to return_url
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Stripe Payment Element */}
            <div className="mb-6">
                <h3 className="block text-sm font-medium text-gray-700 mb-3">Payment Method</h3>
                <PaymentElement
                    options={{
                        layout: 'tabs',
                    }}
                />
            </div>

            {/* Error Display */}
            {error && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm">{error.message}</p>
                </div>
            )}

            {/* Complete Booking Button */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition ${loading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-moonstone hover:bg-[#4C9DB0]'
                    }`}
            >
                {loading ? 'Processing...' : `Complete Booking - $${totalCost.toFixed(2)}`}
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
                🔒 Secured by Stripe
            </p>
        </form>
    );
}

export default function EventCheckout() {
    const event = {
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // Create Checkout Session client secret
    const clientSecret = fetch(`${import.meta.env.VITE_API_URL}/api/payments/create-checkout-session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: Math.round(totalCost * 100),
            quantity: event.quantity,
            event_name: event.name
        })
    })
        .then((response) => response.json())
        .then((json) => json.checkoutSessionClientSecret);

    return (
        <div className="flex flex-col mx-auto h-auto max-h-screen overflow-x-hidden">

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

                <div className="max-w-4xl mx-auto mt-10 mb-10">
                    <div className="p-4 rounded-3xl bg-gradient-to-b from-lightermoonstone to-moonstone">
                        <div className="text-center mb-8 mt-5">
                            <h1 className="text-6xl font-bold text-moonstone mb-2">
                                Complete Your Booking
                            </h1>
                            <div className="mx-auto w-[65%] rounded-xl h-2 bg-vanilla mb-5 mt-5"></div>
                            <p className="text-white text-xl font-normal">Secure your spot at the event!</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">


                            {/* Left column - Event Details */}
                            <div className="lg:col-span-4 bg-white rounded-2xl p-6">
                                <h2 className="text-2xl font-bold text-moonstone mb-4">Order Summary</h2>
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
                                                placeholder="John" />
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
                                    <div className="mt-4 mb-6">
                                        <label className="block text-sm text-gray-700 font-medium mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-3 py-2 border border-[#9CCED6] rounded-lg focus:ring-2 focus:ring-[#4C9DB0] focus:border-transparent outline-none"
                                            placeholder="jenna.stone@example.com" />
                                    </div>
                                    {/* Stripe Payment Form */}
                                    <CheckoutProvider
                                        stripe={stripePromise}
                                        options={{ clientSecret }}
                                    >
                                        <PaymentForm
                                            event={event}
                                            totalCost={totalCost}
                                            firstName={firstName}
                                            lastName={lastName}
                                            email={email}
                                        />
                                    </CheckoutProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
