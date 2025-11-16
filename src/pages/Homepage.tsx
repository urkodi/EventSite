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

function Homepage() {

    const { user } = useUserStore();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [events, setEvents] = useState([
        { eventId: "1",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFZfnxTBwHRAbsGJ8UugN2NUL5t8dAKvbhQ&s" ,
            link:"https://cornhub.website" ,
            eventTitle:"Bop w/ Bops" ,
            eventDate:"October 30th 2025" ,
            eventAddress:"44 Hummingbird Ln" ,
            category:"Food" ,
        },
        {
            eventId:"2",
            imageUrl:"https://www.stockvault.net/data/2020/01/18/272608/thumb16.jpg",
            link:"https://chatgpt.com/",
            eventTitle:"Bop w/ Bops",
            eventDate:"October 30th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Art"
        },
        {
            eventId:"3",
            imageUrl:"https://gratisography.com/wp-content/uploads/2025/05/gratisography-dino-party-800x525.jpg",
            link:"https://cornhub.website",
            eventTitle:"Bop w/ Bops",
            eventDate:"October 30th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Party"
        },
        {
            eventId:"4",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG66KxSseACXvW6KvUTYLxE2DbuCNfv4APUpURpgqxOGkqjvfGR1GqxuYS1WXr2bfoV34&usqp=CAU",
            link:"https://cornhub.website",
            eventTitle:"Dogs with Slogs",
            eventDate:"October 30th 2025",
            eventAddress:"44 Hummingbird Ln",
            category:"Drinks"
        },
        {
            eventId:"5",
            imageUrl:"https://wegotthiscovered.com/wp-content/uploads/2022/11/cherry-blossoms-after-winter.jpg",
            link:"https://cornhub.website",
            eventTitle:"Bl bottom Fest",
            eventDate:"October 30th 2025",
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

    const filteredEvents = selectedCategory
    ? events.filter((e) => e.category === selectedCategory)
    : events;

    return (
        <Panels>
            <div className="px-10 mt-2 flex items-center justify-between">
                <section className="text-white">
                    <h1 className="text-3xl">
                        Hello, <span className="font-bold">{user?.firstName || "USER"}</span>!
                    </h1>
                    <h2 className="text-xl">
                        Let's find something fun to do...
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
                <Dropdown title="Choose a Location" buttonName="Boston">
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
                <Dropdown title="Dates" buttonName="Today">
                    <input>
                    
                    </input>
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

            <div className="overflow-y-auto h-[calc(100vh-240px)] overflow-x-hidden"
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
                            No events found.
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
                                No events found.
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