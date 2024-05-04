import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout.js";
import { useEffect, useState } from "react";
import { getAdvert } from "./services.js";

function AdvertPage(){
    const params = useParams();
    const {advert, setAdvert}= useState(null);

    useEffect(()=>{

        async function getAdvertDetail(){
            const advert = await getAdvert(params.advertId);
            setAdvert(advert);  
        };

       // getAdvertDetail();
       
    },[params.advertId])



    return(
        <Layout title="nombre del anuncio">{JSON.stringify(advert)}</Layout>
    )
};

export default AdvertPage;