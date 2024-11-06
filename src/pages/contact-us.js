import Image from 'next/image';
import React, { useState } from 'react';
import ModalContact from '@/components/modal/ModalContact';
import { FaWhatsapp } from 'react-icons/fa';
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
const ContactUs = () => {
    const [showModal, setShowModal] = useState(false);
	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
	
  return (
	  <section className="contact_us">
		  <div className="container">
			  <div className="page_card">
				  <div className="contact_us__figure">
					  <h1>
						  <span> Any questions ?</span>
						  <br /> Contact us
					  </h1>
					  <Image
						  src="/images/contactUs.svg"
						  width={300}
						  height={300}
						  alt="contact us img"
					  />
				  </div>
				  <div className="contact_us__topContact">
					  <div className="contact_form">
						  <div className="mb-2">
							  <select className="form-control">
								  <option default value="">Type Of Enquiry *</option>
								  <option value="Business Enquiry">Business Enquiry</option>
								  <option value="General Enquiry">General Enquiry</option>
								  <option value="Order Enquiry">Order Enquiry</option>
							  </select>
						  </div>
						  <div className="mb-2">
							  <input
								  type="text"
								  className="form-control"
								  placeholder="Your Name"
							  />
						  </div>
						  <div className="mb-2">
							  <input
								  className="form-control"
								  type="email"
								  name="email_address"
								  id="email"
								  placeholder="Email Address *"
								  required=""
							  />
						  </div>
						  <div className="mb-2">
							  <input
								  className="form-control"
								  type="text"
								  name="mobile_number"
								  id="mobile"
								  placeholder="Mobile Number *"
								  required=""
							  />
						  </div>
						  <div className="mb-2">
							  <textarea
								  className="form-control"
								  rows="3"
								  placeholder="Write message here *"
								  name="message"
								  required=""
							  ></textarea>
						  </div>
						  <div className="md text-center">
							  <button
								  type="submit"
								  className="btn-orange btn"
							  >
								  Send Message{" "}
							  </button>
						  </div>
					  </div>
					  <div className="contact_withUs">
						  <div className="left_contact">
							  <div className="mb-2">
								  <p className="mb-0">
									  <strong>Connect with us:</strong>
								  </p>
								  <p>
									  For support or any questions:
									  <br />
									  Call us at{" "}
									  <span>+91-120 4520435</span>
									  <br />
									  Email us at{" "}
									  <a
										  rel="noreferrer"
										  target="_blank"
										  href="mailto:clientservices@recycledevice.com"
									  >
										  {" "}
										  clientservices@recycledevice.com
									  </a>
								  </p>
							  </div>
							  <div className="mb-2">
								  <p className="mb-0">
									  <strong>Corporate Office:</strong>
								  </p>
								  <p>
									  Relcube India Pvt. Ltd.
									  <br />
									  Basement &amp; 1st Floor,
									  <br /> A-53, Sector-8, Noida -
									  201301
									  <br />
									  Uttar Pradesh, India{" "}
									  <span className='modal_link' onClick={openModal}> See on map{" "} </span>
								  </p>
							  </div>
							  <div className="mb-2">
								  <p className="mb-0">
									  <strong>
										  Bengaluru Sales Office:
									  </strong>
								  </p>
								  <p>
									  Relcube India Pvt. Ltd.
									  <br />
									  3rd Cross, Jyothinagar, 56/69,
									  <br />
									  Mysore Road, Muthuchari Industrial
									  Area,
									  <br />
									  Bengaluru, Karnataka - 560039, India
								  </p>
							  </div>
						  </div>
						  <div className="right_contact">
							  <div className="mb-32">
								  <p className="mb-0">
									  <strong>Need Help?</strong>
								  </p>
								  <p>
									  {" "}
									  Chat with our Whatsapp assistant{" "}
								  </p>
								  <button
									  type="button"
									  className="btn btn-outline-light"
								  >
									  {" "}
									  <FaWhatsapp /> <span>Whatsapp</span>
								  </button>
							  </div>
							  <div className='mb-2'>
								  <p className='mb-0'><strong>  Noida Sales Office: </strong></p>
								  <p>Relcube India Pvt. Ltd.<br />Basement &amp; 1st Floor,<br /> A-53, Sector-8, Noida - 201301,<br />Uttar Pradesh, India </p>
							  </div>
							  <div className='mb-2'>
								  <p className='mb-0'><strong>Kolkata Sales Office:</strong></p>
								  <p>Relcube India Pvt. Ltd.<br />369/9, LP 28/24/1/1/1,<br />Dakshindari Road, Laketown<br />Kolkata, West Bengal - 700048, India	</p>
							  </div>
						  </div>
					  </div>
				  </div>
				  <div className='inquiry_contact'>
					  <div className='inquiry'>
						  <div className='inquiry_figure'>
							  <Image src='/images/new_images/customer-enquiry.svg' width={70} height={70} alt='ustomer-enquiry icon' />
						  </div>
						  <div className='inquiry_content'>
							  <div className='title'>
								  <p>Customer Enquiry</p>
							  </div>
							  <p>For any queries on your order or assistance on process, please write to us at</p>
							  <div className='emailAddress'>
								  <a href='' target='_blank'>clientservices@recycledevice.com</a>
							  </div>
						  </div>
					  </div>
					  <div className='inquiry'>
						  <div className='inquiry_figure'>
							  <Image src='/images/new_images/business_enquiry.svg' width={70} height={70} alt='ustomer-enquiry icon' />
						  </div>
						  <div className='inquiry_content'>
							  <div className='title'>
								  <p>Customer Enquiry</p>
							  </div>
							  <p>For any queries on business association or suggestions, please write to us at</p>
							  <div className='emailAddress'>
								  <a href='' target='_blank'>partnersupport@recycledevice.com</a>
							  </div>
						  </div>
					  </div>
					  <div className='inquiry'>
						  <div className='inquiry_figure'>
							  <Image src='/images/new_images/warehouse.svg' width={70} height={70} alt='ustomer-enquiry icon' />
						  </div>
						  <div className='inquiry_content'>
							  <div className='title'>
								  <p>Customer Enquiry</p>
							  </div>
							  <p>We have strong pan India warehouse network. Click below for more details.</p>
							  <div className='emailAddress'>
								  <a href='' target='_blank'>Our Warehouses</a>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  {showModal && <ModalContact closeModal={closeModal} />}
	  </section>
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

export default ContactUs