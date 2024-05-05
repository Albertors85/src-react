import { useState } from "react";
import Layout from "../../components/layout/layout.js";
import { createAdvert } from "./services.js";
import { useNavigate } from "react-router-dom";

export default function NewAdvert(){
    const navigate = useNavigate();
    const [formValue, setFormValue]= useState({
        name:'',
        price:''
        }
    );
    const handleSubmit= async (event)=>{
        event.preventDefault();
        try{
            const newAdvert = await createAdvert({formValue});
            navigate('/')
        }catch(error){
            if(error.status=== 401){
                navigate('/login');
            }

        }
    }
    
    const handlerChange = event =>{
        setFormValue(currentFormValues=>({
            ...currentFormValues,
            [event.target.name]:event.target.value,
        }));
    };


    /*const handleChange = event=>{
        setName(event.target.value);
    }*/




    return (
    <Layout> Agrega tu Anuncio


        <form onSubmit={handleSubmit} > 
            <label>nombre</label>
            <input type="text" name="name" onChange={handlerChange} required/>
            <br></br>

            <label>Precio</label>
            <input type="text" name="price" onChange={handlerChange} required />

            <br></br>
            <input type="radio" id="venta" name="tipo" required/>
            <label htmlFor="venta">Venta</label>

            <input type="radio" id="busqueda" name="tipo" value="busqueda" required/>
            <label htmlFor="busqueda">Búsqueda</label>
            <br></br>
            <button type="submit">Agrega</button>
        </form>

    </Layout>)
}