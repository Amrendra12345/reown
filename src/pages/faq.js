import {useState} from 'react'
import {withSessionSsr} from "@/server-libs/session-lib";
import { getCommonData } from "@/server-libs/helpers";
import Accordion from '@/components/accordion/Accordion';

const Faq = () => {
	const items = [
		{
			"id": 1,
			"title": "Which is the best place to sell old phones online?",
			"content": `<p>Sell Old Phone at recycledevice.com for Best Price with free doorstep pickup and instant payment.</p>`
				
		},
		{
			"id": 2,
			"title": "What do you mean by Recycledevice?",
			"content": `<p>Recycledevice is a Secure C2B Platform where you can sell Old / Used Mobile Phone, Laptop, Tablet, iPad, iPhone and other devices for instant cash and Same Day Free Doorstep Pickup. Currently we are accepting orders for above devices however many more electronic devices will be added to our catalogue in coming days.</p>`
		},
		{
			"id": 3,
			"title": "How Recycledevice operates?",
			"content": `<ul><li>Logon to our website www.recycledevice.com or our mobile application available on Google Play store and Apple App store and find your device (e.g. Apple iPhone, Samsung Galaxy Smartphones .. )</li>
			   <li>Once you have found your device, please follow the on-screen instructions to run diagnostics on your device and answer few simple questions about current condition of device.</li>
			   <li>Get an instant sell quote for your device based on the diagnostic report and answers submitted by you.</li>
			   <li>If you are happy with the quoted price; fill your contact and pickup address details along with preferred pickup date time slot and mode of payment.</li>
			   <li>We will arrange free pickup of your device as per pickup date time slot selected by you.</li>
			      <li>At the time of pickup, if the actual condition of your device matches with the diagnostic report and information provided by you while placing the order then company authorized pickup executive / service partner will initiate payment as per your selected mode of payment. However, if actual device condition does not matches; then you will be given a revised offer on the spot. You will have the option to accept or decline the new offer.</li>
				</ul>
				<p><strong>Note: </strong> If your exact model does not reflect on our website you can take a picture of the device and email it to clientservices@recycledevice.com with basic details (e.g. manufacturer of device, model name, year purchased, current condition whether operational or not and any broken parts). Please do NOT select a device if it does not exactly match the device available for purchase on our website, we will not be able to offer you anything for it.</p>` 
		},
		{
			"id": 4,
			"title": "Which Indian cities does Recycledevice operate?",
			"content": `<p>We are expanding our Service Network to all major cities of India. You can check if your pin code is serviceable or not at the time of order placement.</p>`
		},
		{
			"id": 5,
			"title": "Which types of electronic devices does Recycledevice deals in?",
			"content": `<p>Recycledevice currently deals in all major brands for Smartphones & Tablets including Apple, Asus, Acer, Blackberry, Dell, Gionee, Google, HTC, Huawei, HP, Intex, Karbonn, Lava, LeEco, Lenovo, LG, Micromax, Motorola, Nokia, OnePlus, Oppo, Panasonic, Samsung, Sony, Vivo, Xiaomi, Xolo, Yu etc. Our Product Services team works round the clock to add newly launched devices!!</p>`
		},
		{
			"id": 6,
			"title": "What is meant by free doorstep pick up and instant payment?",
			"content": `<p>Free doorstep pick up means company authorized pickup executive / service partner will come to the pickup address provided by you at the time of placing the order to personally evaluate your device condition as selected by you while placing the order. If the actual condition of your device matches with the order description, we will pay you on the spot, issue a purchase / service receipt and collect the device from you.</p>`
		},
		{
			"id": 7,
			"title": "Will I really get the payment instantly?",
			"content": `<p>Yes, payments are transferred instantly at the time of pick up.</p>`
		},
		{
			"id": 8,
			"title": "Does Recycledevice charge anything for online service and/or pickup of devices from my doorstep?",
			"content": `<p>No. This is a completely free service with no hidden charges. Recycledevice pickup executives / service partners are not authorized by company to charge any amount for online service and/or collection of devices from customers.</p>`
		},
		{
			"id": 9,
			"title": "What if I have a device but one or more of its accessories are missing or lost?",
			"content": `<p>Please correctly answer the questions including the condition of device accessories which are asked at the time of placing order on our platform. Offered quote price is calculated accordingly.</p>`
		},
		{
			"id": 10,
			"title": "What about personal / confidential data that is stored on my device internal memory / SD card. Do I need to remove it myself?",
			"content": `<p>Yes. We recommend you delete all your personal / confidential data from your device internal memory / SD card before giving it to our authorized pickup executive / service partner.</p>`
		},
		{
			"id": 11,
			"title": "What if I am not able to find my device on Recycledevice website or my pickup address area is not currently serviced?",
			"content": `<p>We are continuously working to add more devices to our catalogue as well as expanding our service to more cities at pan India level ; until and unless we request you to send your enquiry to <a href="mailto:clientservices@recycledevice.com" target="_blank">clientservices@recycledevice.com</a> for us to work out what can be done to provide you best of our services.</p>
			    <p> If your exact model does not reflect on our website ; you can take a picture of the device and email it to <a href="mailto:clientservices@recycledevice.com" target="_blank">clientservices@Recycledevice.com </a> with basic details (e.g. manufacturer of device, model name, year purchased, current condition whether operational or not and any broken parts). Please do NOT select a device model if it does not exactly match the device available for purchase on our website, we will not be able to offer you anything for it.</p>`
		},
		{
			"id": 12,
			"title": "How do I manage my Recycledevice profile?",
			"content": `<p>You can manage your profile by login to the Recycledevice website or mobile application. Once logged in, you can edit your name, bank details, contact number and address.</p>`
		},
		{
			"id": 13,
			"title": "What is a revised offer and what it is based upon?",
			"content":`<ul>
			             <li>A revised offer is given to you when at the time of pick up ; company authorized pickup executive / service partner finds that if the actual device condition differs from the diagnostic report and description mentioned when you placed the order on our platform (Website or Mobile Application)..</li>
						<li>A revised offer may be higher or lower than the price quoted originally to you on the platform.</li>
						<li>In circumstances of a revised offer, you have the option of accepting or rejecting the same.</li>
						<li>If accepted by you, payment will be done instantly. If rejected, your order will be cancelled, and we will look forward to serving you again in future.</li>`					
		},
		{
			"id": 13,
			"title": "Do I need to show my ID proof to sell my device?",
			"content": `<p>Yes. This is a legal requirement as we need to verify the proof of ownership of each device we buy. This prevents trading of stolen goods and helps in keeping the stolen devices out of recycling system. We request you to keep your Aadhar Card (with additional residential & employment proof) ready for verification at the time of pickup. Do not worry about misuse of your personal ID as company authorized pickup executive / service partner will scan the ID and ID data will be directly uploaded on our secure application gateway in front of you after establishing your identity.</p>`
		},
		{
			 "id": 14,
			 "title": "How do I track my order?",
			  "content": `<p>Download Recycledevice mobile application for automated QC of your device, instant quote generation and REAL TIME TRACKING of your orders including payments, re-scheduling, and cancellations. Login using your mobile number and OTP and you are all set.</p>`	
		},
		{
			 "id": 15,
			 "title": "How do I manage my open order?",
			  "content": `<p>You will be able to re-schedule and cancel your open order by login to Recycledevice mobile application which is available on Google Play store and Apple App store.</p>`	
		},
		{
			 "id": 16,
			 "title": "In case of order queries or if my pickup is delayed, who do I contact?",
			  "content": `<p>No worries, just contact our client services department through email at clientservices@recycledevice.com.</p>`	
		},
		{
			 "id": 17,
			 "title": "I do not have any address proof for my pickup address. Will my device be picked?",
			  "content": `<p>As per government guidelines, it is a mandatory requirement to verify the address from where the device is picked. The pick-up address entered while order placement and address proof submitted at the time of pick-up should be an exact match to enable Recycledevice to pick your device. This prevents trading of stolen goods.</p>`	
		},
		{
			 "id": 18,
			 "title": "Can I change the payment mode on my order?",
			  "content": `<p>Not as of now. But for your convenience, you can update your bank account details in case of any errors through Recycledevice mobile application.</p>`	
		},
		{
			 "id": 19,
			"title": "Do I get any purchase receipt from Recycledevice?",
			"content": `<p>Yes, an electronic purchase receipt is issued and sent to your registered email address and WhatsApp number after successful pick-up. You can also download the purchase receipt anytime from Recycledevice mobile application</p>`	
		},
		{
			 "id": 20,
			"title": "Is there a limitation on the number of devices I can sell to Recycledevice at once?",
			"content": `<p>We currently allow only 1 device to be sold per order. However, if you need to sell in bulk, please visit our Contact Us page to submit your enquiry.</p>`	
		},
		

			
	];
	
    return (
		<div className="container">
			<div className='heading_2'>
				<h1>Frequently Asked Questions</h1>
			</div>
			<div className="page_card">
				<Accordion items={items} />
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

export default Faq;