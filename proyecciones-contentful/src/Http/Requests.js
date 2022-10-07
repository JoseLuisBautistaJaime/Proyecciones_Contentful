import http from "./HttpClient"
import {ContenfulConst} from "../Constants/Constants";
import {RequestPromotions} from "../Constants/Constants";
import {RequestHelps} from "../Constants/Constants";
class ContentfulService{
    async getPromotions(){
        return await http.post(`/spaces/${ContenfulConst.SpaceId}/`,{query:RequestPromotions})
    }
    async getHelps(){
        return await http.post(`/spaces/${ContenfulConst.SpaceId}/`,{query:RequestHelps})
    }
}
export default new ContentfulService();