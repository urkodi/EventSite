import { useEffect, useState } from "react";
import EventBlock from "../components/EventBlock";
import Panels from "../features/Panels";
import SearchSVG from "../components/icons/SearchSVG";
import Map from "../components/Map";
import Dropdown from "../components/Dropdown";

function Homepage() {

    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        setFirstName("Kodi");
    }, []);

    return (
        <Panels>
            <div className="m-8 flex items-center justify-between">
                <section className="text-white">
                    <h1 className="text-3xl font-bold">
                        Hello, <span className="underline">{firstName}</span>!
                    </h1>
                    <h2 className="text-2xl">
                        Let's find something fun to do...
                    </h2>
                </section>
                <section className="bg-white p-2 rounded-lg flex items-center gap-1.5 text-neutral-400">
                    <SearchSVG width="1.4em" height="1.4em"/>
                    <input
                        type="text"
                        placeholder="Find an Event..."
                        className="placeholder-neutral-400"
                    />
                </section>
            </div>
            <span className="flex">
                <Dropdown title="Choose a Location" buttonName="Boston">
                    <div className="bg-white mb-3 p-2 rounded-lg flex items-center gap-1.5 text-neutral-400">
                        <SearchSVG width="1.8em" height="1.3em"/>
                        <input
                            type="text"
                            placeholder="Search by city, neighborhood or ZIP code"
                            className= "w-full placeholder-neutral-400"
                        />
                    </div>
                    <div className="bg-white rounded-2xl py-2">
                        <Map />

                        <p>This is the rest</p>
                    </div>
                </Dropdown>
                <Dropdown title="Dates" buttonName="Today">
                    <input>
                    </input>
                </Dropdown>
            </span>
            <ul className="flex m-4 gap-4">
                <EventBlock eventId="1" imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" link="https://cornhub.website" eventTitle="Bop w/ Bops" eventDate="October 30th 2025" eventAddress="44 Hummingbird Ln" /> 
                <EventBlock eventId="1" imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" link="https://cornhub.website" eventTitle="Bop w/ Bops" eventDate="October 30th 2025" eventAddress="44 Hummingbird Ln" /> 
                <EventBlock eventId="1" imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" link="https://cornhub.website" eventTitle="Bop w/ Bops" eventDate="October 30th 2025" eventAddress="44 Hummingbird Ln" /> 
            </ul>
        </Panels>
    )
}

export default Homepage;