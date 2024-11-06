import Accordion from '@/components/accordion/Accordion';
import { useState } from 'react';

const HomeFaqsComponent = () => {
	const [isActive, setActive] = useState(false);
	  const clickFqa = ()=>{
		setActive(!isActive);
	  }
	 
  
	const items = [
		{
			"id": 1,
			"title": "Which is the best website to sell old Mobile online?",
			"content": `<p>Sell Old Mobile Phone at recycledevice.com for Best Price, Our Mission Is to Transform the Way People Sell Their Old Smartphones.</p>`
		},
		{
			"id": 2,
			"title": "What is Recycledevice?",
			"content":`<p>Recycledevice is a Secure and Fast C2B Platform where you can sell Old Mobile Phone, Smartphone Laptop, Tablet, iPad, iPhone and other devices for instant cash with smooth user experience and Same Day Free & Fast Doorstep Pickup. Currently we are accepting orders for above devices however many more electronic devices will be added to our catalogue in coming days.</p>`
		},
		{
			"id": 3,
			"title": "How to Sell Old Phone Online?",
			"content":`<p>Selling Old Phone with RecycleDevice is Very Easy and Fast, Just visit www.recycledevice.com or Mobile app and browse your device e.g. Apple iPhone, Samsung Galaxy, Redmi and other Smartphones, Answer Few Questions, Get Instant Quote, Place Pickup Order and Get Free Doorstep Pickup & Get OnSpot Payment.</p>`
		},
		{
			"id": 4,
			"title": "In Which cities is Recycledevice Available in India?",
			"content":`<p>We Are Currently Serving 25000+ Pin codes Including All Major Cities in India – Delhi, Noida, Gurugram, Mumbai, Pune, Gujarat, Hyderabad, Rajasthan, Chennai, Bengluru, Kolkata, Lucknow, Tamil Nadu, Bihar, West Bengal, Haryana, Punjab, Uttrakhand, Uttar Pradesh, etc.</p>`
		},
		{
			"id": 5,
			"title": "Where Can I Sell Old Laptop?",
			"content":`<p>No need to visit Nehru Place, Gaffar Market or Local Shops, Sell Your Laptop at recycledevice.com and Unlock the Best Market Price for Your Old, Used, New, Repaired, Refurbished, Seal Pack, Second Hand Laptop - Simple & Convenient.</p>`
		},
		{
			"id": 6,
			"title": "Selling your Laptop is safe and easy?",
			"content":`<p>Recycledevice is the best way to sell your laptop Online and get instant payment, Hassle Free Guaranteed Service.</p>`
		},
		{
			"id": 7,
			"title": "Why Choose RecycleDevice?",
			"content":`<p>Easy and Risk-free Way to Sell Phone or Laptop for Cash, there is No Better Place Than Recycledevice, We Allow You to Sell Old Mobile and Laptop for Best Price, We offers Highest Price In Industry With Quick & Hassle-free Service</p>`
		},
		{
			"id": 8,
			"title": "Which Brands Can Be Sold On Recycle Device?",
			"content":`<p>You Don't Need to Be Concerned About Your Phone or Laptop while selling it through Recycledevice, we accept all brands available in India like – Apple, Samsung, HP, Dell, Lenovo, Asus, MSI, Alienware, Mi, Redmi, Vivo, OPPO, Moto, Avita, OnePlus, Google, Realme, Honor, Nokia etc.</p>`
		},
		{
			"id": 9,
			"title": "Checklist Before Selling Your Old Mobile Phone or Laptop?",
			"content":`<p>Backup Your Phone or Laptop, Reset or Format Your Device, Make Sure that your device is not locked.</p>`
		},
		{
			"id": 9,
			"title": "Is it Safe to Sell on Recycledevice ?",
			"content":`<p>RecycleDevice is India's Most Trusted Reputed Online Platform for Selling Old Mobile & Laptop and other Smart Devices at your Doorstep.</p>`
		}
	]
  return (
	<section className="homeFaqs py-5">
		<div className='container mt-0'>
		     <h5 className=''>frequently asked questions</h5>
			<div className="page_card" style={{ boxShadow: 'none',padding:0 }}>
				{/* <div className='pageTitle'>
				  <p onClick={clickFqa}>Sell Old Mobile Phone & Laptop on Recycledevice - How it works?</p> 
				</div> */}
				<div className= {`accordion_Home ${isActive? 'active':'active'}`}>
				    <Accordion items={items} /> 
				</div>				
			</div>
		</div>
	</section>
  )
}

export default HomeFaqsComponent;
