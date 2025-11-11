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

            <span className="flex h-auto ml-5 mt-1 mb-1">
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

                <div className="overflow-x-auto mx-10 max-w-full"
                    style={{
                        scrollbarColor:"#E9CC73 transparent",
                    }}>

                <ul className="flex gap-6 snap-x snap-mandatory mb-2">
                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFZfnxTBwHRAbsGJ8UugN2NUL5t8dAKvbhQ&s" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>

                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://www.stockvault.net/data/2020/01/18/272608/thumb16.jpg" 
                                link="https://chatgpt.com/" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>
                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://gratisography.com/wp-content/uploads/2025/05/gratisography-dino-party-800x525.jpg" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>
                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG66KxSseACXvW6KvUTYLxE2DbuCNfv4APUpURpgqxOGkqjvfGR1GqxuYS1WXr2bfoV34&usqp=CAU" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>
                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://www.chillbilldill.com/content/images/2023/08/weirdstockphoto1-2.jpg" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>
                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://jenmulligandesign.com/wp-content/uploads/2017/04/gratisography-free-stock-photos.jpg" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>
                    <li className="snap-start shrink-0">
                    <EventBlock eventId="1" 
                                imageUrl="https://www.themarysue.com/wp-content/uploads/2024/04/yurionice.jpg?fit=1200%2C675" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                    </li>

                </ul>
                </div>

                {/* DISCOVER EVENTS */}
                <div className="mt-2 bg-lightermoonstone rounded-xl px-4 py-2 mx-2">
                    <h1 className="mb-2 font-bold text-white text-2xl">
                        Discover Events
                    </h1>

                    <div className="overflow-x-auto"
                        style={{
                            scrollbarColor:"#ECFBFD transparent",
                        }}>
                                
                    <ul className="flex gap-6 snap-x snap-mandatory mb-2 mt-2">
                        <li className="snap-start shrink-0">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                            </li>

                            <li className="snap-start shrink-0">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                            </li>

                            <li className="snap-start shrink-0">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                            </li>

                            <li className="snap-start shrink-0">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                            </li>

                            <li className="snap-start shrink-0">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                            </li>

                            <li className="snap-start shrink-0">
                            <EventBlock 
                                eventId="1" 
                                imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" 
                                link="https://cornhub.website" 
                                eventTitle="Bop w/ Bops" 
                                eventDate="October 30th 2025" 
                                eventAddress="44 Hummingbird Ln" /> 
                            </li>

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