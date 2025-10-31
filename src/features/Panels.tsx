import Main from "./Main";
import Sidenav from "./Sidenav";
import UserPanel from "./UserPanel";

type PanelParam = {
  children?: React.ReactNode;  
}

function Panels( {children} : PanelParam ) {
    return (
            <>
              <Sidenav />
              <Main>
                {children}
              </Main> 
              <UserPanel />
            </>
    )
}

export default Panels; 