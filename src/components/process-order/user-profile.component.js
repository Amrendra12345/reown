import React, {useContext, useEffect, useRef, useState} from 'react'
import {isEmail} from "@/frontend-libs/helpers";
import {manageCustomer} from "@/frontend-libs/webapi_lib";
import {ProcessOrderContext} from "@/context/process-order.context";

const UserProfileComponent = (props) => {
    const {customerKey,setCustomerKey,quoteKey, orderParams, setOrderParams} = useContext(ProcessOrderContext)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const mobileRef = useRef()
    const whatsappRef = useRef()
    const maleRef = useRef()
    const femaleRef = useRef()
    const sameAsMobRef = useRef()
  
    const validateInputs = () => {
        const f = nameRef.current.value
        const g = maleRef.current.checked?maleRef.current.value:(femaleRef.current.checked?femaleRef.current.value:'')
        const e = emailRef.current.value

        if (f.length <= 2 || !/^[a-zA-Z\s]*$/.test(f)) {
            return {
                valid:false,
                message:"Please select valid name"
            };
        }

        if (!g) {
            return {
                valid:false,
                message:"Please select gender"
            };
        }

        if (!isEmail(e)) {
            return {
                valid:false,
                message:"Please select valid email"
            };
        }
        return {
            valid: true
        };
    }

    const handleSubmit = async () => {
        const validate_result =validateInputs()
        if(!validate_result.valid){
            setError(validate_result.message);
            setTimeout(function () {
                setError(null)
            }, 8000);
            return false;
            
        }
        const gender = maleRef.current.checked?maleRef.current.value:(femaleRef.current.checked?femaleRef.current.value:'')
        const result = await manageCustomer(quoteKey, customerKey, props.quote_details.customer_mobile, whatsappRef.current.value, gender, nameRef.current.value,emailRef.current.value, whatsappRef.current.value?'Y':'N')
        if(result.status == 200){
            setCustomerKey(result.data.customer_details.customer_id)
            orderParams['party_id'] = result.data.customer_details.customer_id
            orderParams['mobile'] = props.quote_details.customer_mobile
            orderParams['first_name'] = nameRef.current.value
            orderParams['gender'] = gender
            orderParams['email'] = emailRef.current.value
            orderParams['quote_key'] = quoteKey
            const newOrderParams = Object.assign({}, orderParams)
            setOrderParams(newOrderParams)
            props.moveToNext()
        }else{

            if(result.message.search('expired')!=-1){
                //open pop up for quote expired
                props.setQuoteExpired(true)
            }

            setError(result.message)
        }
    }

    const handleSameAsMobileClick = () => {
        if(sameAsMobRef.current.checked){
            whatsappRef.current.value = mobileRef.current.value
            whatsappRef.current.readOnly = true
        }else{
            whatsappRef.current.value = ''
            whatsappRef.current.readOnly = false
        }
    }

    useEffect(()=>{
        sameAsMobRef.current.checked = (props.user_details && props.user_details.whatsapp_number==props.quote_details.customer_mobile?true:false)
        maleRef.current.checked = (props.user_details && props.user_details.gender.toLowerCase() =='male'?true:false)
        femaleRef.current.checked = (props.user_details && props.user_details.gender.toLowerCase() =='female'?true:false)
        const result = validateInputs()
        if(!result.valid){
            setDisabled(true)
        }
    })

    return (
        <>
            <div className='pageTitle mt-0'>
                <p> ENTER YOUR DETAILS </p>
            </div>
            
            <div className='yourDetails'>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <label htmlFor="fullname">Full Name</label>
                        <input type='text' className='form-control'id="fullname"  defaultValue={props.user_details.first_name??''} ref={nameRef} />
                    </div>
                    <div className='form-group__input'>
                        <label htmlFor="name">Gender</label>
                        <div className='radio_inline'>
                            <span><input type='radio' name='gender'  ref={maleRef} /> Male </span>
                            <span> <input type='radio' name='gender' value="female" ref={femaleRef}/> Female </span>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <label htmlFor="email">Email</label>
                        <input type='text' className='form-control'id="email" defaultValue={props.user_details.email??''} ref={emailRef} />
                    </div>
                    <div className='form-group__input'>
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type='text' className='form-control'id="mobile" value={props.quote_details.customer_mobile} readOnly ref={mobileRef} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <label htmlFor="whatsapp">WhatsApp Number For Order Updates</label>
                        <input type='text' className='form-control'id="whatsapp" readOnly value={props.user_details.whatsapp_number ?? ''}
                            ref={whatsappRef} />
                    </div>
                    <div className='form-group__input'></div>
                </div>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <input type='checkbox' id="sameAsMobile" onClick={handleSameAsMobileClick} ref={sameAsMobRef} />
                        <label className='sameAsMobile' htmlFor='sameAsMobile'> Same as Mobile number</label>
                    </div>
                </div>
                <div className='next-btn'>
                   <button type='button' className={`btn btn-orange ${disabled ? 'disabled_next':''}`} onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </>
    )
}

export default UserProfileComponent