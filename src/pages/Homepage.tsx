import { useState, useEffect } from "react";

import EventBlock from "../components/EventBlock";
import Panels from "../features/Panels";
import SearchSVG from "../components/icons/SearchSVG";
import Map from "../components/Map";
import Dropdown from "../components/Dropdown";
import useUserStore from "../lib/userStore";
import Category from "../components/Category";
import TicketSVG from "../components/icons/TicketSVG";
import ChevronSVG from "../components/icons/ChevronSVG";

import MicIcon from "../assets/icons/mic-vocal.svg";
import WineIcon from "../assets/icons/wine.svg";
import BurgerIcon from "../assets/icons/hamburger.svg";
import BallIcon from "../assets/icons/volleyball.svg";
import ArtIcon from "../assets/icons/palette.svg";
import PartyIcon from "../assets/icons/party.svg"; 

import { Link } from 'react-router-dom';

import Calendar from "../components/Calendar";
import LandingPage from "./landingpage";

function Homepage() {

    const { user } = useUserStore();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [events, setEvents] = useState([
        { eventId: "1",
            imageUrl:"https://images.pexels.com/photos/20804701/pexels-photo-20804701.jpeg?cs=srgb&dl=pexels-agrosales-20804701.jpg&fm=jpg" ,
            link:"/event-details" ,
            eventTitle:"Duck Hunt" ,
            eventDate:"October 30th 2025" ,
            eventAddress:"44 Hummingbird Ln" ,
            category:"Food" ,
        },
        {
            eventId:"2",
            imageUrl:"https://www.stockvault.net/data/2020/01/18/272608/thumb16.jpg",
            link:"/event-details",
            eventTitle:"Art Expo",
            eventDate:"October 30th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Art"
        },
        {
            eventId:"3",
            imageUrl:"https://gratisography.com/wp-content/uploads/2025/05/gratisography-dino-party-800x525.jpg",
            link:"/event-details",
            eventTitle:"Dino Party",
            eventDate:"November 25th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Party"
        },
        {
            eventId:"4",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG66KxSseACXvW6KvUTYLxE2DbuCNfv4APUpURpgqxOGkqjvfGR1GqxuYS1WXr2bfoV34&usqp=CAU",
            link:"/event-details",
            eventTitle:"Doggy Dance Off",
            eventDate:"December 5th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Drinks"
        },
        {
            eventId:"5",
            imageUrl:"https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
            link:"/event-details",
            eventTitle:"Music Festival",
            eventDate:"November 25th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Music"
        },
        
    ]);

    useEffect(() => {
        //backend call to fetch events
    }, [])

    const categories = [
        { categoryId: "Music", icon: MicIcon },
        { categoryId: "Drinks", icon: WineIcon },
        { categoryId: "Food", icon: BurgerIcon },
        { categoryId: "Sports", icon: BallIcon },
        { categoryId: "Art", icon: ArtIcon },
        { categoryId: "Party", icon: PartyIcon },
    ];

    const parseEventDate = (dateString: string): Date => {
        const months: { [key: string]: number } = {
            January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
            July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
        };
        
        const parts = dateString.split(' ');
        const month = months[parts[0]];
        const day = parseInt(parts[1].replace(/\D/g, ''));
        const year = parseInt(parts[2]);
        
        return new Date(year, month, day);
    };

    const isSameDay = (date1: Date, date2: Date): boolean => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const filteredEvents = events.filter((event) => {
        const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
        const matchesDate = selectedDate ? isSameDay(parseEventDate(event.eventDate), selectedDate) : true;
        return matchesCategory && matchesDate;
    });

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    const clearDateFilter = () => {
        setSelectedDate(null);
    };

    if (!user) return <LandingPage/>

    return (
        <Panels>
            <div className="px-10 mt-2 flex items-center justify-between">
                <section className="text-white">
                    <h1 className="text-3xl font-bold">
                        Hello, <span className="font-bold">{user?.firstName || "USER"}</span>!
                    </h1>
                    <h2 className="text-lg">
                        Let's find something fun to do . . .
                    </h2>
                </section>
                <section className="w-[50%] bg-white p-3 rounded-2xl flex items-center gap-2 text-neutral-400">
                    <SearchSVG width="1.4em" height="1.4em"/>
                    <input
                        type="text"
                        placeholder="Find an Event..."
                        className="placeholder-neutral-400 outline-none border-none"
                    />
                </section>
            </div>

            <span className="flex h-auto ml-8 mt-3 mb-1">
                <Dropdown title="Choose a Location" buttonName="Location">
                    <div className="w-full mt-4 bg-white rounded-2xl px-2 py-2 flex items-center gap-2">
                        <span className="px-1 text-neutral-400">
                            <SearchSVG width="1.2em" height="1.2em" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by city or ZIP code"
                            className= "flex-1 placeholder-neutral-400 border-none outline-none"
                        />
                        {/* ADD MAP FEATURE BACK IN LATER */}
                    </div>
                </Dropdown>
                <Dropdown 
                    title="Filter By Date" 
                    buttonName={selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "Date"}
                >
                    <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
                    {selectedDate && (
                        <button
                            onClick={clearDateFilter}
                            className="w-full mt-3 px-2 py-2 bg-lightermoonstone hover:bg-moonstone text-white rounded-lg font-semibold transition"
                        >
                            Clear Date Filter
                        </button>
                    )}
                </Dropdown>
                <span className="h-auto w-0.5 my-2 m-4 rounded-xl bg-lightgrey"/>
                <div className="flex gap-2">
                {categories.map(({categoryId, icon }, i) => (
                    <button
                        key={i}
                        onClick={() =>
                        setSelectedCategory(
                        selectedCategory === categoryId ? null : categoryId
                    )
                }
                className={`bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:bg-vanilla transition transition-transform duration-300 active:scale-95 hover:scale-90 ${
                  selectedCategory === categoryId
                    ? "ring-2 ring-[var(--color-vanilla)]"
                    : ""
                }`}
              >
                <img src={icon} alt={categoryId} className="w-6 h-6" />
              </button>
            ))}
            </div>
            </span>

            <div className="overflow-y-auto h-[calc(100vh-230px)] overflow-x-hidden mr-2"
                style={{
                    scrollbarColor:"#E9CC73 transparent",
                }}>
                
                {/* FEATURED EVENTS */}
                <div className="justify-between flex items-center">
                    <h1 className="mb-2 mt-2 font-bold text-white text-2xl px-10">
                        Featured Events 
                    </h1>
                    <Link 
                        to="/browse"
                        className="flex items-center font-semibold gap-1 text-white mr-10 hover:underline">
                        Browse More
                    </Link>
                </div>

                <div className="overflow-x-auto mx-10 max-w-full"
                    style={{
                        scrollbarColor:"#E9CC73 transparent",
                    }}>

                <ul className="flex gap-6 snap-x snap-mandatory mb-2">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <li key={event.eventId} className="snap-start shrink-0">
                                <EventBlock
                                    eventId={event.eventId}
                                    imageUrl={event.imageUrl}
                                    link={event.link}
                                    eventTitle={event.eventTitle}
                                    eventDate={event.eventDate}
                                    eventAddress={event.eventAddress}
                                    category={event.category} />
                            </li>
                        ))
                    ) : (
                        <li className="text-white italic opacity-70">
                            No events found for the selected filters.
                        </li>
                    )}
                    </ul>
                </div>

                {/* DISCOVER EVENTS */}
                <div className="mt-2 bg-lightermoonstone rounded-xl px-4 py-2 mx-2 mb-4">
                    <div className="justify-between flex items-center">
                        <h1 className="mb-2 mt-2 font-bold text-white text-2xl">
                            Discover Events 
                        </h1>
                        <Link 
                            to="/browse"
                            className="flex items-center font-semibold gap-1 text-white mr-2 hover:underline">
                            Browse More
                        </Link>
                    </div>

                    <div className="overflow-x-auto"
                        style={{
                            scrollbarColor:"#ECFBFD transparent",
                        }}>
                                
                    <ul className="flex gap-6 snap-x snap-mandatory mb-2 mt-2">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <li key={event.eventId} className="snap-start shrink-0">
                                <EventBlock 
                                    eventId={event.eventId}
                                    imageUrl={event.imageUrl} 
                                    link={event.link} 
                                    eventTitle={event.eventTitle} 
                                    eventDate={event.eventDate} 
                                    eventAddress={event.eventAddress}
                                    category="" /> 
                                </li>
                            ))
                        ) : (
                            <li className="text-white italic opacity-70">
                                No events found for the selected filters.
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            </div>

                <div className="flex">
                    <div className="bg-lightermoonstone">


                    </div>
                </div>
        </Panels>
    )
}

export default Homepage;