import { client } from "../../api/client.js";

const  advertsUrl = '/api/products';

export const getAdverts= ()=>{
    const url = `${advertsUrl}`;
    return client.get(url);
};

export const getAdvert = advertId =>{
    const url = `${advertsUrl}/${advertId}`;
    return client.get(url);
};

export const createAdvert= advert =>{
    return client.post(advertsUrl, advert)
};
/*export const login = credentials => {
    return client.post('/auth/login', credentials).then(({ accessToken }) => {
      authHeader(accessToken);
      storage.set('auth', accessToken);
    });
  }; */