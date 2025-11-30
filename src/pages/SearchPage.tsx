import React, { useState, useEffect} from "react";
import Panels from "../features/Panels";
import BookmarkIcon from "../assets/icons/bookmark.svg";
import ExternalLinkIcon from "../assets/icons/external-link.svg";
import MicIcon from "../assets/icons/mic-vocal.svg";
import WineIcon from "../assets/icons/wine.svg";
import BurgerIcon from "../assets/icons/hamburger.svg";
import BallIcon from "../assets/icons/volleyball.svg";
import ArtIcon from "../assets/icons/palette.svg";
import PartyIcon from "../assets/icons/party.svg"; 
import useUserStore from "../lib/userStore";

import EventBlock from "../components/EventBlock";
import SearchSVG from "../components/icons/SearchSVG";
import Dropdown from "../components/Dropdown";
import Category from "../components/Category";
import TicketSVG from "../components/icons/TicketSVG";

import Calendar from "../components/Calendar";

function SearchPage() {
  
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

  return (
    <Panels>
      {/* SEARCH + FILTER SECTION */}
      <div className="flex flex-col w-full px-8 mt-4 mb-1">
        {/* Search Bar */}
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-white text-4xl px-2">
              Browse Events 
          </h1>
        <section className="w-[50%] bg-white p-3 rounded-2xl flex items-center gap-2 text-neutral-400">
            <SearchSVG width="1.4em" height="1.4em"/>
            <input
              type="text"
              placeholder="Find an Event..."
              className="placeholder-neutral-400 outline-none border-none"
            />
        </section>
        </div>

        {/* Filter Buttons + Icon Buttons */}
        <span className="flex h-auto mt-4 mb-4">
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

            <div className="overflow-y-auto h-[calc(100vh-240px)] overflow-x-hidden"
                style={{
                    scrollbarColor:"#E9CC73 transparent",
                }}>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-2 mb-8">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                      <EventBlock
                        key={event.eventId}
                        eventId={event.eventId}
                        imageUrl={event.imageUrl}
                        link={event.link}
                        eventTitle={event.eventTitle}
                        eventDate={event.eventDate}
                        eventAddress={event.eventAddress}
                        category={event.category}
                      />
                    ))
                  ) : (
                    <p className="text-white italic opacity-70 col-span-full">
                      No events found.
                    </p>
                  )}
                </div>
            </div>
      </div>
    </Panels>
  );
};

export default SearchPage;
