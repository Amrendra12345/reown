import PlaceOrderComponent from "@/components/order-placed/place-order.component";
import {withSessionSsr} from "@/server-libs/session-lib";
import {decrypt_data, getCommonData} from "@/server-libs/helpers";
import {viewOrderDetails} from "@/server-libs/rapiv1_lib";

const OrderDetail = (props) => {
    return <PlaceOrderComponent {...props}></PlaceOrderComponent>
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){
    let {order_id} =  query
    order_id = decrypt_data(order_id)
    let props = {}
    const data = [
    ];
    const result = await getCommonData(req, data)
    if(result.success == true){
        props = {
            ...result.data
        }
        const order_data = await viewOrderDetails(req.session, {order_id})
        if(order_data.success== true){
            props = {
                ...props,
                ...order_data.data
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

export default OrderDetail