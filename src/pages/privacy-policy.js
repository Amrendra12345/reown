
import { withSessionSsr } from "@/server-libs/session-lib";
import { getCommonData } from "@/server-libs/helpers";

const PrivacyPolicy = () => {
    return (
        <div className='container'>
            <div className="heading_2">
                <h2> Privacy Policy </h2>
            </div>
            <div className='page_card termsCondition'>

                <p>Recycledevice value the trust you place in us and knows that you care how information about you is used and shared and we appreciate your trust in us to do that carefully and sensibly.</p>
                <p>This privacy policy ( the<strong> “privacy policy”</strong> ), together with the terms of use, describes Recycledevice’s policies and procedures on the collection, use and disclosure of the information provided by users and visitors ( as defined herein below ) of the websites and the mobile applications.</p> <br />
                <p><strong className="title"> Note:</strong> {' '} Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.</p>
                <p>By visiting this website or mobile application you agree to be bound by the terms and conditions of this privacy policy. If you do not agree please do not use or access our platform.</p>
                <p>By mere use of the website and mobile app, you expressly consent to our use and disclosure of your personal information in accordance with this privacy policy. This privacy policy is incorporated into and subject to the terms of use.</p>
                <p className='title'>WHY THIS PRIVACY POLICY</p>
                <p>This privacy policy is published pursuant to:</p>
                <ol style={{ listStyleType: 'disc', marginBottom: '0' }}>
                    <li>Section 43a of the Information Technology Act, 2000;</li>
                    <li>Regulation 4 of the Information Technology ( Reasonable Security Practices and Procedures and Sensitive Personal Information ) Rules, 2011 ( “SPI Rules” ); and</li>
                    <li>Regulation 3 ( 1 ) of the Information Technology ( Intermediaries Guidelines ) Rules, 2011.</li>
                </ol>
                <p>This privacy policy sets out the type of information collected from the users, including the nature of the sensitive personal data or information, the purpose, means and modes of usage of such information and how and to whom Recycledevice shall disclose such information.</p>
                <p className='title'>SENSITIVE PERSONAL DATA OR INFORMATION</p>
                <p className='mb-0'>Sensitive personal data or information of a person means such personal information which consists of information relating to; —</p>
                <ol style={{ listStyleType: 'disc', marginBottom: '0' }}>
                    <li>Password;</li>
                    <li>Financial information such as bank account or credit card or debit card or other payment instrument details;</li>
                    <li>Physical, physiological and mental health condition;</li>
                    <li>Sexual orientation;</li>
                    <li>Medical records and history;</li>
                    <li>Biometric information;</li>
                    <li>Any detail relating to the above clauses as provided to body corporate for providing service; and</li>
                    <li>Any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise:</li>
                </ol>
                <p>Provided that, any information that is freely available or accessible in public domain or furnished under the right to information act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purposes of these rules.</p>
                <p className='title'>COLLECTION OF INFORMATION</p>
                <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                    <li>Your privacy is important to Recycledevice, and we are trying to ensure that no such information collected from you other than what is necessary to provide services/goods of Recycledevice and to protect your account on Recycledevice’s platform.</li>
                    <li>Information that is required to place an order on Recycledevice platform is name, address, phone number, email address, financial details for selected payment method, Identity and Address proof etc. The above-mentioned information will be collected at the time of placement of your order.</li>
                    <li>The financial information collected from the user is transacted through secure digital platforms of approved payment gateways which are under encryption, thereby complying with reasonably expected technology standards. While Recycledevice shall make reasonable endeavors to ensure that the {`user’s`} personal information and the financial information is duly protected by undertaking security measures prescribed under applicable laws, the user is strongly advised to exercise discretion while providing personal information or financial information while using the services given that the internet is susceptible to security breaches.</li>
                    <li>If user choose to post messages on our message boards, chat rooms or other message areas or leave feedback, we will collect that information user provide to us. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.</li>
                    <li>If user send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about {`user’s`} activities or postings on the website, we may collect such information into a file specific to user.</li>
                    <li>It is mandatory for users of the platform to provide certain categories of user data (as specified at the time of collection). In the event that users do not provide any or sufficient user data marked as mandatory, Recycledevice may not be able process the order or provide such users with Recycledevice’s services.</li>
                    <li>All the above-mentioned information is collectively referred to as user data.</li>
                    <li>Sometime the platform uses cookies so that the platform can provide the user with more customized information when the user returns to the platform. {`"cookies" are used to store user preferences and to track user trends, so as to enhance the user’s interactive experience and generally improve the platform’s services to the user. The user can set the browser to notify the user when the user is sent a "cookie", giving the user the chance to decide whether or not to accept it. If the user accepts a "cookie",`} the user agrees to the use of any user information collected by the platform using that cookie. The user may update the profile information of the user at any time on the platform.</li>
                    <li>The use can add or update the user information on a regular basis. When the user updates the user information, Recycledevice will keep a copy of the prior version for its record.</li>
                </ol>
                <p className='title'>USES OF COLLECTED INFORMATION/USER DATA</p>
                <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                    <li>That the {`user's information is primarily used by Recycledevice to facilitate a better, customized, and convenient use of the platform's services. The user's `}information is used by Recycledevice inter alia</li>
                    <li>Respond to the {`users'`} queries;</li>
                    <li>Requests and inquiries;</li>
                    <li>Verification of {`users'`} identity;</li>
                    <li>Update new features of the platform;</li>
                    <li>Improve and customize the {`platform’s`} service;</li>
                    <li>Detect and prevent fraud and abuse of the platform;</li>
                    <li>Examine the identity of the {`users'`} and the authenticity of offers, delivery or transfer of offers, etc.;</li>
                    <li>Administer the platform;</li>
                    <li>Inform any change in the terms of use or this policy or the terms and conditions.</li>
                    <li>Send surveys and marketing communications that Recycledevice believes may be of interest to the user.</li>
                    <li>Personalize the {`users'`} experience on the platform by presenting advertising, products and offers tailored for the user;</li>
                    <li>Help the user address its problems with the platform including addressing any technical problems;</li>
                    <li>Complete and fulfill the {`users'`}order, communicate with the user regarding the {`users'`} order and provide the user with related customer service.</li>
                    <li>If user voluntarily submit any user information or other information to the platform for publication on the platform through the publishing tools, then users are deemed to have given consent to the publication of such information on the platform; and</li>
                    <li>Protect the integrity of the platform.</li>
                    <li>With your consent, we will have access to your SMS, contacts in your directory, location, and device information. We may share this data with our affiliates. In the event that consent to this such use of data is withdrawn in the future, we will stop collection of such data but continue to store the data and use it for internal purposes to further improve our services.</li>
                    <li>In our efforts to continually improve our product and service offerings, we collect and analyses demographic and profile data about our {`users'`} activity on our platform.</li>
                    <li>We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information ( like pin code, age, or income level ). We use this data to tailor your experience at our platform, providing you with content that we think you might be interested in and to display content according to your preferences.</li>
                </ol>
                <p className='title'>DISCLOSURE OF USER DATA</p>
                <ol style={{ listStyleType: 'disc', marginBottom: '0.5rem' }}>
                    <li> We may disclose personal information to third parties. This disclosure may be required for us to provide you access to our services, to comply with our legal obligations, to enforce our user agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.</li>
                    <li>We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our terms or privacy policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.</li>
                    <li>We and our affiliates will share / sell some or all of your personal information with another business entity should we ( or our assets ) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity ( or the new combined entity ) will be required to follow this privacy policy with respect to your personal information.</li>
                </ol>
                <p className='title'>LINKS TO OTHER SITES</p>
                <p>Our platform links to other e-commerce and non-e-commerce companies also that may collect personal information about you. Recycledevice is not responsible for the privacy policy and content of those linked companies</p>
                <p className='title'>SECURITY PRECAUTIONS </p>
                <p>Our platform has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.</p>
                <p className='title'>CHILDREN</p>
                <p>That the platform can be used by only those who can form a legally binding contract as per the terms and conditions of Indian Contract Act, 1872. However, if any minor has shared/ provided any information on the platform of Recycledevice without the supervision of parents /guardian, in that case parent/guardian can contact our grievance officer between office hours</p>
                <p className='title'>CHANGES TO THIS PRIVACY POLICY </p>
                <p>By using the platform and/ or by providing your information, you consent to the collection and use of the information you disclose on the platform in accordance with this privacy policy, including but not limited to your consent for sharing your information as per this privacy policy.</p>
                <p>Any changes to this privacy policy will be communicated by us posting an amended and restated privacy policy on the platform. Once posted on the platform the new privacy policy will be effective immediately. Your continued use of the platform shall be deemed to be your acceptance to the provisions of the privacy policy. User agree that any information Recycledevice hold about user (as described in this privacy policy and whether or not collected prior to or after the new privacy policy became effective) will be governed by the latest version of the privacy policy.</p>
                <p className='title'>GRIEVANCE OFFICER</p>
                <p>In accordance with information technology act 2000 and rules made there under, the name and contact details of the grievance officer are provided below:</p>
                <p className='mb-0'>Name: Ravi Shandilya</p>
                <p>Email: {''} <span className='text-danger'> grievances@recycledevice.com </span></p>

            </div>
        </div>
    );
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req, query }) {

    const data = [];
    const result = await getCommonData(req, data)
    if (result.success == true) {
        return {
            props: {
                ...result.data,
            }
        }
    }
    return {
        props: {}
    }
})

export default PrivacyPolicy