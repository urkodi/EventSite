import { useState, useEffect } from 'react';
import BookmarkSVG from './icons/BookmarkSVG.tsx'
import ShareSVG from './icons/ShareSVG.tsx';

type EventBlockProps = {
  eventId: string;
  imageUrl: string;
  link: string;
  eventDate: string;
  eventTitle: string;
  eventAddress: string;
  eventTime: string;
  category: string;
  onBookmark?: (eventId: string, isBookmarked: boolean) => void;
  showMapButton?: boolean;
  hideBookmark?: boolean;
  isBookmarked?: boolean;
  onRemoveConfirm?: (eventId: string) => void;
};

function EventBlock({ 
  eventId, 
  imageUrl, 
  link, 
  eventDate, 
  eventTime,
  eventTitle, 
  eventAddress, 
  category, 
  onBookmark, 
  showMapButton = false, 
  hideBookmark = false,
  isBookmarked: initialBookmarked = false,
  onRemoveConfirm
}: EventBlockProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isBookmarked && onRemoveConfirm) {
      setShowConfirm(true);
      return;
    }

    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    
    if (onBookmark) {
      onBookmark(eventId, newBookmarkState);
    }
    
    if (newBookmarkState) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
      const eventData = {
        eventId,
        imageUrl,
        link,
        eventDate,
        eventTime,
        eventTitle,
        eventAddress,
        category
      };
      bookmarks.push(eventData);
      localStorage.setItem('bookmarkedEvents', JSON.stringify(bookmarks));
    } else {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
      const filteredBookmarks = bookmarks.filter((event: any) => event.eventId !== eventId);
      localStorage.setItem('bookmarkedEvents', JSON.stringify(filteredBookmarks));
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    

    const shareUrl = `${window.location.origin}${link}`;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleConfirmRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRemoveConfirm) {
      onRemoveConfirm(eventId);
    }
    setShowConfirm(false);
  };

  const handleCancelRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirm(false);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMap(true);
    setMapPosition({ x: 0, y: 0 }); 
  };

  const handleCloseMap = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMap(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - mapPosition.x,
      y: e.clientY - mapPosition.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setMapPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(eventAddress)}&output=embed`;

  return (
    <li className="w-52 h-72 rounded-2xl border-4 border-bluewhite overflow-hidden shadow-md bg-whiteblue flex flex-col relative">
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
            <h3 className="font-bold text-xl leading-tight line-clamp-2 text-moonstone truncate">
              {eventTitle}
            </h3>
            <p className="text-sm text-gray-700 truncate">
              {eventDate}{eventTime ? ` • ${eventTime}` : ""}
            </p>
            <p className="text-sm text-gray-700 truncate">{eventAddress}</p>
            
            {/* Map button on bottom left */}
            {showMapButton && (
              <button
                onClick={handleMapClick}
                className="absolute bottom-4 left-3 px-3 py-1.5 bg-vanilla text-moonstone text-xs font-semibold rounded-lg hover:bg-darkervanilla transition"
              >
                Map
              </button>
            )}

            {/* Bookmark and Share buttons on bottom right */}
            <div className="absolute flex gap-2 bottom-4 right-4">
              {!hideBookmark && (
                <button 
                  onClick={handleBookmark}
                  className="text-moonstone transition-all"
                >
                  <BookmarkSVG width="1.75em" height="1.75em" filled={isBookmarked} />
                </button>
              )}
              <button 
                onClick={handleShare}
                className="text-moonstone relative"
              >
                <ShareSVG width="1.75em" height="1.75em" />
                {showCopied && (
                  <span className="absolute -top-8 right-0 bg-moonstone text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>
      </a>

      {/* Map Popup Modal */}
      {showMap && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div 
            className="bg-white rounded-2xl shadow-2xl w-[80vw] h-[70vh] max-w-2xl flex flex-col"
            style={{
              transform: `translate(${mapPosition.x}px, ${mapPosition.y}px)`,
              cursor: isDragging ? 'grabbing' : 'default'
            }}
          >
            <div 
              className="flex justify-between items-center p-4 border-b-2 border-moonstone cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
            >
              <div>
                <h3 className="font-bold text-lg text-moonstone">{eventTitle}</h3>
                <p className="text-sm text-gray-600">{eventAddress}</p>
              </div>
            </div>
            
            <div className="flex-grow relative">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0, pointerEvents: isDragging ? 'none' : 'auto' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 border-t-2 border-moonstone flex justify-end gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventAddress)}`, '_blank');
                }}
                className="bg-vanilla hover:bg-darkervanilla text-moonstone px-4 py-2 rounded-full text-md font-semibold transition"
              >
                Open in Google Maps
              </button>
              <button
                onClick={handleCloseMap}
                className="bg-lightermoonstone hover:bg-moonstone text-white px-4 py-2 rounded-full text-md font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Remove Bookmark Confirmation */}
      {showConfirm && (
        <div className="absolute inset-0 bg-lightermoonstone bg-opacity-70 flex items-center justify-center z-50 rounded-2xl">
          <div className="bg-bluewhite p-4 rounded-lg shadow-lg w-[90%] mx-auto">
            <h3 className="text-md font-bold mb-2 text-center text-moonstone">Remove Bookmark?</h3>
            <p className="text-sm text-gray-700 mb-4 text-center">
              Remove this event from bookmarks?
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={handleConfirmRemove}
                className="bg-vanilla hover:bg-darkervanilla text-moonstone px-4 py-1.5 rounded-lg text-sm font-semibold transition"
              >
                Remove
              </button>
              <button
                onClick={handleCancelRemove}
                className="bg-lightermoonstone hover:bg-moonstone text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default EventBlock;