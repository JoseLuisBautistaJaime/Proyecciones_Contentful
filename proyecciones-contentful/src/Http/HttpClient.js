import axios from "axios";
import {ContenfulConst} from "../Constants/Constants";
let instance = axios.create({
    baseURL: `https://graphql.contentful.com/content/v1`,
    
    headers: {
        'Authorization': 'Bearer ' + ContenfulConst.ContentDeliveryToken,
        "Content-Type": "application/json",
    },
    

});
export { instance as default };