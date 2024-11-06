import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import React, {useContext, useRef, useState} from "react";
import {generateCommonQuote, verifyQuoteUser} from "@/frontend-libs/webapi_lib";
import {QuestionAnswersContext} from "@/context/question-answers.context";
import {get_visitor_browser, get_visitor_os} from "@/frontend-libs/helpers";

const VerifyUserComponent = (props) => {

    const [enterOtp, setEnterOtp] = useState(false)
    const [error, setError] = useState('');
    const mobile_ref = useRef()
    const otp_ref = useRef()
    const {quoteGenerated, setQuoteGenerated, answersSet, dCode,autoQCData, variantSlug, exchangeMethod, setAnswerSet,setDCode} = useContext(QuestionAnswersContext)

    const handleNextClick = async () => {
        if(!enterOtp){
            otp_ref.current.value=''
            const send_result = await verifyQuoteUser(mobile_ref.current.value, 'send_otp')
            if(send_result.status == 200){
                mobile_ref.current.value=send_result.data.mobile_number
                setEnterOtp(true)
                setError('')
                let new_answer_set = Object.assign({}, answersSet)
                new_answer_set['mobile_number']=send_result.data.mobile_number
                setAnswerSet(new_answer_set)
            }else{
                setError(send_result.message)
            }
        }else{
            const verify_result = await verifyQuoteUser(mobile_ref.current.value, 'verify_otp', otp_ref.current.value)
            if(verify_result.status == 200){
                setError('')
                await getQuoteId(verify_result.data.uid)
            }else{
                setError(verify_result.message)
            }
        }
    }

    const getQuoteId = async (quote_user_id) => {

        let params = answersSet
        if(dCode && autoQCData.variant_slug == variantSlug)
            params['system_overview'] =  dCode
        params['browser'] = get_visitor_browser()
        params['os_version'] = ''
        if (params['os_version'].search("windows") != -1)
            params['os_type']="windows"
        params['os_type']= params['os_version']

        const quote_result = await generateCommonQuote(params, variantSlug, exchangeMethod, quote_user_id)
        if(quote_result.status == 200){
            setQuoteGenerated(quote_result.data)
        }else{

        }
    }


    const handleBackClick = () => {
        setEnterOtp(false)
        setError('')
    }

    return (
        <>
            <div className={!enterOtp? "show":"hide"}>
                <div className="pageTitle">
                    <p> ANSWER FEW QUESTIONS </p>
                    <button type="button" className="btn-back" onClick={props.back}></button> 
                </div>
                {props.ques_value.answers.map(function(answer){
                    return (<div className="form-group" key={answer.ans_id}>
                        <div className="form-group-input">
                            <p>{answer.ans_title}</p>
                            <p>{answer.ans_description}</p>
                        </div>
                        <div className="form-group-input">
                            <input className="form-control" type="text" ref={mobile_ref} maxLength="10"/>
                            <span className="error">{error}</span>
                        </div>
                        
                    </div>)
                })}
                <div className='next-btn'>
                    <button type='button' className="btn btn-orange" onClick={handleNextClick}>Next</button>
                </div>   
            </div>        
            <div className={enterOtp ? "show":"hide"}>
                <div className="pageTitle">
                    <p> OTP VERIFICATION </p>
                    <button type="button" className="btn-back" onClick={props.back}></button> 
                </div>
                <div className="form-group">
                    <div className="form-group-input">
                        <p>Enter OTP sent on <span className="mobNumber"> {mobile_ref.current?mobile_ref.current.value:''} </span></p>                            
                    </div>
                    <div className="form-group-input">
                        <input className="form-control" type="text" ref={otp_ref} maxLength="4"/>
                        <span className="error">{error}</span>
                    </div> 
                </div>
                <div className='next-btn'>
                    <button type='button' className="btn btn-orange" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </>    
    )

}


export default VerifyUserComponent