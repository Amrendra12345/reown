import React, {useRef, useState} from "react";
import {validateEmail, validateIntegerField} from "@/frontend-libs/helpers";
import axios from "axios";
import {config_urlencoded} from "@/frontend-libs/constants";

const PartnerApplicationForm = (props) =>{    
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const contact_name_ref = useRef();
    const contact_email_ref = useRef();
    const city_name_ref = useRef();
    const contact_number_ref = useRef();
    const business_name_ref = useRef();

    const submitFormHandler = async ()=>{
        const contact_name = contact_name_ref.current.value
        if(contact_name == "" || contact_name.length < 3 || !(/^[a-zA-Z\s]*$/.test(contact_name))){
            setError('Please enter valid name')
            setSuccess('')
            return false;
        }
        const contact_email = contact_email_ref.current.value
        if(!validateEmail(contact_email) ){
            setError('Please enter valid email address')
            setSuccess('')
            return false;
        }
        const contact_number = contact_number_ref.current.value
        if(contact_number == "" || contact_number.length !== 10){
            setError("Please enter valid mobile number1")
            setSuccess('')
            return false;
        }
        const business_name = business_name_ref.current.value
        if(business_name == "" || !(/^[a-zA-Z\s]*$/.test(business_name))){
            setError("Please enter business name")
            setSuccess('')
            return false;
        }
        const city_name = city_name_ref.current.value
        if(city_name == "" || city_name == 'Select City Name'){
            setError("Please select city")
            setSuccess('')
            return false;
        }
        const enquiry_type = props.type=='rider-application'?'rider_partner':'psp_partner';
        try {
            const result = await axios.post("/api/partner-application", {contact_name, city_name, business_name, contact_email, contact_number, enquiry_type}, config_urlencoded);
            if (!result.data.error) {
                contact_name_ref.current.value=''
                contact_email_ref.current.value=''
                city_name_ref.current.value=''
                contact_number_ref.current.value=''
                business_name_ref.current.value=''
                setSuccess("Form submitted successfully!");
                setError("");
            }else{
                setSuccess("");
                setError(result.data.message);
            }
        } catch (err) {
            setSuccess("");
            setError(err.response.data.message);

        }
    }

    return <>
        <div className="registerForm_form">
            <div className="pageTitle mt-0 mb-2">
                {  props.type=='rider-application'?
                (<p>Register with us today to get started</p>):
                (<p>To join our warehousing network ; please submit below form and our team will reach out to you with next steps.</p>)
                  }
            </div>

            <form className="form"> 
                <div className="form-group">
                    <div className="mb-2 input-area">
                       <input type="text" className="form-control" placeholder="Your Name" ref={contact_name_ref} /> 
                    </div>
                    <div className="mb-2 input-area">
                        <select className="form-control" aria-label="Default select example" ref={city_name_ref}>
                            <option>Select Your city</option>
                            {props.retailCities ? props.retailCities.map(function (city) {
                                return <option value={city.item} key={city.item}>{city.item}</option>
                            }) : ''}
                        </select>
                    </div>
                    {props.type !== "rider-application" ? <div className="mb-2 input-area">
                        <input type="text" className="form-control" ref={business_name_ref} placeholder="Business Name"/>
                    </div>:<input type="hidden" ref={business_name_ref} defaultValue="myBusiness"/>}
                </div>
                <div className="form-group mb-0">
                    <div className="mb-2 input-area">
                         <input type="text" className="form-control" placeholder="Mobile Number" ref={contact_number_ref} onKeyPress={(e)=>validateIntegerField(e)} maxLength="10"/>
                    </div>
                    <div className="mb-2 input-area">
                         <input type="text" className="form-control" placeholder="Email Address" ref={contact_email_ref} /> 
                    </div>
                </div>
                <div className="form-group mb-0">
                {props.type !== "rider-application" ? <div className="mb-2 input-area">
                        <input type="text" className="form-control" ref={business_name_ref} placeholder="Business Name"/>
                    </div>:<input type="hidden" ref={business_name_ref} defaultValue="myBusiness"/>}
                </div>
                <div className="text-center">
                    {error?<div className="error mb-2">{error}</div>:''}
                    {success?<div className="success mb-2">{success}</div>:''}
                </div>
                <div className="next-btn">
                   <button type="button" className="btn btn-orange" onClick={submitFormHandler}>Submit </button>
                </div>
            </form>
        </div>
       
    </>
}

export default PartnerApplicationForm