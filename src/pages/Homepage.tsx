import EventBlock from "../components/EventBlock";
import Panels from "../features/Panels";
import SearchSVG from "../components/icons/SearchSVG";
import Map from "../components/Map";
import Dropdown from "../components/Dropdown";
import useUserStore from "../lib/userStore";
import Category from "../components/Category";
import TicketSVG from "../components/icons/TicketSVG";
import ChevronSVG from "../components/icons/ChevronSVG";

function Homepage() {

    const { user } = useUserStore();
    const categories = [{categoryId: 1, icon:TicketSVG},{categoryId:2, icon:TicketSVG}, {categoryId:3, icon:TicketSVG}, {categoryId:4, icon:TicketSVG}, {categoryId:2, icon:TicketSVG}]
    
    return (
        <Panels>
            <div className="mx-8 mt-2 flex items-center justify-between">
                <section className="text-white">
                    <h1 className="text-3xl">
                        Hello, <span className="font-bold">{user?.firstName || "USER"}</span>!
                    </h1>
                    <h2 className="text-xl">
                        Let's find something fun to do...
                    </h2>
                </section>
                <section className="w-[50%] bg-white p-3 rounded-2xl flex items-center gap-1.5 text-neutral-400">
                    <SearchSVG width="1.4em" height="1.4em"/>
                    <input
                        type="text"
                        placeholder="Find an Event..."
                        className="placeholder-neutral-400 outline-none border-none"
                    />
                </section>
            </div>

            <span className="flex h-auto ml-5 mt-1">
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
                <ul className="flex gap-2.5">
                <Category icon = {TicketSVG}/>
                </ul>
            </span>

            <div className="overflow-y-auto h-[calc(100vh-220px)]"
                style={{
                    scrollbarColor:"#E9CC73 transparent",
                }}>
                
                {/* FEATURED EVENTS */}
                    <h1 className="mb-2 mt-2 font-bold text-white text-2xl px-10">
                        Featured Events 
                    </h1>

                <div className="overflow-x-scroll mx-10"
                    style={{
                        scrollbarColor:"#E9CC73 transparent",
                        scrollbarWidth:"thin",
                    }}>

                <ul className="flex gap-6 snap-x snap-mandatory mb-2">
                    <li className="snap-start shrink-0 w-[calc(100%/3-1rem)]">
                    <EventBlock eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" 
                            /> 
                    </li>

                    <li className="snap-start shrink-0 w-[calc(100%/3-1rem)]">
                    <EventBlock eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>

                    <li className="snap-start shrink-0 w-[calc(100%/3-1rem)]">
                    <EventBlock eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>

                    <li className="snap-start shrink-0 w-[calc(100%/3-1rem)]">
                    <EventBlock eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>

                    <li className="snap-start shrink-0 w-[calc(100%/3-1rem)]">
                    <EventBlock eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>
                </ul>
                </div>

                {/* DISCOVER EVENTS */}
                <div className="mt-2 bg-lightermoonstone rounded-xl px-4 py-2">
                        <h1 className="mb-2 font-bold text-white text-2xl">
                            Discover Events
                        </h1>

                        <div className="overflow-x-scroll"
                            style={{
                                scrollbarColor:"#E9CC73 transparent",
                                scrollbarWidth:"thin",
                            }}>
                                
                        <ul className="flex gap-6 snap-x snap-mandatory mb-2 mt-2">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" 
                            /> 
                        <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" 
                            /> 
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" 
                            /> 
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" 
                            /> 
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