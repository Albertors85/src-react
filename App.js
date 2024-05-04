import { useState } from "react";
import AdvertsPage from "./pages/Adverts/adverts.js";
import LoginUser from "./pages/login/login.js";
import NewAdvert from "./pages/Adverts/create-adverts.js";
import { AuthContext } from "./pages/login/context.js";

function App(isDefaultLogged) {

  const [isLogged, setIsLogged]= useState(isDefaultLogged)

  const handleLogin=()=>setIsLogged(true);
  const handleLogout=()=>setIsLogged(false);
  const authValue= {
    isLogged, onLogin:handleLogin, onLogout:handleLogout
  }
  return (
          <AuthContext.Provider value={authValue} >
            <div>   
               {isLogged ?(<AdvertsPage/> ):(<LoginUser/> )} 
            </div>

          </AuthContext.Provider>
            
          )
}

export default App;
