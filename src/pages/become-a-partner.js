import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import {viewList} from "@/server-libs/rapiv1_lib";
import React, {useRef, useState} from "react";
import {validateEmail, validateIntegerField} from "@/frontend-libs/helpers";
import axios from "axios";
import {config_urlencoded} from "@/frontend-libs/constants";
import Select from 'react-select';



const BecomeAPartner = (props) => {
    const [isActive, setActive] = useState(false)
	const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
	const [selectCity, SetSelectCity] = useState('');

    const contact_name_ref = useRef();
    const contact_email_ref = useRef();
    //const city_name_ref = useRef();
    const contact_number_ref = useRef();
    const business_name_ref = useRef();
    const submitFormHandler = async ()=>{
		const contact_name = contact_name_ref.current.value
		const contact_email = contact_email_ref.current.value
		const contact_number = contact_number_ref.current.value
		const business_name = business_name_ref.current.value
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
 
	const toggleWarehouse = ()=>{
		setActive(!isActive)
	}
	const handleSelect = (e)=>{
		SetSelectCity(e);
	}

   const customStyles = {
        control: base => ({
          ...base,          
          fontFamily: "Muli",
          fontSize: "13px",
          borderRadius:1,
          margin:0,
          paddingTop: 0,
          lineHeight:1.2,
		  height: 28,
          minHeight: 28,
		  background:'red'
        }),
        menu: base => ({
          ...base,         
          fontFamily: "Muli",
          fontSize: "13px",
          borderRadius:0,
		  paddingTop: 2,
          margin:0,
		  lineHeight:0.8,
		 
		
        }),
        menuList: (base) => ({
            ...base,
            maxHeight: "220px",
			borderRadius:1,
            "::-webkit-scrollbar": {
              width: "4px",
              height: "0px",
            },
            "::-webkit-scrollbar-track": {
              background: "#f1f1f1"
            },
            "::-webkit-scrollbar-thumb": {
              background: "#888"
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#555"
            }
         
        }),
		option: styles => ({ ...styles, 
			height:28,
			lineHeight:0.6,
			maxHeight:26,
			             

		}),
		singleValue: styles =>({
			...styles,
			padding:0
		})
      };
	
	return (
		<div className="container">
			<div className="heading_2">
				<h1>Become a Partner</h1>
			</div>
			<div className="beacomePartner">
				<div className="beacomePartner__figure">
					<div className="caption">
						<h2>Our Technology</h2>
						<h2>Your Business</h2>
					</div>
				</div>
				<div className="page_card mt-0">
					<p>
						Founded in 2017, we have established ourselves as a
						trusted online market platform servicing thousands of
						customers every day. We are currently onboarding
						registered individuals / firms to associate with us as
						business partners in various cities across India who are
						already running distribution business, retail shops,
						repair / refurbishing centers in mobile phones, laptops,
						smart devices sector or who are looking forward to
						starting a new business in this domain.
					</p>					
					<div className="content">
						  <div className="warehouse_Btn">
							  <button type="button" onClick={toggleWarehouse} className={`btn btn-orange ${isActive ? 'active':''}`}> Warehouse partner</button>
						  </div>						  
					</div>
					<div className={`warehousePartner ${isActive ? 'active':''}`}>
						 <div className="heading"><h1> Warehouse Partner </h1></div>
						 <p>Looking to enter the world of used devices market also called as re-commerce ; you have reached the right spot to take you on an exciting journey of growth as more and more people around us are getting connected to digital world but not all can afford a new device.</p>
						 <div className="warehousePartner__ul">
							 <p>So what is the business all about ?</p>
							 <ul>
								<li>Co-partner a warehouse in your city with us.</li>
								<li>Easy daily warehousing operations like receiving, barcoding, dispatch.</li>
								<li>Make money.</li>
							 </ul>
						 </div>
						<div className="warehousePartner__commonQuestion">
							<table className="table">
								<thead>
									<tr>
										<td>Common Question</td>
										<td>Our Answer</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>What is the minimum area needed to start a warehouse ?</td>
										<td>150 - 250 sq ft is enough to start warehouse operations.</td>
									</tr>
									<tr>
										<td>What is the hardware, software and manpower requirement ?</td>
										<td>Complete setup of warehouse done by Recycledevice free of cost including workstation, storage racks, computer, printer, scanner etc. Software for warehousing operations also provided by Recycledevice along with warehouse operator staff on company payroll.</td>
									</tr>
									<tr>
										<td>What are the expenses to be borne by me ?</td>
										<td>None to be paid by you as all expenses are paid by company including rent, electricity, manpower, packaging, courier, daily running costs etc.</td>
									</tr>
									<tr>
										<td>Do I need to have a GST registration to start warehouse ?</td>
										<td>We partner with both GST registered entities and un-registered individuals with basic KYC documents.</td>
									</tr>
									<tr>
										<td>Is there any franchisee fee associated with this program ?</td>
										<td>No there is no franchisee fee or any hidden fee in our business model.</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="warehousePartner__form">							
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
											<input type="text" className="form-control" ref={business_name_ref} placeholder="Business Name" />
										</div> 
									</div>
									<div className="form-group mb-0">
										<div className="mb-2 input-area">
											<input type="text" className="form-control" placeholder="Mobile Number" ref={contact_number_ref} onKeyPress={(e) => validateIntegerField(e)} maxLength="10" />
										</div>
										<div className="mb-2 input-area">
											<input type="text" className="form-control" placeholder="Email Address" ref={contact_email_ref} />
										</div>
									</div>
									<div className="form-group mb-1">
										 <div className="input-area">
											<Select options={
												props.retailCities.map((city)=>{
													return {
														label:city.item, value:city.item
													}
												})
											}
											//value={selectCity}
										    placeholder='Select City Name'
										    onChange={(e)=>handleSelect(e.value)}
											styles={customStyles} 
											/>
										</div> 
										<div className="input-area"></div>
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
		</div>
	);
};

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
		return {
			props:props_data
		}
	}
	return {
		props:{}
	}
})


export default BecomeAPartner;
