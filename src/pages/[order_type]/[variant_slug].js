
import QusAnsComponent from "@/components/ques-ans/QusAnsComponent";
import {getCommonData} from "@/server-libs/helpers";
import {withSessionSsr} from "@/server-libs/session-lib";
import {viewQuestions} from "@/server-libs/rapiv1_lib";

const Variant = (props) => {
    return (
        <div className="container">
            <div className="page_card">                
                <QusAnsComponent {...props}/>
            </div>
        </div>
    );
}


export const getServerSideProps = withSessionSsr(async function getServerSideProps({req,query}){
    const {variant_slug, order_type} =  query
    let data;
    data = [
        {
            data_name:'top-brands'
        },
        {
            data_name:'top-models'
        }
    ]

    const result = await getCommonData(req, data)

    if(result.success == true){
        const questions_param = {
            city: req.session.city??process.env.DEFAULT_CITY,
            variant_slug: variant_slug,
            exchange_method: order_type
        }
        const questions_data = await viewQuestions(req.session, questions_param)
        if(questions_data.success==true){
            result.data.variant_details = questions_data.data.variant_details
            result.data.question_answer_sets = questions_data.data.question_answer_sets
        }else{
            if(questions_data.status_code===500){
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
        }
        return {
            props: {
                ...result.data,
                variant_slug: variant_slug,
                exchange_method: order_type
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

export default Variant;