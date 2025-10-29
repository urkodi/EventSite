import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sidenav from "./Sidenav";
import UserPanel from "./UserPanel";

//import Homepage from "../pages/Homepage";
import Bookmark from "../pages/Bookmark";
import MyTickets from "../pages/MyTickets";
import HostedEvents from "../pages/HostedEvents";

type PanelParam = {
  children?: React.ReactNode;  
};

function Panels( {children} : PanelParam ) {
    return (
            <>
              <Sidenav />
              <Main>
                <Routes>
                  <Route path="/bookmark" element={<Bookmark />} />
                  <Route path="/my-tickets" element={<MyTickets />} />
                  <Route path="/hosted-events" element={<HostedEvents />} />

                </Routes>
                {children}
              </Main> 
              <UserPanel />
            </>
    );
}

export default Panels; 