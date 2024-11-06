import axios from "axios";
import {config_urlencoded} from "@/frontend-libs/constants";
import {createResponse} from "@/frontend-libs/webapi_lib";

export const create400Response = (res) => {
    return createResponse(400, res.data.message, res.data )
}

export const createExceptionResponse = (err) => {
    return createResponse(err.response.status??500, err.response.data.message??'Something went wrong', err.response.data??[])
}

export const createSlug = (title, product_sku_id) => {
    return (title.replace(/[^A-Za-z0-9-]+/g, '-')+'-'+product_sku_id).toLowerCase();
}

// export const getHeadersWithAuth = (type='request') => {
//     let auth = localStorage.getItem('auth')
//     if(!auth)
//         return null
//     auth = JSON.parse(auth)
//     if(!auth.token)
//         return null
//     return {
//         headers: {
//             ...config_urlencoded.headers,
//             'Authorization': 'Bearer ' + ((type=='request')?auth.token:auth.refreshToken)
//         }
//     }
// }

export const getHeadersWithAuth = (token) => {
    return {
        headers: {
            ...config_urlencoded.headers,
            'Authorization': 'Bearer ' + token
        }
    }
}

export const loginSendOtp = async (mobile_number) => {
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/login/send-otp', {
            mobile_number
        }, config_urlencoded)
        if(res.data.success){
            return createResponse(200,res.data.message??'success', res.data )
        }
        return create400Response(res)
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const loginVerifyOtp = async (mobile_number, otp) => {
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/login/verify-otp', {
            mobile_number,
            otp
        }, config_urlencoded)
        if(res.data.profile){
            return createResponse(200,'success', res.data )
        }
        return create400Response(res)
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const signupSendOtp = async (name, email, mobile_number, party_gender) => {
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/signup/send-otp', {
            mobile_number,
            name,
            email,
            party_gender,
            party_type:'customer'
        }, config_urlencoded)
        if(res.data.success){
            return createResponse(200,res.data.message??'success', res.data )
        }
        return create400Response(res)
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const signupVerifyOtp = async (mobile_number, otp) => {
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/signup/verify-otp', {
            mobile_number,
            otp
        }, config_urlencoded)
        if(res.data.profile){
            return createResponse(200,'success', res.data )
        }
        return create400Response(res)
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const refreshBearerToken = async (token) => {

    let configs = getHeadersWithAuth(token)
    try{
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/refresh-tokens', configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const getProductsList = async (search='', make_id=null, processor=null, offset=0, limit=20, sort_by=null, get_filters=0) => {
    try{
        let post_data = new FormData()
        post_data.append('search', search)
        post_data.append('offset', offset)
        post_data.append('limit', limit)
        post_data.append('sort_by', sort_by)
        post_data.append('get_filters', get_filters)
        if(Array.isArray(make_id)){
            make_id.forEach((item)=>{
                post_data.append('make_id[]', item)
            })
        }else if(make_id!='' && make_id!=null && make_id!=undefined){
            post_data.append('make_id[]', make_id)
        }
        if(Array.isArray(processor)){
            processor.forEach((item)=>{
                post_data.append('processors[]', item)
            })
        }else if(processor!='' && processor!=null && processor!=undefined){
            post_data.append('processors[]', make_id)
        }
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/models', post_data, config_urlencoded)
        return createResponse(200,'success', res.data )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const getFilters = async () => {
    try{
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/get-filters')
        return createResponse(200,'success', res.data )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const getLaptopDetails = async (product_sku_id) => {
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/models/detail', {
            product_sku_id
        }, config_urlencoded)
        if(res.data.product){
            return createResponse(200,'success', res.data )
        }
        return create400Response(res)
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const checkPincodeServiceability = async (to_pincode)=>{
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/check-pincode-servicability', {
            to_pincode
        }, config_urlencoded)
        return createResponse(200,res.data.message, res.data )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const addToCart = async (token, product_sku_id, quantity, custom_ram, custom_hdd) => {
    let configs = getHeadersWithAuth(token)
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/cart/add', {
            product_sku_id, quantity, custom_ram, custom_hdd
        }, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const clearCart = async (token, product_sku_id=null) => {
    let configs = getHeadersWithAuth(token)
    try{
        const url = '/reown/cart/clear'+(product_sku_id?('?product_sku_id='+product_sku_id):'')
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+url, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const getCart = async (token) => {
    let configs = getHeadersWithAuth(token)
    try{
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/cart', configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const getProfileDetails = async (token) => {
    let configs = getHeadersWithAuth(token)
    try{
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/manage-profile/get-profile-full-details', configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const updateDeliveryAddressDetails = async (token, name, email, shipto_houseno, shipto_street, shipto_locality, shipto_city, shipto_state, shipto_pincode, billing_same_as_shipping, billing_houseno, billing_street, billing_locality, billing_city, billing_state, billing_pincode, buying_for_business, gst_no, company_name) => {
    let configs = getHeadersWithAuth(token)
    const data = {
        name, email, shipto_houseno, shipto_street, shipto_locality, shipto_city, shipto_state, shipto_pincode, billing_same_as_shipping, billing_houseno, billing_street, billing_locality, billing_city, billing_state, billing_pincode, buying_for_business, gst_no, company_name
    }
    try{
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/update-delivery-address-details', data, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const checkEstimatedDelivery = async (token, to_pincode) => {
    try{
        let configs = getHeadersWithAuth(token)
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/check-estimated-delivery', {to_pincode}, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}


export const applyCoupon = async (token, coupon_code) => {
    try{
        let configs = getHeadersWithAuth(token)
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/validate-coupon', {coupon_code}, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}


export const revokeCoupon = async (token) => {
    try{
        let configs = getHeadersWithAuth(token)
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/revoke-coupon', configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const getCheckoutDetails = async (token) => {
    try{
        let configs = getHeadersWithAuth(token)
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/get-checkout-details', configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}

export const purchaseOrdersList = async (token, limit='', offset='') => {
    try{
        let configs = getHeadersWithAuth(token)
        const res = await axios.post(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/orders-list', {limit, offset}, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}


export const getOrderDetails = async (token, order_id) => {
    try{
        let configs = getHeadersWithAuth(token)
        const res = await axios.get(process.env.NEXT_PUBLIC_RAPIV2_BASE_URL+'/reown/orders-details/'+order_id, configs)
        return createResponse(200,res.data.message??'', res.data??[] )
    }catch(err){
        return createExceptionResponse(err)
    }
}