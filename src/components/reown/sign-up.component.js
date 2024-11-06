import React, {useRef} from 'react'
import {authActions} from "@/redux/auth/auth.reducer";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {BsPersonPlus} from "react-icons/bs"
import { AiFillCloseSquare } from "react-icons/ai";

const SignUpComponent = () => {

  const dispatch = useDispatch()
  const nameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()
  const maleRef = useRef()
  const femaleRef = useRef()
  const otherRef = useRef()

  const auth = useSelector(getAuthData)

  const handleSubmit = () => {
      const name = nameRef.current.value
      const email = emailRef.current.value
      const mobile_number = mobileRef.current.value
      const party_gender = maleRef.current.checked?'male':(femaleRef.current.checked?'female':'other')
      dispatch(authActions.signupOtp({name, email, mobile_number, party_gender}))
  }
  return (
    <div className='reown-login sigup'>
         <div className='close_login' onClick={()=>dispatch(authActions.closeSidebar())}>
            <AiFillCloseSquare/>
        </div>
        <div className="logo">
            <h4>Sign UP</h4>          
         </div>
         <div className="page_card">
           <div className="userIcon">
                 <BsPersonPlus/>
            </div>
            <p>Please enter your details.</p>
            <div className="material mb-2">                
                <input type="text" id="name" ref={nameRef} required/>
                <hr></hr>
                <label htmlFor="name">Name *</label>
            </div>
            <div className="material mb-2">                
                <input type="text" id="email" ref={emailRef} required/>
                <hr/>
                <label htmlFor="email">Email *</label>
            </div>
            <div className="material mb-2">                
                <input type="text" id="mobileNum" defaultValue={auth.userMobile} ref={mobileRef} required/>
                <hr/>
                <label htmlFor="mobileNum">Mobile number *</label>
            </div>
            <div className="inputBox mb-2">
                <input type='radio' name='gender' ref={maleRef}/> <span>Male </span>
                <input type='radio' name='gender' ref={femaleRef}/><span> Female</span>
                <input type='radio' name='gender' ref={otherRef}/><span> Other</span>
            </div>
             {auth.errorMessage?<div className="error">{auth.errorMessage}</div>:''}
            <div className="next-btn mb-2">
                <button type="button" className="btn btn-orange w-100" onClick={handleSubmit}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default SignUpComponent