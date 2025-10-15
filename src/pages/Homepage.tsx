
import EventBlock from "../components/EventBlock";
import Panels from "../features/Panels";


function Homepage() {
    return (
        <>
            <Panels>
                <ul className="flex m-4 gap-4">
                    <EventBlock eventId="1" imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" link="https://cornhub.website" eventTitle="Bop w/ Bops" eventDate="October 30th 2025" eventAddress="44 Hummingbird Ln" /> 
                    <EventBlock eventId="1" imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" link="https://cornhub.website" eventTitle="Bop w/ Bops" eventDate="October 30th 2025" eventAddress="44 Hummingbird Ln" /> 
                    <EventBlock eventId="1" imageUrl="https://photos.zillowstatic.com/fp/42667657f3aee8e431f9d37624c1fdac-p_d.webp" link="https://cornhub.website" eventTitle="Bop w/ Bops" eventDate="October 30th 2025" eventAddress="44 Hummingbird Ln" /> 
                </ul>
            </Panels>
        </>
    )
}

export default Homepage;