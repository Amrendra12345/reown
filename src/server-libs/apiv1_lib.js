import axios from "axios";
import {createResponse} from "@/server-libs/helpers";
import {config_multipart} from "@/server-libs/constants";

export const CALL_API_KEY = process.env.API_CALL_KEY



/**
 * Send internal emails using API
 *
 * @return boolean
 */
export const sendInternalMail = async (data) => {
    let body = {
        API_KEY:CALL_API_KEY
    };
    body = {
        ...body,
        ...data
    }
    try{
        const res = await axios.post(process.env.API_BASE_URL+'/send/notification/internal', body, config_multipart)
        if (res.data.error == false) {
            return createResponse(true,200, res.data.message??'success',
                res.data )
        }else{
            return createResponse(false,500, res.data.message??'failed',
                res.data )
        }
    }catch(err){
        return createResponse(false, err.response.status, err.response.data.message,
            err.response.data)
    }
}