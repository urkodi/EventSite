import { useEffect, useState } from 'react';
import Panels from '../features/Panels';
import EventBlock from '../components/EventBlock';
import type { Event } from '../global';

const Bookmark = () => {
    const [bookmarkedEvents, setBookmarkedEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function getEvents() {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/events/list_all`);

            if (res.ok) {
                const data = await res.json();
                const slicedData = data.slice(0, 3);
                setBookmarkedEvents(slicedData);
            }
        }

        getEvents();
    }, []);

    const handleRemove = (eventId: string) => {
        const updated = bookmarkedEvents.filter(event => event.id !== parseInt(eventId));
        setBookmarkedEvents(updated);

        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
        const filteredBookmarks = bookmarks.filter((event: Event) => event.id !== parseInt(eventId));
        localStorage.setItem('bookmarkedEvents', JSON.stringify(filteredBookmarks));
    };

    return (
        <Panels>
            <div className="flex flex-col w-full px-8 mt-4 mb-1">
                <h1 className="font-bold text-white text-4xl px-2 mb-6">Bookmarked Events</h1>
                <div className="overflow-y-auto h-[calc(100vh-180px)] overflow-x-hidden pr-2"
                    style={{
                        scrollbarColor: "#E9CC73 transparent",
                    }}>
                    <div
                        className="mt-2 grid gap-4 px-2"
                        style={{
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
                        }}
                    >
                        {bookmarkedEvents.length > 0 ? (
                            bookmarkedEvents.map(event => (
                                <EventBlock
                                    key={event.id}
                                    eventId={`${event.id}`}
                                    imageUrl={event.imageUrl || ""}
                                    link={`/event-details${event.id}`}
                                    eventTitle={event.name}
                                    eventDate={event.date}
                                    eventTime={event.time}
                                    eventAddress={event.address || ""}
                                    category={event.category || ""}
                                    isBookmarked={true}
                                    onRemoveConfirm={handleRemove}
                                />
                            ))
                        ) : (
                            <p className="text-white italic opacity-70 col-span-full text-center">
                                No bookmarked events yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Panels>
    );
};

export default Bookmark;
