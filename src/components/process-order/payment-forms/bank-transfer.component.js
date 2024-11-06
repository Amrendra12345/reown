import React, {useContext, useRef, useState} from "react";
import {ProcessOrderContext} from "@/context/process-order.context";
import {checkIFSCValidity} from "@/frontend-libs/webapi_lib";

const BankTransferComponent = (props) => {

    const {orderParams, setOrderParams}  = useContext(ProcessOrderContext)
    const bank_account = useRef()
    const confirm_account = useRef()
    const account_holder = useRef()
    const bank_ifsc = useRef()
    //const [enableNext, setEnableNext] = useState(false)
    const [ifscResult, setIFSCResult] = useState('')
    const [error, setError] = useState('')


    const validateInputs =()=>{
        if(account_holder.current.value==''){
            setError("Please enter valid account name")
            //setEnableNext(false)
            return false
        }
        if(bank_ifsc.current.value.length!=11){
            setError("Please enter valid ifsc code")
            //setEnableNext(false)
            return false
        }
        if(bank_account.current.value==''){
            setError("Please enter valid account number")
            //setEnableNext(false)
            return false
        }
        if(bank_account.current.value!=confirm_account.current.value){
            setError("Account number does not match with confirm account number")
            //setEnableNext(false)
            return false
        }
        setError('')
        return true
    }


    const handleSubmit = () => {
        //put validation
        //if(enableNext){
        if(validateInputs() && ifscResult && ifscResult.indexOf('Error')==-1){
            orderParams['payment_method'] = props.payment_method_data.method_name
            orderParams['bank_name'] = account_holder
            orderParams['bank_ifsc'] = bank_ifsc
            orderParams['bank_no'] = bank_account
            const newOrderParams = Object.assign({}, orderParams)
            setOrderParams(newOrderParams)
            props.moveNext()
        }
        //}
    }

    const validateIFSC = async () => {
            bank_ifsc.current.value = bank_ifsc.current.value.toUpperCase()

            if(bank_ifsc.current.value.length == 11){
                const ifsc_result = await checkIFSCValidity(bank_ifsc.current.value)
                if(ifsc_result.status==200)
                {
                    setIFSCResult(ifsc_result.data.ifsc_details.BANK+','+ifsc_result.data.ifsc_details.BRANCH+', '+ifsc_result.data.ifsc_details.CITY)
                }else{
                    //setEnableNext(false)
                    setIFSCResult('Error:'+ifsc_result.message)
                }
            }
    }

    return (
       <>
        <div className="subTitle">
            <p>ENTER YOUR BANKING DETAILS </p>
            <p> Please enter correct payment details and double check before proceeding </p>
        </div>
        <div className="bankingDetails">
            <div className="form-group">
                <div className='form-group__input'>
                    <label>Account Name *</label>
                    <input type="text" className="form-control" ref={account_holder} />
                </div>
                <div className='form-group__input'>
                    <label>IFSC Code *</label>
                    <input type="text" className="form-control" ref={bank_ifsc} onInput={()=>validateIFSC(bank_ifsc)} />
                    {ifscResult ? (<div className={ifscResult.indexOf('Error')==-1?'success':'error'}>{ifscResult}</div>):''}
                </div>
            </div>
            <div className="form-group">
                <div className='form-group__input'>
                    <label>Account Number *</label>
                    <input type="text" className="form-control" ref={bank_account}/>
                </div>
                <div className='form-group__input'>
                    <label> Confirm Account Number *</label>
                    <input type="text" className="form-control"  ref={confirm_account}/>
                </div>
            </div>
            <div className="next-btn">
                {error?<p className="error">{error}</p>:''}
                <button type='button' className={` btn btn-orange`} onClick={handleSubmit}>Next</button>
            </div>
        </div>
    </>
    )
}

export default BankTransferComponent