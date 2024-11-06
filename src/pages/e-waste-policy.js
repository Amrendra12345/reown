import Image from 'next/image';
import { withSessionSsr } from "@/server-libs/session-lib";
import { getCommonData } from "@/server-libs/helpers";

const EWastePolicy = () => {
	return (
		<div className='container'>
			<div className="heading_2">
				<h1>E Waste Policy</h1>
			</div>

			<div className="page_card termsCondition">
				<p>
					E- Waste (Management & Handling) Rules, 2011 were
					notified in 2011 and had come into effect since 1st
					May 2012. Relcube India Pvt. Ltd. has effectively
					implemented E-Waste Rules and very responsibly
					managed all aspects as per the set rules. We also
					kept on making regular upgrades to comply all
					perspective of environmental conservation through
					partner association for handling and management of
					electronic and electrical waste, in no ways ending
					at landfill.
				</p>
				<p>
					Now, as per the new guidelines, Ministry of
					Environment, Forest and Climate change, Government
					of India in suppression of E-Waste (Management and
					Handling) Rules, 2011 has notified the E-Waste
					(Management) Rules, 2016 vide G.S.R. 338(E) dated
					23.03.2016 which has now been effective from 1st{" "}
					{`October'2017`}. These rules are applicable to
					every producer, consumer or bulk consumer,
					collection center, dismantler and recycler of
					e-waste involved in the manufacture, sale, purchase
					and processing of electrical and electronic
					equipment or components specified in Schedule - I of
					the Rules.
				</p>
				<p style={{ fontWeight: "600" }}>
					Relcube India Pvt. Ltd. has joined a CPCB authorized
					Producer Responsibility Organization (PRO) Exigo
					Recycling Private Limited to fulfil its Extended
					Producer Responsibility (EPR) compliance. Exigo
					Recycling Pvt. Ltd. is registered as a Recycler with
					Haryana State Pollution Control Board for recycling
					of all the e-waste and with Central Pollution
					Control Board as a Producer Responsibility
					Organization (PRO) fulfilling Extended Producer
					Responsibility (EPR) requirements of Producers.
				</p>
				<p className='title'>
					{" "}
					For more information on our PRO, please visit
					<a
						href="https://exigorecycling.in"
						target="_blank"
						rel="noreferrer"
						className="text-dark"
					>
						{" "}
						www.exigorecycling.in.
					</a>
				</p>
				<p className='title'>
					At Recycledevice, we are committed for responsible
					recycling of our end-of-life products. Also, all
					dead and non-reusable devices that we receive via
					our platform are recycled by our PRO as per Govt of
					India guidelines.
				</p>
				<p className='title'>
					What is E-Waste?
				</p>
				<p>
					<Image
						src="/images/wasted_img.png"
						alt="wasted img"
						height={24}
						width={20}
						style={{
							float: "left",
							marginRight: "0.35rem",
						}}
					/>
					E-waste means electrical and electronic equipment,
					whole or in part discarded as waster by the consumer
					or bulk consumer as well as rejects from
					manufacturing, refurbishment, and repair processes.
					Such waste comprises of both usable and non-usable
					material. Some of the waste if left unattended will
					be detrimental to environment. E-waste may comprise
					of hazardous substances like lead, mercury, toxic
					material, and gases. Look for the below logo on the
					equipment, before discarding, if it is there then
					it’s an E-waste.
					<br />
					To learn more about your e-waste, please reach out
					to our PRO’s email ID sourcing@exigorecycling.com or
					call toll free number 1800 1025 018.
				</p>
				<p className='title'>
					Health Effects:
				</p>
				<p>
					When we throw out our electronics, they land up in
					Landfill causing the possibility of toxic metal
					leaching into the groundwater. Toxic metals in
					e-waste leach into our supply of resources,
					threatening their integrity. When e-waste is openly
					heated which is a rudimentary process by the
					un-registered user or scrap dealers, toxic chemicals
					are released into the air, damaging the atmosphere,
					and posing a serious threat to health and existing
					life. E-Waste management is a critical consideration
					for future generations as proper e-waste recycling
					is becoming hard to find, with very less efficient
					recyclers in the business. It is crucial to know
					effects of e-waste on the environment and make a
					collective effort to build awareness and systems to
					curb all its ill positioning for our existing and
					future generation. To know more please call on 1800
					22 24 22, 1800 209 8904 for more details.
				</p>
				<p className='title'>
					Consequences
				</p>
				<p>
					Improper handling, accidental breakage damage and
					improper recycling of the end-of-life product has
					the following consequences: If batteries are not
					properly disposed off, it can cause harm to human
					health or the environment. Placing of batteries or
					devices on or in heating devices, such as microwave
					ovens, stoves, or radiators and improper disposal of
					batteries may lead to explosion. If the battery
					terminals are in contact with metal objects, it may
					cause a fire.
				</p>
				<p className='title'>
					Important {`Do's and Don'ts`}
				</p>
				<ol
					style={{
						listStyleType: "disc",
						marginBottom: "0.5rem",
					}}
				>
					<li>
						As our valued customer, we encourage you to
						channelize your e-waste only through the
						collection channels set up by Exigo Recycling.
					</li>
					<li>
						Please check for the life cycle of your product
						on the Product Information Booklet.
					</li>
					<li>
						Do check for buyback value on Recycledevice
						platform.
					</li>
					<li>
						Please drop your scrap electronic parts,
						handed-back to you after replacement with the
						new part, at the e-waste drop box in the service
						center.
					</li>
					<li>
						Please do not sell e-waste to scrap dealers or
						unauthorized agents.
					</li>
					<li>
						Please do not dispose of e-waste in landfill or
						in pits as an ill-treasure for your next
						generation
					</li>
					<li>
						Please do not dismantle unused electronics
						without expert supervision, as it can be
						hazardous to you and the environment.
					</li>
					<li>
						Please do not cut-open parts or components
						without brand {`representative's /`} Expert
						supervision.
					</li>
					<li>
						Do not mix e-waste in your home dustbins with
						other municipal waste.
					</li>
					<li>
						Keep the product in isolated area, after it
						becomes non-functional/un-repairable to prevent
						its accidental breakage.
					</li>
				</ol>
				<p className='title'>
					Collection Network
				</p>
				<table className='table'>
					<thead>
						<tr>
							<th style={{ width: '60px', textAlign: 'center' }}>S.No</th>
							<th style={{ width: '120px', textAlign: 'center' }}>State</th>
							<th style={{ width: '120px', textAlign: 'center' }}>City</th>
							<th style={{ width: '200px', textAlign: 'center' }}>Service Provider</th>
							<th>
								Address of collection centers/collection
								points
							</th>
							<th style={{ width: '160px', textAlign: 'center' }}>Toll Free Number</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> 1 </td>
							<td>Haryana</td>
							<td>Panipat</td>
							<td>Exigo Recycling Pvt. Ltd.</td>
							<td>Opp. Kripal Ashram, Main Barsat Road, Noorwala, Panipat-132103, Haryana</td>
							<td>1800 1025 018</td>
						</tr>
						<tr>
							<td> 2 </td>
							<td>Haryana</td>
							<td>Samalkha</td>
							<td>Exigo Recycling Pvt. Ltd.</td>
							<td>72km Stone, NH1 (NCR), Next to Maruti Showroom, Samalkha, Haryana - 132101</td>
							<td>1800 1025 018</td>
						</tr>
						<tr>
							<td> 3 </td>
							<td>Maharashtra</td>
							<td>Mumbai</td>
							<td>Exigo Recycling Pvt. Ltd.</td>
							<td>B-03, Ground Floor, Aditya Heriatge, Near Jeena House Om Nagar, Sahar Village, Andheri (E) Mumbai - 400099</td>
							<td>1800 1025 018</td>
						</tr>
					</tbody>
				</table>
				<p>Bulk Consumer and RWA’s has a responsibility to dispose e-waste generated due to their activities in a safe manner as per GOI guidelines. If you are a bulk consumer or RWA, please contact our PRO on given email ID and Toll Free number for your e-waste management.</p>

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

export default EWastePolicy