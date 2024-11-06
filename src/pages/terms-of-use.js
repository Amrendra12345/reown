import React from 'react'
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const TermsOfUse = () => {
  return (
      <div className="container">
			<div className="heading_2">
				<h1>Terms of Use</h1>
			</div>
			<div className="page_card termsCondition">
				<p>
					Please read these terms of use carefully before using this
					website or mobile application{" "}
					{`( hereinafter referred to as "Platform" ). These platform terms of use (the “terms of use”) govern your access to and use of the platform. The platform is available for your use only on the condition that you agree to the terms of use set forth below. If you do not agree to all the terms of use, do not access, or use the platform. by accessing or using the platform, you, and the entity you are authorized to represent (“you” or “your”) `}
					signify your agreement to be bound by the terms of use.
				</p>
				<p>
					This is a legally binding contract between “you” and
					“Recycledevice”, Relcube India Pvt. Ltd., which provides
					services for purchasing, selling, recycling and/or donating
					of used consumer products (the “buyer & seller services”).
					Recycledevice acts as a platform where one can sell his/her
					old phone and laptop and can also buy a refurbished phone or
					Laptop and the Recycledevice will have no labilities towards
					any fraudulent transaction. In document below “we”, “our”,
					“us” is used for Recycledevice and Recycledevice’s buyer &
					sellers collectively.
				</p>
				<ol>
					<li>
						You certify that you are the legal owner of the gadget
						that you want to sell.
					</li>
					<li>
						You are an individual of above 18 years of age and are
						fully able and competent to understand and agree to the
						Terms.
					</li>
					<li>
						You have full power and authority to accept the Terms,
						to grant the license and authorization (if applicable)
						and to perform the obligations hereunder.
					</li>
					<li>
						The address you provide when placing the order on the
						Platform is the Seller place of residence/office.
					</li>
					<li>
						You shall be solely responsible for obtaining all
						necessary third-party licenses and permissions (if any
						required) regarding any User Content that you submit,
						post or display;
					</li>
					<li>
						All initial quotes are pending our evaluation of your
						gadget and no binding offer is made until we have had a
						chance to inspect the gadget. We reserve the right to
						refuse to offer to purchase any item that you offer to
						sell for any reason we deem, in our sole discretion, to
						be sensible. We reserve the right to change our quote at
						any time.
					</li>
					<li>
						Should you be given a quote via our platform/affiliates
						AND we, upon inspection of your gadget, have paid you
						that quoted amount, you are legally and contractually
						bound to sell us the gadget.
					</li>
					<li>
						Should you be given a quote via our platform and upon
						inspection your gadget is A) a different model than
						originally quoted, B) missing any parts, C) in a
						different condition than stated, we, in instances
						mentioned heretofore and beyond, reserve the right to
						change or revoke our offer.
					</li>
					<li>
						All gadgets sold must compulsorily be attached with the
						following documents:
						<ol
							style={{
								listStyleType: "lower-alpha",
								paddingTop: "0.5rem",
							}}
						>
							<li>
								self-attested ID-proof (government approved) of
								owner of old gadget.
							</li>
							<li>
								self-attested indemnity bond provided by us.
							</li>
						</ol>
					</li>
					<li>
						Lawful Sales Only. You must own the right, title and all
						legal interest in the gadget or other articles you sell
						us. Your sale or, shipment of any such article must not
						violate any law, regulation or statute of any
						jurisdiction. You may not unlawfully transfer or
						encumber any intellectual property, trademark,
						copyright, patent, software, license or other legal
						right or restriction via your shipping or selling of the
						picked-up article. The article you sell must be free of
						all legal restrictions that would affect the value of
						the article, restrict your legal right to transfer
						ownership of the article (including the article itself,
						softwares present on the article, or hardware on or
						inside the article). You must refrain from violating any
						export laws or restrictions. The article you sell
						(including all related materials, software and add on
						hardware) may not be counterfeited, stolen, or contain
						harmful or offensive content of any nature. You agree to
						indemnify and hold Recycledevice, our affiliates,
						suppliers, licensors and partners, and the officers,
						directors, employees, agents and representatives of each
						of them harmless, including costs, liabilities and legal
						fees, from any claim or demand made by any third party
						due to or arising out of
						<ol
							style={{
								listStyleType: "lower-alpha",
								paddingTop: "0.5rem",
							}}
						>
							<li>your access to or use of Services,</li>
							<li>your violation of these Terms & Conditions,</li>
						</ol>
					</li>
					<li>
						It is also your responsibility to wipe, clean or delete
						data on your Gadget being sold via Recycledevice. You
						confirm that all the data in the said device will be
						erased before handing it over. You also confirm that
						in-spite of erasing the data manually/electronically, if
						any data still accessible due any technical reason,
						Recycledevice or the Third-party buyer shall not be
						responsible for the same and you will not approach
						Recycledevice for any retrieval of the data.
					</li>
					<li>
						You understand once a device is sold by you via
						Recycledevice, in no scenario can this device be
						returned to you.
					</li>
					<li>
						You understand that Products distributed as gifts from
						state sponsored or NGO funded distribution programs are
						not accepted on Recycledevice platform.
					</li>
					<li>
						We reserve the right to modify this agreement at any
						time without giving you prior notice. Your use of our
						platform, any of our tools and services, following any
						such modification constitutes your agreement to follow
						and be bound by the Agreement as modified. Terms and
						conditions modifying the Agreement are effective
						immediately upon publication.
					</li>
					<li>
						You will be solely responsible to ensure that the device
						is handed over to us within the time slots confirmed
						mutually. If you did not handover the device within the
						time slot, then two more attempts will be made by us
						before cancelling the order.
					</li>
					<li>
						Seller may be required to promptly furnish additional
						documents or information as and when requested by
						Recycledevice to continue using and accessing the
						Platform and availing the Services. Seller agrees to
						promptly provide such additional documents and
						information, failing Recycledevice reserves its right to
						take appropriate measures as set out under Clause 6&7
						(Breaches and Suspension, liability) of the General
						Terms (terms and conditions).
					</li>
					<li>
						Your consents to the inclusion of the contact
						information about you in Recycledevice’s database and
						usage of the same as per Recycledevice’s privacy policy.
					</li>
				</ol>
				<p className='title'>LIEN</p>
				<p>
					We shall have a general and particular lien on the goods and
					other contents of Shipments and all documents relating
					thereto in an event of the default by you in the payment of
					sums of whatever nature due and payable by you to us
					including, without limitation, charge for attending,
					co-operating, reporting, fumigating, devanning, restoring,
					storing or reconditioning and/or all expenses incurred for
					the benefit or protection of the Shipments, and also for any
					payments, duties, fines or other expenses including but not
					limited to interest and legal costs and expenses, due at any
					time to us from you. If any amount due and payable by you to
					us is not paid, upon the giving of fifteen (15) calendar
					days prior written notice, we may, at our absolute
					discretion and without notice, suspend or cease providing
					all or any part of the Logistics Services without any
					liability whatsoever to you or any third party and, at our
					absolute discretion, may proceed to sell the Shipments in
					the manner which we may deem fit. Our rights are reserved
					for any shortfall subsequent to the disposal of the
					Shipments.
				</p>
				<p className='title'>	FEES AND CHARGES</p>
				<ol style={{ listStyleType: "disc" }}>
					<li>
						For any additional services availed by the you from
						Recycledevice, Recycledevice will charge additional
						charges for any such additional services. Recycledevice
						may enter into a separate bi-partite contractual
						arrangement with the you for provisioning of such
						additional services to the you. Recycledevice reserves
						its right to levy penalty or late payment charges in
						case of delay by the you in clearing any dues payable to
						Recycledevice.
					</li>
					<li>
						The charges shall be subject to applicable taxes, as per
						prevailing applicable laws. you shall deduct income tax
						as applicable against the amounts payable to
						Recycledevice if required by applicable law, except to
						the extent where Recycledevice submits a nil/reduced
						withholding certificate. you shall remit the withholding
						taxes to the relevant tax authorities and enable
						Recycledevice to claim a tax credit by providing an
						appropriate and timely certificate of withholding as
						stipulated under the applicable law.
					</li>
				</ol>
				<p className='title'>LIMITATION OF LIABILITY AND INDEMNITY 	</p>
				<p>
					We shall not have any liability whatsoever for any claims
					arising from:
				</p>
				<ol style={{ listStyleType: "disc" }}>
					<li>Any of your acts or omissions;</li>
					<li>
						Compliance with the instructions given by you or any
						person acting on your behalf;
					</li>
					<li>An act or order of any government authority;</li>
					<li>
						The insufficiency of the packing or labelling of
						Shipment;
					</li>
					<li>
						The nature, description, or contents of the Shipment;
					</li>
					<li>Any force majeure event;</li>
					<li>
						Any cause which we could not avoid and the consequences
						whereof we could not prevent by the exercise of
						reasonable diligence; and/or
					</li>
					<li>
						Any dispute or claims between the Seller and the Buyer
						including without limitation relating to the Shipment or
						Products hereunder.
					</li>
				</ol>
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

export default TermsOfUse