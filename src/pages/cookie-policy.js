import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const CookiePolicy = () => {
    return (
        <div className='container'>
            <div className="heading_2">
				<h1>Cookie Policy</h1>
			</div>            
            <div className='page_card termsCondition'>
                        <p>This Cookie policy explains how Relcube India Private Limited (Recycledevice) uses cookies to recognize you when you visit our website www.recycledevice.com. This helps us to provide you with a good experience when you browse our website and also allows us to improve our website.</p>
                        <p>By using this Website, you consent to our use of cookies in accordance with this Cookie Notice. You will have seen a pop up to this effect on your first visit to the Website. Although it will not usually appear on subsequent visits, you may withdraw your consent at any time by following the instructions below, including by changing your browser settings so that cookies from this Website cannot be placed on your device. Please note that some of the services on the Website will not function so well if cookies are disabled. After your initial visit to the Website, we may change the cookies we use. This cookies policy will always allow you to know who is placing cookies, for what purpose and give you the means to disable them so you should check it from time to time.</p>
                        <p className="title">What is a Cookie?</p>
                        <p>A cookie is a small file that is sent to and stored on your computer, smartphone or other device for accessing the internet, whenever you visit a site. Cookies are useful because they allow a website to recognize a user’s device. We use cookies for a variety of reasons, such as letting you navigate between pages efficiently, remembering your preferences and generally improving the user experience. Session cookies are deleted automatically when you close your browser and persistent cookies remain on your device after the browser is closed (for example to remember your user preferences when you return to the site).</p>
                        <p className="title">How and Why the Website Uses Cookies? </p>
                        <p>The cookies we use are completely safe. In fact, many of them are used purely to provide important security features such as protecting your data. Overall, cookies help us provide you with a better website and service, by enabling us to monitor which pages you find useful and which you do not.</p>
                        <p>We use cookies to safeguard your privacy when {`you’re`} browsing the Website. We also use them to give you the best experience when you visit this Website. By using cookies, we can make it easier for you to do many things, such as managing your accounts, policies, or login details, and selecting for products and services. Cookies can also allow us to tailor the content of this Website so we can show you services or adverts we think you may be interested in.</p>
                        <p>We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website and services in order to tailor it to user needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Finally, we use analytics cookies, including third party analytics cookies, to help us make the Website better for those who visit it regularly. They help us work out what users like and {`don’t`} like and how we can improve things for you.</p>
                        <p className="title">Cookies we use on our website:</p>
                        <table className="table">
                             <thead>
                                <tr>
                                    <th style={{width:'60px',textAlign:'center'}}>S. No.</th>
                                    <th style={{width:'130px',textAlign:'center'}}>Cookie Name</th>
                                    <th style={{paddingLeft:'0.3rem'}}>Puprose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{width:'60px',textAlign:'center'}}>1</td>
                                    <td style={{width:'130px',textAlign:'center'}}>ci_session</td>
                                    <td style={{paddingLeft:'0.3rem'}}>This cookie is used to maintain a user state during a browser session for consistency of user experience. By default the cookie is destroyed when the browser session ends.</td>
                                </tr>
                                <tr>
                                    <td style={{width:'60px',textAlign:'center'}}>2</td>
                                    <td style={{width:'130px',textAlign:'center'}}>csrf_cookie</td>
                                    <td style={{paddingLeft:'0.3rem'}}>Your Information is Safe Our cookies do not store personal information such as your name, address, phone</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="title">Your Information is Safe</p>
                        <p>Our cookies do not store personal information such as your name, address, phone number or email in a format that can be read by others. The cookies we use cannot read or search your computer, This cookie is used to prevent Cross_Site Request Forgery. This cookie prevents you from malicious attacks.smartphone or web-enabled device to obtain information about you or your family, or read any material kept on your hard drive. We do use a small number of cookies that store encrypted versions of information where you have asked us to, such as the Login OTP created to identify you as you navigate through pages whilst you are active on the Website.</p>
                        <p className="title">Manage Cookies Through the Browser</p>
                        <p>The ability to enable, disable or delete cookies can be completed at browser level. In order to do this, follow the instructions provided by your browser (usually located within the “Help”, “Tools” or “Edit” facility). Disabling a cookie or category of cookie does not delete the cookie from your browser; you will need to do this yourself from your browser. If you have disabled one or more cookies, we may still use information collected from cookies prior to your disabled preference being set, however, we will stop using the disabled cookie to collect any further information. Please note that if you activate the setting on your browser that allows you to refuse the setting of all or some cookies (including essential cookies) you may not be able to access all or parts of our Website.</p>
                        <p className="title">Third Party Websites </p>
                        <p>When we include links to other websites, they will have their own cookies, privacy and cookie policies that will govern the use of any information you submit. We recommend you read their policies as we are not responsible or liable for their privacy practices.</p>
                    
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

export default CookiePolicy