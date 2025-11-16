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
};

function EventBlock({ eventId, imageUrl, link, eventDate, eventTitle, eventAddress, category }: EventBlockProps) {
  return (
    <li className="w-52 h-72 rounded-2xl overflow-hidden shadow-md bg-white flex flex-col">
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
        <section className="relative flex flex-col justify-between flex-grow bg-white/85 p-3 overflow-hidden">
          <div>
            <h3 className="font-bold text-lg leading-tight line-clamp-2">
              {eventTitle}
            </h3>
            <p className="text-sm text-gray-700 truncate">{eventDate}</p>
            <p className="text-sm text-gray-700 line-clamp-2">{eventAddress}</p>
            <div className="absolute flex gap-2 bottom-4 right-4 text-moonstone">
            <button>
              <BookmarkSVG width="1.75em" height="1.75em" />
            </button>
            <button>
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
