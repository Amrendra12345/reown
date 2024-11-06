import AppDownloadComponent from '@/components/AppDownload/AppDownload-Component';
import Image from 'next/image';
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const TrackOrder = () => {
    return (
		<section className="trackOrder">
           <div className='container'>
            <div className="heading_2">
                <h1>Track Order</h1>
            </div>
            <div className="page_card">
                <div className="figure">
                    <Image src="/images/new_images/track_Order.svg" fill alt='track order img'/>
                </div>
                <div className="content">
                    <p>Download our mobile application for automated QC of your device, instant quote generation and REAL TIME TRACKING of your orders including payments, re-scheduling, and cancellations.</p>
                            <p>Login using your mobile number and OTP and you are all set.</p>
                </div>
                <div className="downloadApp">
                    
                </div>
                    
            </div>
            </div>
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

export default TrackOrder