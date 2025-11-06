import BookmarkSVG from './icons/BookmarkSVG.tsx'
import ShareSVG from './icons/ShareSVG.tsx';

type EventBlockProps = {
    eventId: string;
    imageUrl: string;
    link: string;
    eventDate: string;
    eventTitle: string;
    eventAddress: string;

};


function EventBlock({eventId, imageUrl, link, eventDate, eventTitle, eventAddress}: EventBlockProps) {
    return (
        <li className='rounded-2xl overflow-hidden max-w-64'> 
            <a href={link}>
                <section className='relative '>
                    <div> 
                        <img src={imageUrl} alt="Event Image" className='block'/>
                        <div className='absolute inset-0 bg-lightermoonstone/20 pointer-events-none'></div>
                    </div>
                    <div className='absolute flex flex-col gap-2 top-0 right-0 p-2 text-white'> 
                        <button>
                            <BookmarkSVG width="2em" height="2em" />
                        </button>
                        <button>
                            <ShareSVG width="2em" height="2em" />
                        </button>
                    </div>
                </section>
                <section className='bg-white/85 p-3'>
                    <p>{eventDate}</p>
                    <div className="overflow-x-hidden">
                        <h3 className='font-bold text-xl'>{eventTitle}</h3>
                    </div>
                    <p>{eventAddress}</p>
                </section>
            </a>
        </li>
    )
}

export default EventBlock;