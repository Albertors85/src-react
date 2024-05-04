import { useEffect, useState } from "react";
import { getAdverts } from "./services.js";

import Layout from "../../components/layout/layout.js";

function AdvertsPage(){
    
    const [adverts, setAdverts]= useState([]);

  
    useEffect(()=>{
        getAdverts().then(adverts => setAdverts(adverts))
    },[]);
    
    return (
       <Layout>
            <div>
                
                <ul>
                    {adverts.map(advert=> <li>{advert.name}</li>)}
                </ul>
            </div>

       </Layout>

    )

}
/*
    name: info.name,
    info: info.info,
    price: info.price,
    situation: info.situation,
    
    
*/

export default AdvertsPage;








/*const adverts=[{content: "hola", id:1},{content:"adios ", id:2},{content:"funciona", id:3}]

function AdvertsPage(){

    return <div>
        <ul>
            {adverts.map(advert=><li key={advert.id}>{advert.content}</li>)}
        </ul>
    </div>;
}
export default AdvertsPage;*/