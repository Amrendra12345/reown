import axios from "axios";
import {createResponse} from "@/server-libs/helpers";

export const pincodeDetails = async (data) => {
    try{
        const res = await axios.get(process.env.RAPIV2_BASE_URL+'/api/pincode/details/'+data.pincode)
        if(res.data.pincode_details.length){
            return createResponse(true,200, '', res.data )
        }else{
            return createResponse(false,404, '', {'message':'Pincode is not serviceable'})
        }
    }catch(err){
        return createResponse(false, err.response.status, err.response.data.message,
            err.response.data)
    }
}
