import { useState, useEffect } from "react";

import EventBlock from "../components/EventBlock";
import Panels from "../features/Panels";
import SearchSVG from "../components/icons/SearchSVG";
import Map from "../components/Map";
import Dropdown from "../components/Dropdown";

import MicIcon from "../assets/icons/mic-vocal.svg";
import WineIcon from "../assets/icons/wine.svg";
import BurgerIcon from "../assets/icons/hamburger.svg";
import BallIcon from "../assets/icons/volleyball.svg";
import ArtIcon from "../assets/icons/palette.svg";
import PartyIcon from "../assets/icons/party.svg";

import { Link } from 'react-router-dom';

import Calendar from "../components/Calendar";
import LandingPage from "./LandingPage";
import type { Event, User } from "../global";

function Homepage() {
    const [user, setUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getUser() {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/logged_in`, {
                credentials: "include"
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data);
            }
        }

        getUser();
    }, []);

    
    useEffect(() => {
        async function getEvents() {
            setLoading(true);
            const params = new URLSearchParams();
            
            if (searchQuery) params.append('q', searchQuery);
            if (selectedCategory) params.append('category', selectedCategory);
            if (selectedDate) {
                params.append('date', selectedDate.toISOString().split('T')[0]);
            }

            try {
                const res = await fetch(
                    `${import.meta.env.VITE_BASE_URL}/events/search?${params}`
                );

                if (res.ok) {
                    const data = await res.json();
                    setEvents(data);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        }

        getEvents();
    }, [searchQuery, selectedCategory, selectedDate]);  // Watch ALL filters

    const categories = [
        { categoryId: "music_concert", icon: MicIcon },
        { categoryId: "food_drink", icon: WineIcon },
        { categoryId: "food_drink", icon: BurgerIcon },
        { categoryId: "sports", icon: BallIcon },
        { categoryId: "art_exhibition", icon: ArtIcon },
        { categoryId: "party", icon: PartyIcon },
    ];

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
                    <SearchSVG width="1.4em" height="1.4em" />
                    <input
                        type="text"
                        placeholder="Find an Event..."
                        value={searchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        className="placeholder-neutral-400 outline-none border-none w-full"
                    />
                </section>
            </div>

            <span className="flex h-auto ml-8 mt-3 mb-1">
                <Dropdown title="Choose a Location" buttonName="Location">
                    <div className="space-y-4">
                        <Map />
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
                <span className="h-auto w-0.5 my-2 m-4 rounded-xl bg-lightgrey" />
                <div className="flex gap-2">
                    {categories.map(({ categoryId, icon }, i) => (
                        <button
                            key={i}
                            onClick={() =>
                                setSelectedCategory(
                                    selectedCategory === categoryId ? null : categoryId
                                )
                            }
                            className={`bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:bg-vanilla transition duration-300 active:scale-95 hover:scale-90 ${selectedCategory === categoryId
                                ? "ring-2 ring-vanilla"
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
                    scrollbarColor: "#E9CC73 transparent",
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

                {loading ? (
                    <div className="text-white italic opacity-70 px-10 py-4">
                        Loading events...
                    </div>
                ) : events.length > 0 ? (
                    <div className="overflow-x-auto mx-10 max-w-full"
                        style={{
                            scrollbarColor: "#E9CC73 transparent",
                        }}>
                        <ul className="flex gap-6 snap-x snap-mandatory mb-2">
                            {events.map((event) => (
                                <li key={event.id} className="snap-start shrink-0">
                                    <EventBlock
                                        eventId={`${event.id}`}
                                        imageUrl={event.imageUrl || ""}
                                        link={`/event-details/${event.id}`}
                                        eventTitle={event.name}
                                        eventDate={event.date}
                                        eventTime={event.time}
                                        eventAddress={event.address || ""}
                                        category={event.category || ""} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="text-white italic opacity-70 px-10 py-8 text-center bg-lightermoonstone/20 rounded-lg mx-10">
                        No events found for the selected filters. Try adjusting your search or filters.
                    </div>
                )}

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

                    {loading ? (
                        <div className="text-white italic opacity-70 px-4 py-4">
                            Loading events...
                        </div>
                    ) : events.length > 0 ? (
                        <div className="overflow-x-auto"
                            style={{
                                scrollbarColor: "#ECFBFD transparent",
                            }}>
                            <ul className="flex gap-6 snap-x snap-mandatory mb-2 mt-2">
                                {events.map((event) => (
                                    <li key={event.id} className="snap-start shrink-0">
                                        <EventBlock
                                            eventId={`${event.id}`}
                                            imageUrl={event.imageUrl || ""}
                                            link={`/event-details/${event.id}`}
                                            eventTitle={event.name}
                                            eventDate={event.date}
                                            eventTime={event.time}
                                            eventAddress={event.address || ""}
                                            category={event.category || ""} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="text-white italic opacity-70 px-4 py-8 text-center bg-white/10 rounded-lg">
                            No events found for the selected filters. Try adjusting your search or filters.
                        </div>
                    )}
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