import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import ProfilePage from "./pages/ProfilePage";
import CreateEvent from "./pages/CreateEvent";


function App() {
  return(
  // <ProfilePage/>
  <Router>
     <Routes>
        
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
        //add more routes here as needed
      </Routes>
    </Router>
  )
}

export default App;