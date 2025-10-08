import Main from "./features/Main";
import Sidenav from "./features/Sidenav";
import UserPanel from "./features/UserPanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import HelpPage from "./pages/HelpPage";
import ContactUsPage from "./pages/ContactUsPage";


function App() {
  return(
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidenav />
              <Main />
              <UserPanel />
            </>
          }
        />  
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  )
}

export default App;