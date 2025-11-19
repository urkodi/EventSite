import { useState } from 'react';
import BookmarkSVG from './icons/BookmarkSVG.tsx'
import ShareSVG from './icons/ShareSVG.tsx';

type EventBlockProps = {
  eventId: string;
  imageUrl: string;
  link: string;
  eventDate: string;
  eventTitle: string;
  eventAddress: string;
  category: string;
  onBookmark?: (eventId: string, isBookmarked: boolean) => void;
};

function EventBlock({ eventId, imageUrl, link, eventDate, eventTitle, eventAddress, category, onBookmark }: EventBlockProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the link from navigating
    e.stopPropagation(); // Stop event bubbling
    
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    
    if (onBookmark) {
      onBookmark(eventId, newBookmarkState);
    }
    
    if (newBookmarkState) {
      // Add to bookmarks
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
      const eventData = {
        eventId,
        imageUrl,
        link,
        eventDate,
        eventTitle,
        eventAddress,
        category
      };
      bookmarks.push(eventData);
      localStorage.setItem('bookmarkedEvents', JSON.stringify(bookmarks));
    } else {
      // Remove from bookmarks
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
      const filteredBookmarks = bookmarks.filter((event: any) => event.eventId !== eventId);
      localStorage.setItem('bookmarkedEvents', JSON.stringify(filteredBookmarks));
    }
  };

  return (
    <li className="w-52 h-72 rounded-2xl overflow-hidden shadow-md bg-whiteblue flex flex-col">
      <a href={link} className="flex flex-col h-full">
        {/* Image section */}
        <section className="relative h-1/2 flex-shrink-0">
          <img
            src={imageUrl}
            alt="Event Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-lightermoonstone/20 pointer-events-none"></div>
        </section>

        {/* Content section */}
        <section className="relative flex flex-col justify-between flex-grow bg-bluewhite/50 p-3 overflow-hidden">
          <div>
            <h3 className="font-bold text-xl leading-tight line-clamp-2 text-moonstone">
              {eventTitle}
            </h3>
            <p className="text-sm text-gray-700 truncate">{eventDate}</p>
            <p className="text-sm text-gray-700 line-clamp-2">{eventAddress}</p>
            <div className="absolute flex gap-2 bottom-4 right-4">
              <button 
                onClick={handleBookmark}
                className={`transition-colors ${isBookmarked ? 'text-moonstone' : 'text-gray-500'}`}
              >
                <BookmarkSVG width="1.75em" height="1.75em" />
              </button>
              <button className="text-moonstone">
                <ShareSVG width="1.75em" height="1.75em" />
              </button>
            </div>
          </div>
        </section>
      </a>
    </li>
  );
}

export default EventBlock;