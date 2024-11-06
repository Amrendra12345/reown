import Image from "next/image"
import {authActions, loginOtp} from "@/redux/auth/auth.reducer";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {getAuthData} from "@/redux/auth/auth.selector";
import {FaRegUser} from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";

const LoginComponent = (props) => {

  const dispatch  = useDispatch()
  const mobileRef = useRef()

  const auth = useSelector(getAuthData)

  const handleSubmit = () => {
      // put validations for front end
      dispatch(authActions.loginOtp(mobileRef.current.value))
  }

  return (
    <div className='reown-login'>
        <div className='close_login' onClick={()=>dispatch(authActions.closeSidebar())}>
            <AiFillCloseSquare/>
        </div>
        <div className="logo">
            <h4>Welcome to</h4>
            <Image src="/images/recycledevice.svg" width={250} height={40} alt="recycledevice logo" />
         </div>
         <div className="page_card">
            <div className="userIcon">
                <FaRegUser/>
            </div>
            <p>Please enter your phone number</p>
            <div className="material mb-2">
                <input type="text" id="mobileNum" className="form-control" ref={mobileRef} maxLength="10" required/>
                <hr/>
                <label htmlFor="mobileNum">Mobile number *</label>
            </div>
            <div className="inputBox mb-2">
                <input type="checkbox" name="agree" id="agree"/>
                <label htmlFor="agree"> I agree to the <a href="/terms-and-conditions" target="_blank"> Terms and Conditions </a></label>
            </div>
             {auth.errorMessage?<div className="error">{auth.errorMessage}</div>:''}
            <div className="next-btn mb-2">
                <button type="button" className="btn btn-orange w-100" onClick={handleSubmit}>Login</button>
            </div>

         </div>
    </div>
  )
}

export default LoginComponent