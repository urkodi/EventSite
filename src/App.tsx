import Main from "./features/Main";
import Sidenav from "./features/Sidenav";
import UserPanel from "./features/UserPanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";


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
        //add more routes here as needed
      </Routes>
    </Router>
  )
}

export default App;