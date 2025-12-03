import { useState, type JSX } from 'react';

{/* Imported icons for help topics */}
import SearchMoonstone from '../assets/icons/SearchMoonstone.svg';
import LockMoonstone from '../assets/icons/LockMoonstone.svg';
import UserMoonstone from '../assets/icons/UserMoonstone.svg';
import BellMoonstone from '../assets/icons/BellMoonstone.svg';
import CalendarMoonstone from '../assets/icons/CalendarMoonstone.svg';
import ShoppingCart from '../assets/icons/ShoppingCart.svg';
import { Link } from 'react-router-dom';
import Panels from '../features/Panels';

const FlipBox = ({ frontContent, backContent }: { frontContent: JSX.Element; backContent: JSX.Element }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="h-58 w-58 cursor-pointer transition-transform duration-300 active:scale-95 hover:scale-95"
            style={{ perspective: '1000px' }}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`relative h-full w-full transition-transform duration-500 ease-in-out`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front */}
                <div
                    className="absolute h-full w-full bg-whiteblue p-6 rounded-4xl shadow-md transform-gpu transition-all duration-300"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {frontContent}
                </div>

                {/* Back */}
                <div
                    className="absolute h-full w-full bg-whiteblue p-6 rounded-4xl shadow-md transform-gpu transition-all duration-300"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    {backContent}
                </div>
            </div>
        </div>
    );
};

const HelpPage = () => {
    return (
        <Panels>
            <div className="overflow-y-scroll h-[calc(100vh-90px)] px-6 py-4"
                style={{
                    scrollbarColor:"#E9CC73 transparent",
                }}>
                <div className="flex flex-col items-center mx-auto bg-bluewhite p-4 rounded-2xl shadow-md">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moonstone mb-4 text-center">
                        How can we help?
                    </h1>
                    <div className="mx-auto w-[90%] rounded-xl h-1 bg-darkervanilla"></div>

                    <div className="mt-4 text-moonstone text-center">
                        <p className="text-lg">
                            Need a hand? Find answers to common questions below.
                        </p>
                    </div>
                </div>
                
                <div className="flex items-center text-center justify-center mx-auto bg-moonstone w-[70%] h-12 rounded-xl mt-4">
                <div className="flex text-xl text-whiteblue font-bold py-2"> Can't find what you're looking for?<Link
                    to="/contact-us"
                    className="ml-2 underline"
                    >
                    Contact Us
                    </Link>
                </div>
                </div>

                <div className="mt-6 grid gap-y-6 gap-x-6 px-4 place-items-center" 
                    style={{ 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
                        }}>

                    {/* Account Access Box */}
                    <FlipBox
                        frontContent={
                            <>  
                                <img src={UserMoonstone} alt="User" className="w-20 h-20 mx-auto" />
                                <h2 className="text-2xl font-bold text-darkervanilla mt-2 text-center">Account Access</h2>
                                <p className="mt-1 text-moonstone text-center">
                                    Learn how to create, manage, and recover your account.
                                </p>
                            </>
                        }
                        backContent={
                            <>
                                <h2 className="text-xl font-bold text-moonstone text-center">Need help logging in?</h2>
                                <p className="mt-2 text-moonstone text-center">
                                    Click “Forgot Password” on the login screen to reset your credentials.
                                </p>
                            </>
                        }
                    />

                    {/* Security Tips Box */}
                    <FlipBox
                        frontContent={
                            <>
                                <img src={LockMoonstone} alt="Login" className="w-20 h-20 mx-auto" />
                                <h2 className="text-2xl font-bold text-darkervanilla mt-2 text-center">Security Tips</h2>
                                <p className="mt-1 text-moonstone text-center">
                                    Keep your account safe with these best practices.
                                </p>
                            </>
                        }
                        backContent={
                            <>
                                <h2 className="text-xl font-bold text-moonstone text-center">Protect your info</h2>
                                <p className="mt-2 text-moonstone text-center">
                                    Use strong passwords and enable two-factor authentication.
                                </p>
                            </>
                        }
                    />

                    {/* Contact Support Box */}
                    <FlipBox
                        frontContent={
                            <>
                                <img src={ShoppingCart} alt="Mail" className="w-20 h-20 mx-auto" />
                                <h2 className="text-2xl font-bold text-darkervanilla mt-2 text-center">Payments</h2>
                                <p className="mt-1 text-moonstone text-center">
                                    Get help on making payments and checking out.
                                </p>
                            </>
                        }
                        backContent={
                            <>
                                <h2 className="text-xl font-bold text-moonstone text-center">Need help checking out?</h2>
                                <p className="mt-2 text-moonstone text-center">
                                    If you booked an event by accident, you can request a refund and you will receive it in a few days.
                                </p>
                            </>
                        }
                    />
                    {/* Browsing Events Box */}
                    <FlipBox
                        frontContent={
                            <>
                                <img src={SearchMoonstone} alt="Search" className="w-20 h-20 mx-auto" />
                                <h2 className="text-2xl font-bold text-darkervanilla mt-2 text-center">Browsing</h2>
                                <p className="mt-1 text-moonstone text-center">
                                    Find out how to search, filter, and explore events that match your interests.
                                </p>
                            </>
                        }
                        backContent={
                            <>
                                <h2 className="text-xl font-bold text-moonstone text-center">Smart searching</h2>
                                <p className="mt-2 text-moonstone text-center">
                                    Use filters like date, location, and category to narrow results.
                                </p>
                            </>
                        }
                    />

                    {/* Event Details Box */}
                    <FlipBox
                        frontContent={
                            <>
                                <img src={CalendarMoonstone} alt="calendar" className = "w-20 h-20 mx-auto" />
                                <h2 className="text-2xl font-bold text-darkervanilla mt-2 text-center">Event Details</h2>
                                <p className="mt-1 text-moonstone text-center">
                                    Learn what to expect before attending an event.
                                </p>
                            </>
                        }
                        backContent={
                            <>
                                <h2 className="text-xl font-bold text-moonstone text-center">Know before you go</h2>
                                <p className="mt-2 text-moonstone text-center">
                                    Check venue info, accessibility, and ticket policies.
                                </p>
                            </>
                        }
                    />

                    {/* Favorites & Reminders Box */}
                    <FlipBox
                        frontContent={
                            <>
                                <img src={BellMoonstone} alt="Bell" className="w-20 h-20 mx-auto" />
                                <h2 className="text-2xl font-bold text-darkervanilla mt-2 text-center">Favorites & Reminders</h2>
                                <p className="mt-1 text-moonstone text-center">
                                    Stay updated on favorite events.
                                </p>
                            </>
                        }
                        backContent={
                            <>
                                <h2 className="text-xl font-bold text-moonstone text-center">Stay in the loop</h2>
                                <p className="mt-2 text-moonstone text-center">
                                    Tap the heart icon to favorite and enable reminders in settings.
                                </p>
                            </>
                        }
                    />
                </div>
            </div>
        </Panels>
    );
};

export default HelpPage;