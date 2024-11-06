
import axios from "axios";
import {INVALID_TOKEN_TEXT, TOKEN_REQUIRED_TEXT} from "@/server-libs/constants";
import {createResponse} from "@/server-libs/helpers"

const config_urlencoded = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}


export const getAccessToken = async (session) => {
        try{
            const res = await axios.post(process.env.RAPI_BASE_URL+'/authorize/get-token', {
                grant_type: process.env.WEB_GRANT_TYPE,
                client_id: process.env.WEB_CLIENT_ID,
                client_secret: process.env.WEB_CLIENT_SECRET,
            }, config_urlencoded)

            session.ACCESS_TOKEN = res.data.token.access_token
            await session.save()

            return createResponse(true,200, '',
                { token:res.data.token.access_token})
        }catch(err){
            if(!err.response){
                return createResponse(false, 500, 'Network Error',
                    {message:'Network Error'});
            }
            return createResponse(false,err.response.status, err.response.data.message,
                err.response.data)
        }
}

export const searchFamily =  async (session, data) => {
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/search-family', {
            'access_token' : session.ACCESS_TOKEN,
            'client' : 'web',
            'city' : data.city??process.env.DEFAULT_CITY,
            'search_key' : data.search_key,
        }, config_urlencoded)
        return createResponse(true,200, '',
            res.data )
    }catch(err){
        return await errorHandler(searchFamily, session, data, err)
    }
}


export const  shareLinkWhatsapp = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        device_type : data.device_type,
        mobile_number : data.mobile_number,
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/share-link-whatsapp', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(shareLinkWhatsapp, session, data, err)
    }
}

export const  viewList = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        'client' : 'web',
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/view-list/'+data.data_name, params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewList, session, data, err)
    }
}


export const getPageData =  async (data) => {
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/get-page-data', {
            data: JSON.stringify(data)
        }, config_urlencoded)
        return createResponse(true,200, '',
            res.data )
    }catch(err){
        return await errorHandler(getPageData, null, data, err)
    }
}

export const  searchCityWebSellOrder = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        'city' : data.city,
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/search-city-web-sell-order', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(searchCityWebSellOrder, session, data, err)
    }
}


export const  viewQuestions = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        'client' : 'web',
        'city' : data.city,
        'variant_slug' : data.variant_slug,
        'exchange_method': data.exchange_method
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/view-questions', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewQuestions, session, data, err)
    }
}

export const  verifyQuoteUser = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        'client' : 'web',
        'mobile_number' : data.mobile_number,
        'action' : data.action,
        'otp': data.otp
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/verify-quote-user', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(verifyQuoteUser, session, data, err)
    }
}


export const  initiateLaptopDiagnostics = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        'os_name' : data.os_name,
        'browser_name' : data.browser_name,
        'os_bit_version' : data.os_bit_version,
        'variant_slug': data.variant_slug
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/initiate-laptop-diagnosis', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(initiateLaptopDiagnostics, session, data, err)
    }
}

export const  getLaptopDetails = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        'code' : data.code
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/get-laptop-details', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(getLaptopDetails, session, data, err)
    }
}


export const  getQuoteId = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        'city' : session.CITY??process.env.DEFAULT_CITY,
        'variant_slug' : data.slug,
        'exchange_method' : data.exchange_method,
        'answer_sets' : data.params,
        'pincode' : session.PINCODE
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/website/get-quote/common', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(getQuoteId, session, data, err)
    }
}


export const  updateOffer = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        quote_id : data.quote_id,
        offer : data.offer
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/website/update-quote-offer', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(updateOffer, session, data, err)
    }
}

export const  viewQuote = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        quote_id:data.quote_id
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/website/view-quote', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewQuote, session, data, err)
    }
}


export const  manageCustomer = async (session, data) => {
    try{
        let res;
        if(!data.customer_id){
            const params = {
                access_token : session.ACCESS_TOKEN,
                client : 'web',
                mobile_number : data.mobile,
                whatsapp_number: data.whatsapp_number,
                name : data.name,
                email : data.email,
                whatsapp_enabled : data.whatsapp_enabled,
                gender: data.gender
            }
            res = await axios.post(process.env.RAPI_BASE_URL+'/website/add-user', params, config_urlencoded)
        }else{
            const params = {
                access_token : session.ACCESS_TOKEN,
                client : 'web',
                customer_id: data.customer_id,
                mobile_number : data.mobile,
                whatsapp_number: data.whatsapp_number,
                name : data.name,
                email : data.email,
                whatsapp_enabled : data.whatsapp_enabled,
                gender: data.gender
            }
            res = await axios.post(process.env.RAPI_BASE_URL+'/website/update-user', params, config_urlencoded)
        }
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(manageCustomer, session, data, err)
    }
}

export const  viewAddress = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        customer_id:data.customer_id
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/website/view-address', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewAddress, session, data, err)
    }
}

export const  manageAddress = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        quote_id: data.quote_id,
        customer_id: data.customer_id,
        address_type: data.address_type,
        house_no:data.house_no,
        street_no : data.street_no,
        locality: data.locality,
        pincode : data.pincode
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/manage-address', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(manageAddress, session, data, err)
    }
}

export const  checkAddressServicability = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        quote_id: data.quote_id,
        address_id: data.address_id
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/check-address-servicability', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(checkAddressServicability, session, data, err)
    }
}

export const  viewPaymentMethod = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        quote_id: data.quote_id,
        customer_id: data.customer_id
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/view-payment-methods', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewPaymentMethod, session, data, err)
    }
}

export const  validateVpa = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        vpa: data.upi
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/validate-vpa', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(validateVpa, session, data, err)
    }
}

export const  viewTimeslots = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        quote_id: data.quote_id,
        pincode: data.pincode
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/view-timeslots', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewTimeslots, session, data, err)
    }
}


export const placeOrder = async (session, data)=>{
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        quote_id: data.quote_id,
        mobile_number: data.mobile_number,
        address_id: data.address_id,
        payment_method: data.payment_method,
        bank_acc_name: data.bank_name,
        bank_ifsc: data.bank_no,
        bank_acc_no: data.bank_ifsc,
        paytm_no: data.paytm_no??'',
        voucher_id: data.voucher_id??'',
        pickup_date: data.pickup_date,
        pickup_timeslot: data.pickup_timeslot,
        vpa:data.vpa
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/place-order', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(placeOrder, session, data, err)
    }
}

export const  viewOrderDetails = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        client : 'web',
        order_id: data.order_id
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/website/view-order', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(viewOrderDetails, session, data, err)
    }
}


export const checkQuoteExpiryStatus = async (session, data) => {
    const params = {
        access_token : session.ACCESS_TOKEN,
        quote_id: data.quote_id
    }
    try{
        const res = await axios.post(process.env.RAPI_BASE_URL+'/check-quote-expire-status', params, config_urlencoded)
        return createResponse(true,200, '', res.data )
    }catch(err){
        return await errorHandler(checkQuoteExpiryStatus, session, data, err)
    }
}

export const errorHandler = async(caller, session, data, err)=> {
    if(!err.response){
        return createResponse(false, 500, 'Network Error',
            {message:'Network Error'});
    }
    if(err.response.status == 401 || err.response.data.message==INVALID_TOKEN_TEXT || err.response.data.message == TOKEN_REQUIRED_TEXT){
        if(session){
            await getAccessToken(session)
            return await caller(session, data)
        }else{
            return await caller(data)
        }

    }
    return createResponse(false, err.response.status, err.response.data.message,
        err.response.data)
}