import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import {getProductsList} from "@/frontend-libs/reown-lib";
import BuyLaptopComponent from "@/components/reown/buy-laptop/buy-laptop.component";

const BuyLaptopPage = (props) => {
    return <BuyLaptopComponent {...props}></BuyLaptopComponent>
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){


    const {page,search} = query
    const make_id = query['make_id[]']
    const processors = query['processors[]']
    const data = [];
    const result = await getCommonData(req, data)
    if(result.success == true){
        let limit = 20
        let offset = 0
        if(page!=undefined)
            offset = (parseInt(page)-1)*limit
        const models_res = await getProductsList(search, make_id, processors, offset, limit)
        if(models_res.status==200){
            return {
                props: {
                    ...result.data,
                    productsData: models_res.data
                }
            }
        }else{
            return {
                props: {
                    ...result.data,
                }
            }
        }
    }
    return {
        props:{}
    }
})

export default BuyLaptopPage