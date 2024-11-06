import React, {useContext, useRef, useState} from "react";
import {ProcessOrderContext} from "@/context/process-order.context";
import {checkUPIValidity} from "@/frontend-libs/webapi_lib";

const UpiComponent = (props) => {

    const {orderParams, setOrderParams}  = useContext(ProcessOrderContext)
    const [error, setError] = useState('')
    const upi = useRef()

    const validateInputs = ()=>{
        if(upi.current.value==''){
            setError("Please enter valid upi id")
            return false
        }
        setError('')
        return true
    }

    const validateUPI = async (upi) => {
        const upi_result = await checkUPIValidity(upi)
        if(upi_result.status==200)
        {
            setError('')
            return true
        }else{
            setError('Upi Id is not valid')
            return false
        }
    }

    const handleSubmit = async () => {
        if(validateInputs() && (await validateUPI(upi.current.value))){
            orderParams['payment_method'] = props.payment_method_data.method_name
            orderParams['vpa'] = upi.current.value
            const newOrderParams = Object.assign({}, orderParams)
            setOrderParams(newOrderParams)
            props.moveNext()
        }
    }

    return (
        <>
            <div className="subTitle">
                <p>ENTER YOUR UPI DETAILS</p>
                <p className="text-muted"> Please enter correct payment details and double check before proceeding </p>
            </div>
            <div className="upiDetails">
                <div className="form-group">
                    <div className='form-group__input'>
                        <label>Customer UPI ID</label>
                        <input type="text" className="form-control" ref={upi}/>
                    </div>
                    <div className="form-group__input"></div>
                </div>
                {error?<p className="error">{error}</p>:''}
                <div className="next-btn">
                <button type="button" className="btn btn-orange" onClick={()=>{handleSubmit()}}>
                    Next
                </button>
                </div>
            </div>
        </>
    )
}

export default UpiComponent