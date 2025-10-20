import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Panels from "./features/Panels";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import HelpPage from "./pages/HelpPage";
import ContactUsPage from "./pages/ContactUsPage";
import Homepage from "./pages/Homepage";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Panels />} />  
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App;