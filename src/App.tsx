import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import ProfilePage from "./pages/ProfilePage";
import CreateEvent from "./pages/CreateEvent";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import HelpPage from "./pages/HelpPage";
import ContactUsPage from "./pages/ContactUsPage";
import Homepage from "./pages/Homepage";
import EventCheckout from "./pages/EventCheckout";
import ForgotPassword from "./pages/ForgotPassword";
import HostedEvents from "./pages/HostedEvents";
import MyTickets from "./pages/MyTickets";
import Bookmarks from "./pages/Bookmark";
import LandingPage from "./pages/landingpage";
import SearchPage from "./pages/searchpage";
import EventDetails from "./pages/EventDetails";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";
import ServerError from "./pages/ServerError";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<EventCheckout />} />
        <Route path="/hosted-events" element={<HostedEvents />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/bookmark" element={<Bookmarks />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/browse" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event-details" element={<EventDetails />} /> 
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/server" element={<ServerError />} />       
        <Route path="*" element={<NotFound />} />


      </Routes>
    </Router>
  )
}


export default App;

