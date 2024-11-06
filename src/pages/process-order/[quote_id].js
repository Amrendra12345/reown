import {decrypt_data, encrypt_data, getCommonData} from "@/server-libs/helpers";
import { withSessionSsr } from "@/server-libs/session-lib";
import ProcessOrderComponent from "@/components/process-order/process-order.component";
import {checkQuoteExpiryStatus, viewQuote} from "@/server-libs/rapiv1_lib";


const Sell = (props) => {
    return (
        
        <ProcessOrderComponent {...props}/>
       
    )
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){
    let {quote_id} =  query
    quote_id = decrypt_data(quote_id)
    let props = {}
    const data = [
    ];
    const result = await getCommonData(req, data)
    if(result.success == true){
        props = {
            ...result.data
        }

        //redirect to home if quote is expired
        const quote_expiry = await checkQuoteExpiryStatus(req.session, {quote_id})
        if(quote_expiry.success!==true || quote_expiry.data.quote_expired || quote_expiry.data.order_created)
                return {
                    redirect: {
                        destination: '/',
                        permanent: false,
                    },
                }

        const quote_data = await viewQuote(req.session, {quote_id})
        if(quote_data.success== true){
            if(quote_data.data.user_details)
                quote_data.data.user_details.customer_id = encrypt_data(quote_data.data.user_details.customer_id)
            props = {
                ...props,
                ...quote_data.data,
                quote_key: encrypt_data(quote_id+'***'+quote_data.data.quote_details.customer_mobile)
            }
            return {
                props
            }
        }else{
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    }
})

export default Sell;