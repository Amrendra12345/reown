import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import {getLaptopDetails} from "@/frontend-libs/reown-lib";
import LaptopDetailsComponent from "@/components/reown/buy-laptop-details/laptopDetails.component";

const LaptopDetails = (props) => {
    return <LaptopDetailsComponent {...props}></LaptopDetailsComponent>
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){

    const {product_slug} = query
    const product_sku_id = product_slug.split('-').pop()
    const data = [];
    const result = await getCommonData(req, data)
    if(result.success == true){
        const models_res = await getLaptopDetails(product_sku_id)
        if(models_res.status==200){
            return {
                props: {
                    ...result.data,
                    productDetails: models_res.data
                }
            }
        }else if(models_res.status == 400 && models_res.message.search(/does not exist/ig)!=-1) {
            return {
                notFound: true
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

export default LaptopDetails