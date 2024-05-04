import { useAuth } from '../context.js';
import { Navigate } from "react-router-dom";

function RequireAuth (children){
    const {isLogged} = useAuth();
    return isLogged ? children : <Navigate to="/login"/> 
};

export default RequireAuth;
