import axios from "axios";
import {config_urlencoded} from "@/frontend-libs/constants";

export const createResponse = (status, message, data) => {
    return {
        status,
        message,
        data
    }
}

export const getPincode = async (pincode)=>{
    try{
            const result = await axios.post('/api/pincode-details',
                {
                    pincode:pincode
                }, config_urlencoded);
            if(result.data.success){
                return createResponse(200, '', {
                    pincode_details:result.data.pincode_details
                })
            }
    }catch (err){
        return createResponse(err.response.status, err.response.data.message, [])
    }
}


export const setUserCity = async (pincode, city)=>{
    try{
        const result = await axios.post('/api/set-city',
            {
                pincode:pincode,
                city:city
            }, config_urlencoded);
        if(result.status==200){
            return createResponse(200, 'success')
        }
    }catch (err){
        return createResponse(500, 'Something went wrong')
    }
}

export const searchCity = async (city)=>{
    try{
        const result = await axios.post('/api/search-city',
            {
                city:city
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        return createResponse(500, 'Something went wrong', [])
    }
}


export const verifyQuoteUser = async (mobile_number, action, otp)=>{
    try{
        const result = await axios.post('/api/verify-quote-user',
            {
                mobile_number:mobile_number,
                action:action,
                otp:otp
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }

    }
}


export const initiateLaptopDiagnostics = async (os_name, browser_name, os_bit_version,variant_slug)=>{
    try{
        const result = await axios.post('/api/initiate-laptop-diagnosis',
            {
                os_name,
                browser_name,
                os_bit_version,
                variant_slug
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }

    }
}

export const getLaptopDetails = async (code)=>{
    try{
        const result = await axios.post('/api/get-laptop-details',
            {
                code
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }

    }
}


export const generateCommonQuote = async (params, slug, exchange_method, quote_user_id)=>{
    try{
        const result = await axios.post('/api/get-quote-id',
            {
                params,
                slug,
                exchange_method,
                quote_user_id
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }

    }
}

export const updateOffer = async (quote_id, offer)=>{
    try{
        const result = await axios.post('/api/update-offer',
            {
                quote_id,
                offer
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }

    }
}

export const manageCustomer = async (quote_key, customer_key, mobile, whatsapp_number, gender,name,email,whatsapp_enabled)=>{
    try{
        const result = await axios.post('/api/manage-customer',
            {
                quote_key,
                customer_key,
                mobile,
                whatsapp_number,
                gender,
                name,
                email,
                whatsapp_enabled
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}

export const viewAddress = async (customer_key)=>{
    try{
        const result = await axios.post('/api/view-address',
            {
                customer_key,
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}

export const manageAddress = async (quote_key, customer_key, address_type, house_no, street_no, locality, pincode)=>{
    try{
        const result = await axios.post('/api/manage-address',
            {
                quote_key,
                customer_key,
                address_type,
                house_no,
                street_no,
                locality,
                pincode
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}

export const checkAddressServicability = async (quote_key, address_key)=>{
    try{
        const result = await axios.post('/api/check-address-servicability',
            {
                quote_key,
                address_key
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}


export const getPaymentMethods = async (customer_key, quote_key)=>{
    try{
        const result = await axios.post('/api/view-payment-methods',
            {
                customer_key,
                quote_key
            }, config_urlencoded);
        if(result.data.success){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}

export const checkIFSCValidity = async (bank_ifsc)=>{
    try{
        const result = await axios.post('/api/validate-ifsc',
            {
                bank_ifsc
            }, config_urlencoded);
        if(result.data.ifsc_details){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}


export const checkUPIValidity = async (upi)=>{
    try{
        const result = await axios.post('/api/validate-vpa',
            {
                upi
            }, config_urlencoded);
        if(result.status){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}

export const viewTimeslots = async (quote_key, pincode)=>{
    try{
        const result = await axios.post('/api/view-timeslots',
            {
                quote_key,
                pincode
            }, config_urlencoded);
        if(result.status){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}

export const placeOrder = async (quote_key,
                                 mobile_number,
                                 address_key,
                                 payment_method,
                                 bank_acc_name,
                                 bank_acc_no,
                                 bank_ifsc,
                                 paytm_no,
                                 voucher_id,
                                 timeslot,
                                 vpa)=>{
    try{
        const result = await axios.post('/api/place-order',
            {
                quote_key,
                mobile_number,
                address_key,
                payment_method,
                bank_acc_name,
                bank_acc_no,
                bank_ifsc,
                paytm_no,
                voucher_id,
                timeslot,
                vpa
            }, config_urlencoded);
        if(result.status){
            return createResponse(200, '', result.data)
        }
    }catch (err){
        if(err.response.status == 400){
            return createResponse(400, err.response.data.message, [])
        }else{
            return createResponse(500, 'Something went wrong', [])
        }
    }
}