import {withSessionSsr} from "@/server-libs/session-lib";
import { getCommonData } from "@/server-libs/helpers";
import Image from "next/image";
import AppDownloadComponent from "@/components/AppDownload/AppDownload-Component";

const B2bMarketplace = () => {
  return (
    <section className="marketplace">
        <div className="container">
            <div className="heading_2">
                <h1>B2B Marketplace</h1>
            </div>
            <div className="page_card">
                <div className="figure">
                  <Image src="/images/b2bmarketplace.webp" sizes="100vw" width={1000} height={500}
                    style={{
                        width: '100%',
                        height: 'auto',
                      }} alt="b2b marketplace" priority/>
                </div>
                <div className="content">
                    <p>Founded in 2017, we have established ourselves as a trusted online market platform servicing thousands of customers every day. We are currently onboarding registered individuals / firms to associate with us as business partners in various cities across India who are already running distribution business, retail shops, repair / efurbishing centers in mobile phones, laptops, smart devices sector or who are looking forward to starting a new business in this domain.</p>
                </div>
                <div className="heading">
                    <h2>Marketplace Partner</h2>
                </div>
                <div className="content pt-1">
                    <p>Get access to inventories from Recycledevice PAN India warehouses at wholesale prices and super discounts. Stop thinking and start business with us today by downloading RD Partners app via Whatsapp link or Google Play link.</p>
                </div>
                <AppDownloadComponent />
            </div>
        </div>

    </section>
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

export default B2bMarketplace