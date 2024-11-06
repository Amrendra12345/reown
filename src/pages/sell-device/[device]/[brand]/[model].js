import {getCommonData} from "@/server-libs/helpers";
import {withSessionSsr} from "@/server-libs/session-lib";
import SellDeviceComponent from "@/components/sellDevice/SellDeviceComponent";


const Sell = (props) => {
    return (
        <>
        <div className="container">
            <SellDeviceComponent {...props} />
        </div>
     </>
	);
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req,query}){
    const {device,brand,model} =  query
    let page_name;
    let data;
    if(model.search(brand)==-1){
        page_name = 'variants-list'
        data =[
            {
                data_name: 'view-variants',
                city: req.session.CITY??process.env.DEFAULT_CITY,
                family_slug: model,
                make_slug: brand
            }
        ]
    }else{
        page_name = 'variant-details'
        data =[
            {
                data_name: 'view-variant',
                city: req.session.CITY??process.env.DEFAULT_CITY,
                variant_slug: model
            }
        ]
    }

    data = [
        ...data,
        {
            data_name:'top-brands'
        },
        {
            data_name:'top-models'
        }
    ]

    const result = await getCommonData(req, data)

    if(result.success == true){
        if(result.status_code === 500){
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }
        else if(page_name == 'variants-list' && !result.data.family_details){
            return {
                notFound: true
            }
        }else if(page_name == 'variant-details' && !result.data.variant_details){
            return {
                notFound: true
            }
        }
        return {
            props: {
                ...result.data,
                category: device,
                brand:brand.toLowerCase(),
                page_name:page_name
            }
        }
    }else{
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
})

export default Sell;