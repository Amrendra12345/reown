
import {
    searchCityWebSellOrder,
    searchFamily,
    shareLinkWhatsapp,
    verifyQuoteUser,
    initiateLaptopDiagnostics,
    getLaptopDetails,
    getQuoteId,
    updateOffer,
    manageCustomer,
    viewAddress,
    manageAddress,
    checkAddressServicability,
    viewPaymentMethod,
    validateVpa,
    viewTimeslots,
    placeOrder, checkQuoteExpiryStatus
} from "@/server-libs/rapiv1_lib";
import {withSessionRoute} from "@/server-libs/session-lib";
import {sendInternalMail} from "@/server-libs/apiv1_lib";
import handler from "@/middlewares/middleware";
import * as fs from "fs";
import {pincodeDetails} from "@/server-libs/rapiv2_lib";
import {
    applyDataValidationChecks,
    decrypt_data,
    encrypt_data
} from "@/server-libs/helpers";
import {validateIFSC} from "@/server-libs/razorpay_lib";
import zod from "zod"
import {default500} from "@/server-libs/constants";

handler.post(async (req, res)=>{
        const {endpoint} = req.query
        let result;
        let validation_rules
        let decrypted_data;
        let quote_expiry;
        switch(endpoint)
        {
            case 'search-family':
                validation_rules = zod.object({
                        search_key: zod.string()
                    })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await searchFamily(req.session, req.body)
                break;
            case 'share-app-link':
                validation_rules = zod.object({
                    device_type: zod.string(),
                    mobile_number: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await shareLinkWhatsapp(req.session, req.body)
                break;
            case 'partner-application':
                validation_rules = zod.object({
                    contact_name:zod.string(),
                    city_name:zod.string(),
                    business_name:zod.string(),
                    contact_email:zod.string(),
                    contact_number:zod.string(),
                    enquiry_type:zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                req.body.event = 'partner_application'
                result = await sendInternalMail(req.body)
                break;
            case 'apply-job':
                let data = req.body
                validation_rules = zod.object({
                    name: zod.string(),
                    email: zod.string(),
                    mobile: zod.string(),
                    position: zod.string(),
                    resume: zod.any()
                })
                applyDataValidationChecks(validation_rules, data, res)
                let fileName = req.files.resume.originalFilename
                let ext = fileName.split('.')
                ext = ext[ext.length -1]
                data.resume = {
                    data : fs.readFileSync(req.files.resume.filepath).toString('base64'),
                    filename:req.files.resume.originalFilename,
                    ext:ext
                }
                data.event = 'apply_job'
                result = await sendInternalMail(data)
                break;
            case 'set-city':
                validation_rules = zod.object({
                    city: zod.string(),
                    pincode: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                req.session.CITY = req.body.city
                req.session.PINCODE = req.body.pincode
                await req.session.save()
                result = {success:true}
                break;
            case 'pincode-details':
                validation_rules = zod.object({
                    pincode: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await pincodeDetails(req.body)
                break;
            case 'search-city':
                validation_rules = zod.object({
                    city: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await searchCityWebSellOrder(req.session, req.body)
                break;
            case 'verify-quote-user':
                validation_rules = zod.object({
                    mobile_number: zod.string(),
                    action: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await verifyQuoteUser(req.session, req.body)
                if(result.status_code==200 && req.body.action == 'verify_otp'){
                    result = {
                        success:true,
                        uid: encrypt_data(req.body.mobile_number)
                    }
                    res.status(200).json(result)
                    return
                }
                break;
            case 'initiate-laptop-diagnosis':
                validation_rules = zod.object({
                    os_name: zod.string(),
                    browser_name: zod.string(),
                    os_bit_version: zod.string(),
                    variant_slug: zod.string(),
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await initiateLaptopDiagnostics(req.session, req.body)
                break;
            case 'get-laptop-details':
                validation_rules = zod.object({
                    code: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await getLaptopDetails(req.session, req.body)
                break;
            case 'get-quote-id':
                validation_rules = zod.object({
                    quote_user_id: zod.string(),
                    slug: zod.string(),
                    exchange_method: zod.string(),
                    params: zod.any()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                if(decrypt_data(req.body.quote_user_id)!=req.body.params.mobile_number)
                {
                    res.status(400).json({message:'Invalid request'})
                    return
                }
                result = await getQuoteId(req.session, req.body)
                if(result.success && result.data.quote_details.quote_id)
                {
                    result.data.quote_details.quote_id = encrypt_data(result.data.quote_details.quote_id)
                    delete result.data.quote_details.quote_key
                    delete result.data.quote_details.servicer_id
                }
                break;
            case 'update-offer':
                validation_rules = zod.object({
                    quote_id: zod.string(),
                    offer: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                req.body.quote_id = decrypt_data(req.body.quote_id)
                result = await updateOffer(req.session, req.body)
                break;
            case 'manage-customer':
                validation_rules = zod.object({
                    quote_key: zod.string(),
                    mobile: zod.string(),
                    name: zod.string(),
                    email: zod.string(),
                    gender: zod.string(),
                    whatsapp_number: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                decrypted_data = decrypt_data(req.body.quote_key).split("***")
                req.body.quote_id = decrypted_data[0]
                if(req.body.mobile!=decrypted_data[1])
                {
                    res.status(400).json({message:'Invalid request'})
                    return
                }
                if(req.body.customer_key)
                    req.body.customer_id = decrypt_data(req.body.customer_key)

                quote_expiry = await checkQuoteExpiryStatus(req.session, req.body)
                if(quote_expiry.status_code===200)
                {
                    if(quote_expiry.data.quote_expired || quote_expiry.data.order_created){
                        res.status(400).json({success:false,message:'Quote is expired'})
                    }
                }else{
                    res.status(500).json(default500)
                }

                result = await manageCustomer(req.session, req.body)
                if(result.success){
                    result.data.customer_details.customer_id = encrypt_data(result.data.customer_details.customer_id)
                }
                break;
            case 'view-address':
                validation_rules = zod.object({
                    customer_key: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                req.body.customer_id = decrypt_data(req.body.customer_key)
                result = await viewAddress(req.session, req.body)
                if(result.success){
                    for (const addr in result.data.address) {
                        result.data.address[addr].address_id =encrypt_data(result.data.address[addr].address_id)
                    }
                }
                break;
            case 'manage-address':
                validation_rules = zod.object({
                    customer_key: zod.string(),
                    quote_key: zod.string(),
                    address_type: zod.string(),
                    house_no: zod.string(),
                    street_no: zod.string(),
                    locality: zod.string(),
                    pincode: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                req.body.customer_id = decrypt_data(req.body.customer_key)
                decrypted_data = decrypt_data(req.body.quote_key).split("***")
                req.body.quote_id = decrypted_data[0]

                quote_expiry = await checkQuoteExpiryStatus(req.session, req.body)
                if(quote_expiry.status_code===200)
                {
                    if(quote_expiry.data.quote_expired || quote_expiry.data.order_created){
                        res.status(400).json({success:false,message:'Quote is expired'})
                    }
                }else{
                    res.status(500).json(default500)
                }

                result = await manageAddress(req.session, req.body)
                if(result.success){
                    for (const addr in result.data.address) {
                        result.data.address[addr].address_id =encrypt_data(result.data.address[addr].address_id)
                    }
                }
                break;
            case 'check-address-servicability':
                validation_rules = zod.object({
                    address_key: zod.string(),
                    quote_key: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                req.body.address_id = decrypt_data(req.body.address_key)
                decrypted_data = decrypt_data(req.body.quote_key).split("***")
                req.body.quote_id = decrypted_data[0]

                result = await checkAddressServicability(req.session, req.body)
                break;
            case 'view-payment-methods':
                validation_rules = zod.object({
                    quote_key: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                decrypted_data = decrypt_data(req.body.quote_key).split("***")
                req.body.quote_id = decrypted_data[0]

                quote_expiry = await checkQuoteExpiryStatus(req.session, req.body)
                if(quote_expiry.status_code===200)
                {
                    if(quote_expiry.data.quote_expired || quote_expiry.data.order_created){
                        res.status(400).json({success:false,message:'Quote is expired'})
                    }
                }else{
                    res.status(500).json(default500)
                }

                result = await viewPaymentMethod(req.session, req.body)
                break;
            case 'validate-ifsc':
                validation_rules = zod.object({
                    ifsc: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await validateIFSC(req.body.bank_ifsc)
                break;
            case 'validate-vpa':
                validation_rules = zod.object({
                    upi: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                result = await validateVpa(req.session, req.body)
                break;
            case 'view-timeslots':
                validation_rules = zod.object({
                    quote_key: zod.string(),
                    pincode: zod.string()
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                decrypted_data = decrypt_data(req.body.quote_key).split("***")
                req.body.quote_id = decrypted_data[0]
                quote_expiry = await checkQuoteExpiryStatus(req.session, req.body)
                if(quote_expiry.status_code===200)
                {
                    if(quote_expiry.data.quote_expired || quote_expiry.data.order_created){
                        res.status(400).json({success:false,message:'Quote is expired'})
                    }
                }else{
                    res.status(500).json(default500)
                }
                result = await viewTimeslots(req.session, req.body)
                break;
            case 'place-order':
                validation_rules = zod.object({
                    quote_key: zod.string(),
                    mobile_number: zod.string(),
                    payment_method: zod.string(),
                    address_key: zod.string(),
                    timeslot: zod.string(),
                })
                applyDataValidationChecks(validation_rules, req.body, res)
                decrypted_data = decrypt_data(req.body.quote_key).split("***")
                req.body.quote_id = decrypted_data[0]
                req.body.address_id = decrypt_data(req.body.address_key)
                // Prepare pickup_date and pickup_timeslot
                req.body.pickup_date = req.body.timeslot.split(' / ')[0]
                req.body.pickup_timeslot = req.body.timeslot.split(' / ')[1];
                quote_expiry = await checkQuoteExpiryStatus(req.session, req.body)
                if(quote_expiry.status_code===200)
                {
                    if(quote_expiry.data.quote_expired || quote_expiry.data.order_created){
                        res.status(400).json({success:false,message:'Quote is expired'})
                    }
                }else{
                    res.status(500).json(default500)
                }

                result = await placeOrder(req.session, req.body)
                if(result.data.order_id)
                    result.data.order_id = encrypt_data(result.data.order_id+'')
                break;
        }
        if(result.success){
            res.status(200).json(result.data)
            return
        }

        res.status(result.status_code).json(result.data)
})


export const config = {
    api: {
        bodyParser: false,
    },
}

export default withSessionRoute(handler)