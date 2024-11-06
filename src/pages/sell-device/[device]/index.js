
import {getCommonData, isCategoryEnabled} from "@/server-libs/helpers";
import { withSessionSsr } from "@/server-libs/session-lib";
import BrandComponent from '../../../components/brand/BrandComponent';
import {getCategoryName} from "@/frontend-libs/helpers";

const Sell = (props) => {
    return (
        <>
            <BrandComponent {...props}/>
        </>
    )
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){
    const {device} =  query
    if(isCategoryEnabled(device)){
        const data = [
            {
                data_name:'view-brands',
                product_type: getCategoryName(device),
                city:req.session.CITY??process.env.DEFAULT_CITY
            },
            {
                data_name:'top-brands'
            },
            {
                data_name:'top-models'
            }
        ];
        const result = await getCommonData(req, data)
        if(result.success == true){
            return {
                props: {
                    ...result.data,
                    category:device
                }
            }
        }
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }else{
        return {
            notFound: true
        }
    }
})

export default Sell;