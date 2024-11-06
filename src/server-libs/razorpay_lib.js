import axios from "axios";
import {createResponse} from "@/server-libs/helpers";

export const  validateIFSC = async (ifsc) => {
    try{
        const res = await axios.get('https://ifsc.razorpay.com/'+ifsc)
        const data = {
            ifsc_details:res.data
        }
        return createResponse(true,200, '', data)
    }catch(err){
        return createResponse(false, 400, 'Invalid IFSC code',
            {message:'Invalid IFSC code'})
    }
}