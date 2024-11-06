import OrderDetailsComponent from "@/components/reown/order-details/order-details.component";
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const OrderDetails = (props) => {
    return <OrderDetailsComponent {...props} />
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){

    const data = [];
    const result = await getCommonData(req, data)
    if(result.success == true){
        return {
            props: {
                ...result.data,
            }
        }
    }
    return {
        props:{}
    }
})


export default OrderDetails;