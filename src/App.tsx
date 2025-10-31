import Main from "./features/Main";
import Sidenav from "./features/Sidenav";
import UserPanel from "./features/UserPanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import SearchPage from "./searchpage";
import LandingPage from "./landingpage";


import Panels from "./features/Panels";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";


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
        <Route path="/browse" element={<SearchPage />} />
        <Route path="/landing" element={<LandingPage/>} />
        //add routes here as needed
        <Route path="/" element={<Panels />} />  
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<Homepage />} />
        //add more routes here as needed
      </Routes>
    </Router>
  )
}


export default App;

