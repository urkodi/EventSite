import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Panels from "./features/Panels";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";


function App() {
  return(
    <Router>
      <Routes>
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