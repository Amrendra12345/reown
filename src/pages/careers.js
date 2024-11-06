import Image from 'next/image'
import React, {useRef, useState} from 'react'
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import axios from "axios";
import {validateEmail} from "@/frontend-libs/helpers";
import {config_multipart} from "@/frontend-libs/constants";
import {validateIntegerField} from "@/frontend-libs/helpers";

const Careers = () => {

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const name_ref = useRef()
    const email_ref = useRef()
    const position_ref = useRef()
    const mobile_ref = useRef()
    const resume_ref = useRef()

    const handleFormSubmit = async () =>{

        const name = name_ref.current.value
        if(name == "" || name.length < 3 || !(/^[a-zA-Z\s]*$/.test(name))){
            setError('Please enter valid name')
            setSuccess('')
            return false;
        }
        const email = email_ref.current.value
        if(!validateEmail(email) ){
            setError('Please enter valid email address')
            setSuccess('')
            return false;
        }
        const mobile = mobile_ref.current.value
        if(mobile == "" || mobile.length !== 10){
            setError("Please enter valid mobile number")
            setSuccess('')
            return false;
        }
        const position = position_ref.current.value
        if(position == ""){
            setError("Please enter applied position")
            setSuccess('')
            return false;
        }

        let formData = new FormData()
        formData.append('name', name_ref.current.value)
        formData.append('email', email_ref.current.value)
        formData.append('mobile', mobile_ref.current.value)
        formData.append('position', position_ref.current.value)
        formData.append('resume', resume_ref.current.files[0])

        try {
            const result = await axios.post("/api/apply-job", formData, config_multipart);
            if (!result.data.error) {
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


    return (
		<div className='container'>
			<div className='heading_2'>
				<h1>Careers</h1>				
			</div>
			<div className="page_card careers">
				<div className='careers__figure'>
					<Image
							src="/images/careers.svg"
							alt="careers img"
							width={1300} height={350}
						/>
				</div>
				<div className='careers__content'>					
                    <div className="careers__content__card">
                        <div className='card_title text-center'>
                            <p><strong> Join Us </strong></p>
                        </div>
                        <p>We are looking for enthusiastic people who are as passionate and focused as we are. Give yourself wings and experience the freedom to explore.</p>
                        <div className='card_title'>
                            <p><strong> Life at Recycledevice </strong></p>
                        </div>
                        
                                <p>Life at Recycledevice is the finest amalgamation of work and fun. We work with compassion and integrity. We make sure that our internal customers i.e. Our employees are well taken care off. We at Recycledevice celebrate achievements and handle crisis together.</p>
                            
                            <div className='card_title'>
                                <p><strong>Work Environment</strong></p>
                            </div>
                            <p>The work environment is free of stress and performance pressure. Our employees have the freedom to bring forward new initiatives and ideas to modify the conventional office setup. Recycledevice believes in appreciating and motivating every employee to bring out the best in him/her. The work life here also enables you to engage with people from diverse backgrounds, come across new perspectives and broaden one’s horizon.</p>
                    </div>
                    <div className="careers__content__card">
                        <div className='card_title text-center'>
                            <p><strong> Job Application Form </strong></p>
                        </div>
                        <div className="text-center">
                            {error?<div className="error">{error}</div>:''}
                            {success?<div className="success">{success}</div>:''}
                        </div>
                        <div className='pt-1'>
                            <form>
                                <div className='form-groups mb-1'>
                                    <label>Full Name *</label>
                                    <input type='text' name="name" ref={name_ref} required className='form-control'/>
                                </div>
                                <div className='form-groups mb-1'>
                                    <label>Mobile No.*</label>
                                    <input type="text"  name="mobile" ref={mobile_ref} className='form-control' onKeyPress={(e)=>validateIntegerField(e)} maxLength="10"/>
                                </div>
                                <div className='form-groups mb-1'>
                                    <label>Email Address *</label>
                                    <input type="email"  name="email" ref={email_ref} className='form-control'/>
                                </div>
                                <div className='form-groups mb-1'>
                                    <label>Position Applied *</label>
                                    <input type="text" name="position" ref={position_ref} className='form-control'/>
                                </div>
                                <div className='form-groups mb-1'>
                                    <label> CV Upload *</label>
                                    <input type="file" name="resume" ref={resume_ref} className='form-control' />
                                    <p><small>PDF, RTF, DOC, DOCX file only</small></p>
                                </div>
                                <div className='form-groups mb-1 text-center'>
                                 <button className='btn-orange btn' onClick={handleFormSubmit} type="button">Submit</button>
                                </div>
                            </form>
                        </div>                        
                    </div>
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){

    const data = [];
    const result = await getCommonData(req, data)
    if(result.success == true){
        return {
            props: {
                ...result.data,
            }
        }
    }
    return {
        props:{}
    }
})

export default Careers