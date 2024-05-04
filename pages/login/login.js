import { useState } from 'react';
import { login } from "./service.js";
import Layout from '../../components/layout/layout.js';
import { useAuth } from './context.js';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginUser (){
    const location = useLocation();
    const navigate = useNavigate(); 
    const {onLogin}= useAuth();

    const [formValue, setFormValue]= useState({
        username:'',
        password:''
        }
    );


    const handlerChange = event =>{
        setFormValue(currentFormValues=>({
            ...currentFormValues,
            [event.target.name]:event.target.value,
        }));
    };

   
    const handlerSubmit = async (event)=>{
        event.preventDefault();

        await login(formValue);
       
        onLogin();
        
        const goTo = location.state?.from || '/';
        navigate(goTo);
    };

    const {username, password}=formValue;
    const buttonDisable =!username || !password;

    return (
        <Layout title="bienvenido">
            <div>
                <h1>Log in</h1>
                <form onSubmit={handlerSubmit}>
                    <input type="text" name="username" value={username} onChange={handlerChange}/>
                    <input type="password" name="password" value={password} onChange={handlerChange}/>
                    <button type="submit" disabled={buttonDisable}>Log in</button>
                </form>
            </div>

        </Layout>)
        
        
}

export default LoginUser