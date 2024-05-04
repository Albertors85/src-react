import { useContext } from "react"
import { logout } from "../../pages/login/service.js"
import { AuthContext } from "../../pages/login/context.js"

export default function Header(){
    const {isLogged, onLogout} = useContext(AuthContext);

    const handleLogout= async()=>{
        await logout()
        onLogout()
    };

    return <header>
        <div>icono<img></img></div>
        <nav>
            {isLogged ?( <button onClick={handleLogout}>Logout</button>) : (<button >Login</button>)}
            
        </nav>
    </header>
}