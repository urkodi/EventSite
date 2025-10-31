import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import HelpPage from "./pages/HelpPage";
import ContactUsPage from "./pages/ContactUsPage";
import Homepage from "./pages/Homepage";
import EventCheckout from "./EventCheckout";
import ForgotPassword from "./pages/ForgotPassword";
import EventCheckout from "./EventCheckout";


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
      </Routes>
    </Router>
  )
}

export default App;