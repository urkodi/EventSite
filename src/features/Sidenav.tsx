import eventLogo from '../assets/icons/eventlogo.svg'
import NavLink from '../components/NavLink.tsx'
import HomeSVG from '../components/icons/HomeSVG.tsx'
import SearchSVG from '../components/icons/SearchSVG.tsx'
import TicketSVG from '../components/icons/TicketSVG.tsx'
import BookmarkSVG from '../components/icons/BookmarkSVG.tsx'
import HelpSVG from '../components/icons/HelpSVG.tsx'
import MailSVG from '../components/icons/MailSVG.tsx'
import ContactLink from '../components/ContactLink.tsx'

function Sidenav() {
    return (
        <>
            <span className= "w-10 my-8 ml-2 mr-4 rounded-2xl bg-gradient-to-b from-lightermoonstone to-moonstone"> </span>
            <header className="flex flex-col items-start my-8"> 
                <a href='/'> <img src = {eventLogo} alt="Event Logo" className= "h-14 mb-6 transition-transform duration-300 hover:scale-110 hover:-translate-y-1" /> </a>
                <nav className="flex flex-1 flex-col justify-between">
                    <ul> 
                        <NavLink icon = {HomeSVG} text = "Home" link = "/"/>
                        <NavLink icon = {SearchSVG} text = "Browse" link = "/browse"/>
                        <NavLink icon = {TicketSVG} text = "My Tickets" link = "/my-tickets"/>
                        <NavLink icon = {BookmarkSVG} text = "Bookmark" link = "/bookmark"/>
                    </ul>
                    <ul> 
                        <ContactLink icon = {HelpSVG} text = "Help" link = "/help"/>
                        <ContactLink icon = {MailSVG} text = "Contact Us" link = "/contact-us"/>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Sidenav;