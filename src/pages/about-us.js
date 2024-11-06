import Image from "next/image";
import {withSessionSsr} from "@/server-libs/session-lib";
import { getCommonData } from "@/server-libs/helpers";



const About = (props) => {
    return (
        
        <div className="container">
            <div className="heading_2">
                <h1>About Us</h1>
            </div>
            <div className="page_card">
                <div className="about_us">
                    <div className="pageTitle">
                        <p>Who we are</p>
                    </div>
                    <p>Established in 2017, Recycledevice is registered trademark of Relcube India Private Limited; top re-commerce company of India involved in end-to-end management of reverse inventories.</p>
                    <p>Products merchandise, Pricing engine, Advanced diagnostics, Fintech integrations, Forward & Reverse logistics, Liquidation of devices are built, managed and run by Recycledevice in-house teams and partners. Our efforts in building these tools is a step ahead to make pre-owned market digital and transparent which is largely unorganized in India and around the world.</p>
                    <p>The super-efficient C2B2B reverse inventory ecosystem and AI tech enable wholesalers, retailers, e-commerce giants and brands to execute buybacks directly from end customers in a very transparent, digital, and organized way. Door-step pick-up service and instant payments make the selling process simpler for our customers. Our own warehouses and offices across India enable us to operate in all major states.</p>
                    <p>We are technology aggregators and inventory providers feeding top refurbishers, retailers, wholesalers of the re-commerce world. We also offer our technology as Platform as a Service (PaaS) and various business opportunities to new, budding micro entrepreneurs. We at Recycledevice has aligned our efforts to the {`country's`} collective vision to brace our people for the upcoming digital revolution. We serve thousands of customers everyday and their overwhelming positive feedback tells us we are on right track.</p>
                    <p>We are young but enthusiastic, we are new but well known, we are passionate, we are focused, we are Recycledevice.</p>
                    <div className="pageTitle">
                    <p>{`From CEO 's Desk`}</p>
                    </div>
                    <p>Current re-commerce market has atleast three times potential of new devices market, as a new phone or laptop can only be sold once but the same device can change hands three to four times in pre-owned market before finally reaching end of life. Trust that reusing an old device not only allows masses to experience technology with affordability but also reduces carbon footprints protecting our planet.</p>
                    <div className="title">
                    <p>Our Team</p>
                    </div>
                    <p>Recycledevice is lovingly built and maintained by below folks. The people who work at Recycledevice share the vision and values of our community. We are driven by the idea that the best work is born from diligence, craftsmanship and fun.</p>
                </div>
                <div className="our-teams">
                    <div className="member">
                        <Image src="/images/team/puneet.jpg" alt="team_img" width={250} height={250} />
                        <div className="caption">
                            <p>Puneet Jain</p>
							<span>Founder &amp; CEO</span>
                        </div>
                    </div>
                    <div className="member">
                        <Image src="/images/team/Siddharth.png" alt="team_img" width={250} height={250} />
                        <div className="caption">
                            <p>Siddhartha Narain</p>
							<span>Co-Founder</span>
                        </div>
                    </div>
                    <div className="member">
                        <Image src="/images/team/prince.png" alt="team_img" width={250} height={250} />
                        <div className="caption">
                            <p>Prince Arora</p>
							<span>Technology</span>
                        </div>
                    </div>
                    <div className="member">
                     <Image src="/images/team/gautam.jpg" alt="team_img" width={250} height={250} />
                      <div className="caption">
                             <p>Gautam Kumar</p>
							 <span>Sourcing & Products </span>
                        </div>
                    </div>
                    <div className="member">
                     <Image src="/images/team/ketan.png" alt="team_img" width={250} height={250} />
                      <div className="caption">
                             <p>Ketan Kumar</p>
							 <span>Business Operations </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>        
    )
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
}
);

export default About;