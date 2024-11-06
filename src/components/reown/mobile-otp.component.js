import React, {useState} from 'react'
import {authActions, verifyLoginOtp} from "@/redux/auth/auth.reducer";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import OTPInput from "react-otp-input";
import { AiFillCloseSquare } from "react-icons/ai";
import {FaLock} from "react-icons/fa";

const MobileOtpComponent = (props) => {

    const dispatch = useDispatch()
    const [otp, setOtp] = useState('');


    const auth = useSelector(getAuthData)

    const handleSubmitOtp = () => {
        // put validations for otp
        const mobile_number = auth.userMobile
        if(props.verify_type == 'login'){
            dispatch(authActions.verifyLogin({mobile_number, otp}))
        }else{
            dispatch(authActions.verifySignup({mobile_number, otp}))
        }

    }

  return (
    <div className='reown-login otp'>
         <div className='close_login' onClick={()=>dispatch(authActions.closeSidebar())}>
            <AiFillCloseSquare/>
        </div>
        <div className="logo">
            <h4>OTP</h4>          
         </div>
         <div className="page_card">
            <div className="userIcon">
                <FaLock/>
            </div>
            <div className='pageTitle'>
                <p>Enter OTP</p>
            </div>
            
            <p>We’ve sent an OTP on <span> {auth.userMobile} </span></p>
            <div className="inputBox">
                <label htmlFor="otp">OTP<sup>*</sup> </label>
                
                <div className='otpInput'>
                    <OTPInput value={otp}
                              onChange={setOtp}
                              numInputs={4}                            
                              renderInput={(props) => <input {...props} required/>}/>
                </div>
            </div>
            <div className="inputBox mb-2">
                <a href="">Resend OTP</a>
            </div>
             {auth.errorMessage?<div className="error">{auth.errorMessage}</div>:''}
            <div className="next-btn">
                <button type="button" className="btn btn-orange" onClick={handleSubmitOtp}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default MobileOtpComponent;