import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/layout.js";
import { useEffect, useState } from "react";
import { getAdvert } from "./services.js";

export default function AdvertPage(){
    const params = useParams();
    const {advert, setAdvert}= useState(null);
    const navigate = useNavigate ();

    useEffect(()=>{

        async function getAdvertDetail(){

            try{
                const advert = await getAdvert(params.advertId);
                setAdvert(advert); 

            }catch(error){
                if(error.status === 404){
                    navigate('/404')
                }
            }
             
        };

       getAdvertDetail();
       
    },[params.advertId,navigate])



    return(
        <Layout title="nombre del anuncio">{JSON.stringify(advert)}</Layout>
    )
};

