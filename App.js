import AdvertsPage from "./pages/Adverts/adverts.js";
import LoginUser from "./pages/login/login.js";
import NewAdvert from "./pages/Adverts/create-adverts.js";
import { useAuth } from "./pages/login/context.js";


function App() {
const {isLogged}= useAuth();
  
  return (
          
            <div>   
               {isLogged ?(<AdvertsPage/> ):(<LoginUser/> )} 
            </div>

        
            
          )
}

export default App;
