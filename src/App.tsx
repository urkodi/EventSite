import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./features/Main";
import Sidenav from "./features/Sidenav";
import UserPanel from "./features/UserPanel";
import EventCheckout from "./eventCheckout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page  */}
        <Route path="/" element={
          <>
            <Sidenav />
            <Main/>
            <UserPanel/>
          </>
        } />
        
        {/* Checkout page */}
        <Route path="/checkout" element={<EventCheckout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;