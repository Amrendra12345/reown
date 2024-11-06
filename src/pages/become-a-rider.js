import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import {viewList} from "@/server-libs/rapiv1_lib";
import React, {useRef, useState} from "react";
import {validateEmail, validateIntegerField} from "@/frontend-libs/helpers";
import axios from "axios";
import {config_urlencoded} from "@/frontend-libs/constants";
import Image from "next/image";

const BecomeARider = (props) => {
	const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const contact_name_ref = useRef();
    const contact_email_ref = useRef();
    const city_name_ref = useRef();
    const contact_number_ref = useRef();
    const business_name_ref = useRef();
    const submitFormHandler = async ()=>{
		const contact_name = contact_name_ref.current.value
		const contact_email = contact_email_ref.current.value
		const contact_number = contact_number_ref.current.value
		const business_name = 'business_name_ref.current.value'
		const city_name = city_name_ref.current.value
		const enquiry_type = 'psp_partner';
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


	return (<>
		<section className='becomeRider'>
			<div className='container'>
				<div className='heading_2'>
				   <h1>Become a Rider</h1>
				</div>
				<div className='page_card'>
					<div className='becomeRider__figure'>
					    <Image
							src="/images/become-rider.svg"
							alt="become-a rider"
							fill
						/>
					</div>
					<div className='becomeRider__content'>
						<div className='content'>
							<div className='content_flexible'>
								<h6>Less Work, More Money</h6>								
								<p> Our riders earn 5X more than food or grocery
									delivery jobs with only 5-7 pickups every
									day in your local area
								</p>
							</div>
							<div className='content_flexible'>
								<h6>Flexible Schedule</h6>								
								<p>
									With our flexible slot based timings; work
									on Sundays or holidays and take time off
									when you need it most
								</p>
							</div>
							<div className='content_flexible'>
								<h6>Insurance Benefits</h6>
								<p>
									We provide all our field executives with
									company assisted medical needs and
									accidental coverage policy
								</p>
							</div>
							<div className='content_flexible'>
								<h6>Rewards and Incentives</h6>							
								<p>
									Weekly payouts, milestone based rewards and
									incentives for top performers and customer
									feedback rating achievers
								</p>
							</div>
						</div>
						<div className='registerForm'>
							<div className="registerForm_form">
								<div className="pageTitle mt-0 mb-2">
									<p>To join our warehousing network ; please submit below form and our team will reach out to you with next steps.</p>
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
									</div>
									<div className="form-group mb-0">
										<div className="mb-2 input-area">
											<input type="text" className="form-control" placeholder="Mobile Number" ref={contact_number_ref} onKeyDown={(e) => validateIntegerField(e)} maxLength="10" />
										</div>
										<div className="mb-2 input-area">
											<input type="text" className="form-control" placeholder="Email Address" ref={contact_email_ref} />
										</div>
									</div>
									<div className="form-group mb-1">								
									     <div className="input-area">
									    	<input type="hidden" ref={business_name_ref} defaultValue="myBusiness"/>
									    </div>									
									</div>
									<div className="text-center mb-2">
										{error ? <div className="error mb-2">{error}</div> : ''}
										{success ? <div className="success mb-2">{success}</div> : ''}
									</div>
									<div className="next-btn">
										<button type="button" className="btn btn-orange" onClick={submitFormHandler}>Submit </button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	  </>
  );
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({req}){
	const data = [
	];
	const result = await getCommonData(req, data)
	if(result.success == true){
		let props_data = result.data
		const retailCitiesResp = await viewList(req.session, {'data_name':'new-cities-for-partners'})
		if( retailCitiesResp.success){
			props_data = {
				...props_data,
				retailCities: retailCitiesResp.data.list
			}
		}
		// const interestsResp = await viewList(req.session, {'data_name':'lead-interests'})
		// if(interestsResp.success){
		// 	props_data = {
		// 		...props_data,
		// 		interests: interestsResp.data.list
		// 	}
		// }
		return {
			props:props_data
		}
	}
	return {
		props:{}
	}
})

export default BecomeARider;