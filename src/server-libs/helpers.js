import {getPageData} from "@/server-libs/rapiv1_lib";
import {getCategoryName} from "@/frontend-libs/helpers";
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

const secret_key = 'secretPassphrase'

export const getCommonData = async (req, post_data=[]) =>{
    let data = post_data
    if(!req.session.FOOTER)
        data = [
            ...data,
            {
                data_name:'view-footer'
            }
        ]
    if(isMetaRequired(req.url)){
        data = [
            ...data,
            {
                data_name:'view-meta',
                url : req.url
            }
        ]
    }
    const result = await getPageData(data)
    if(result.success)
    {
        if(result.data.footer)
            req.session.FOOTER = result.data.footer
        else
            result.data =  {
                    ...result.data,
                    footer:req.session.FOOTER
            }
        await req.session.save()
    }
    return result
}

/**
 * Checks if category is enabled
 * @param category
 * @returns {boolean}
 */
export const isCategoryEnabled = (category)=>{
    if(!category)
        return false
    //return to home if category not enabled
    const enabled_categories = process.env.SELL_ENABLED_CATEGORIES.split(',');
    if(enabled_categories.includes(getCategoryName(category).toUpperCase()))
        return true
    return false
}

/**
 * Helper function to format error response
 */
export const createResponse = (success, status_code, message, data) => {
    return {
        success,
        status_code,
        message,
        data
    }
}

export const encrypt_data = (str) => {
    const ciphertext = AES.encrypt(str, secret_key);
    return encodeURIComponent(ciphertext.toString());
}

export const decrypt_data = (str) => {
    const decodedStr = decodeURIComponent(str);
    return AES.decrypt(decodedStr, secret_key).toString(enc.Utf8);
}

/**
 * Raise validation error response
 */
export const applyDataValidationChecks = (rules, data, res)=>{
    const val_result = rules.safeParse(data)
    if(!val_result.success)
        res.status(400).json({success:false, message: val_result.error.issues[0].path[0]+' is not valid'})
}


export const isMetaRequired = (url) => {
    const url_segs = url.split('/')
    if(url_segs[1]!='_next')
        return true
    return false
}