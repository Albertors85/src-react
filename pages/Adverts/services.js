import { client } from "../../api/client.js";

const  advertsUrl = '/api/products';

export const getAdverts= ()=>{
    return client.get(advertsUrl);
};