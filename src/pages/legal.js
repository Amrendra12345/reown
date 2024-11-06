import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const Legal = () => {
    return (
      <div className='container'>
          <div className='heading_2'><h1>Legal</h1> </div>             
            <div className='page_card termsCondition'>
                
                        <p className='title'><strong>RESERVATIONS :</strong></p>
                        <p className='mb-1 mt-1'>RELCUBE INDIA PRIVATE LIMITED reserves the right,</p>
                        <ol style={{ listStyleType: 'disc',marginBottom:'0.5rem' }}>
                            <li>To seek and / or to verify the particulars (including identification) information of seller and device either by itself or by one of its authorized independent agency.</li>
                            <li>To change or cancel the website offer, in case the device is found to have been tempered or actual condition of device differs from as described while placing order on www.recycledevice.com</li>
                            <li>To cancel the order in case seller identification and / or pickup address verification fails.</li>
                            <li>To get the device checked via company authorized pickup executives / service partners for its functional operation, technical operation and physical condition at the time of order pickup before making the payment to seller</li>
                            <li>To enforce that offered quote price as shown on the platform while placing the order is not final value. Final value of the device will only be locked after the device is checked completely for its operation and physical condition at the time of pickup.</li>
                            <li>To change the offered quote price in case of fluctuation in market value of the device and company cannot be held responsible or liable to lock the order value in case order is open for more than 72 hours</li>
                        </ol>
                        <p className='title'>DISCLAIMER & LIABILITY LIMITATION :</p>
                        <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                            <li>RELCUBE INDIA PRIVATE LIMITED shall not be responsible for any acts of third party with respect to schemes which are not authorized by the company or which are purported to have been offered on behalf of company without the explicit and specific sanction in written by the company.</li>
                            <li>RELCUBE INDIA PRIVATE LIMITED has not authorized any third party entity or individual offering any scheme or service on its behalf.</li>
                            <li>RELCUBE INDIA PRIVATE LIMITED takes no responsibility of the claims arising due to the malfunctions or sudden issues arising in device when it is being checked by company authorized pickup executives / service partners at the pickup address provided by the seller.</li>
                            <li>Transaction cannot be reversed once seller has received full payment from RELCUBE INDIA PRIVATE LIMITED and / or device has been picked up by company authorized pickup executive / service partner.</li>
                        </ol>
                        <p className='title'>SELLER UNDERTAKINGS :</p>
                        <p>The seller undertakes and agrees that,</p>
                        <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                            <li>Device (and its accessories if any) was not acquired through any unlawful means and seller was the sole owner of it before this transaction.</li>
                            <li>Device should not be under any financial obligation at the time of selling the device on Recycledevice platform.</li>
                            <li>The condition of the device matches with the description provided by seller on the platform while placing the order.</li>
                            <li>Seller has erased all the personal data saved on the handset and will not hold RELCUBE INDIA PRIVATE LIMITED responsible for any loss / misuse of the same.</li>
                            <li>Receipt of amount as quoted in order in exchange of mentioned device.</li>
                            <li>Seller gives his / her consent to RELCUBE INDIA PRIVATE LIMITED to share personal identification and pickup address details with any authorized legal government organization if required.</li>
                            <li>RELCUBE INDIA PRIVATE LIMITED is allowed to capture the Geographic location and IP address of the machine using which order was placed.</li>
                            <li>The identification document submitted by seller along with device is a legitimate and valid document issued by government of India.</li>
                            <li>Any breach of the above undertakings shall than amount to be the breach of the terms and conditions of the exchange and RELCUBE INDIA PRIVATE LIMITED shall be at liberty to withdraw the offer and decline the purchase</li>
                        </ol>
                        <p className='title'>SELLER OBLIGATIONS :</p>
                        <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                            <li>Seller shall not use the services for any unlawful, immoral, or abusive purpose in violation or derogation of any law / rule or regulation or statutory directive or order for the time being in force or against any public policy or for threatening or harassing that affect national interest or create any damage or risk to RELCUBE INDIA PRIVATE LIMITED or its employees / authorized service partners.</li>
                            <li>Seller shall not provide false information i.e. (Seller Name, Pickup Address, Seller Mobile Number, Seller E-mail ID, Seller GSTIN / Tax ID etc.) ; if breached, strict legal action will be taken against involved individual / entity.</li>
                        </ol>
                        <p className='title'>GENERAL :</p>
                        <p>Nothing contained herein shall be deemed to grant the seller either directly or by implication, any right or otherwise, in respect of any intellectual property, any software, concept, know-how, process development tools, concepts, techniques or any other proprietary material or information that RELCUBE INDIA PRIVATE LIMITED may provide to seller in the course of provision of service.</p>
                        <p className='title'>CONFIDENTIALITY :</p>
                        <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                            <li>Privacy of communication is subject to the terms and conditions of this website. The seller specifically agrees that in order to facilitate RELCUBE INDIA PRIVATE LIMITED to provide services, RELCUBE INDIA PRIVATE LIMITED may be required to disclose any information or particulars pertaining to the seller to any authority, statutory or otherwise, including but not limited to any security agency, and reserves the right to comply with the directions of such authorities at its discretion and without intimating the seller.</li>
                            <li>Website users agree that company may make use of website visitor usage data for statistical and analytical purposes. When making use of these services, company does not process or share any data that allows any third party to identify any individual persons. In accepting these terms services, a website user agrees that company may use and share de-personalized data for the analytics purposes with its authorized service providers.</li>
                            <li>By using website services, a user gives consent for receiving transactional and promotional messages and emails from company and / or authorized service partners.</li>
                        </ol>
                        <p className='title'>DISPUTE RESOLUTION :</p>
                        <p>Any dispute in regards to this website shall be subject to exclusive jurisdiction of Gautam Buddh Nagar Court.</p>
                        <p className='title'>DEFINITIONS & INTERPRETATIONS :</p>
                        <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                            <li>Recycle Device is a legal trademark and proprietary brand name of RELCUBE INDIA PRIVATE LIMITED.</li>
                            <li>Company means RELCUBE INDIA PRIVATE LIMITED.</li>
                            <li>Seller means you.</li>
                            <li>Website means www.recycledevice.com</li>
                            <li>User means any individual or entity visiting the website.</li>
                            <li>Website services means checking listed products, generating OTPs, generating quote offers, placing orders, tracking orders, using coupon codes, remitting payments, on-site device verification, device auto diagnosis, device pick-up, submitting enquiries and / or reading any other content published on website.</li>
                        </ol>
                        <p className='title'>THANK YOU FOR READING LEGAL PAGE OF RECYCLEDEVICE</p>
                
            </div>
      </div>
  )
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

export default Legal