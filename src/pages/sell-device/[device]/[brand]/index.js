import {getCommonData, isCategoryEnabled} from "@/server-libs/helpers";
import { withSessionSsr } from "@/server-libs/session-lib";
import BrandComponent from '@/components/brand/BrandComponent';
import {getCategoryName} from "@/frontend-libs/helpers";


const Sell = (props) => {
    return (
            <BrandComponent {...props} />
    )
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){
    const {device,brand} =  query
    if(isCategoryEnabled(device)){
        const data = [
            {
                data_name: 'view-family',
                city: req.session.CITY_NAME??process.env.DEFAULT_CITY,
                brand_type: getCategoryName(device),
                brand_name: brand
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
                    category: device,
                    brand:brand.toLowerCase()
                }
            }
        }
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        notFound: true
    }
})

export default Sell;