
import Image from 'next/image'
const HomeCounters = (props) => {
    return <section className="counters">
            <div className="container">
                <div className="heading">
                  <h2>Loved by customers, represented by numbers</h2>
                </div>
                <div className="counters__wrap">
                    <div className="counters__wrap__inner_box">
                        <div className="icon_box">
                            <Image src="/images/new_images/start_Date.svg" className="img-fluid" alt="established date" width={100} height={100} />
                        </div>
                        <div className="content_box">
                            <p>Established Date</p>
                            <p><strong>July 2017</strong></p>
                        </div>
                    </div>
                    <div className="counters__wrap__inner_box">
                        <div className="icon_box">
                                <Image src="/images/new_images/alexa_Ranking.svg" width={100} height={100} className="img-fluid" alt="top ranked website" />
                        </div>
                        <div className="content_box">
                            <p> Alexa Ranking </p>
                            <p><strong>#2 in C2B Buyback India </strong></p>
                        </div>
                    </div>
                    <div className="counters__wrap__inner_box">
                        <div className="icon_box">
                                <Image src="/images/new_images/googleReviews.svg" width="100" height="100" className="img-fluid" alt="100% customer satisfacation" />
                        </div>
                        <div className="content_box">
                            <p> Google Reviews Ranking </p>
                            <p><strong>4.2</strong></p>
                        </div>
                    </div>
                    <div className="counters__wrap__inner_box">
                        <div className="icon_box">
                            <Image src="/images/new_images/customers.svg" width="100" height="100" className="img-fluid" alt=" customers served" />
                        </div>
                        <div className="content_box">
                            <p> Total Customers</p>
                            <p><strong><span>{props.home_counters.customers}</span> Thousand </strong></p>
                        </div>
                    </div>
                    <div className="counters__wrap__inner_box">
                        <div className="icon_box">
                            <Image src="/images/new_images/totalDevices.svg" width="100" height="100" className="img-fluid" alt="total purchase devices" />
                        </div>
                        <div className="content_box">
                            <p>Total Devices</p>
                            <p><strong><span>{props.home_counters.devices}</span> Thousand </strong></p>
                        </div>
                    </div>
                    <div className="counters__wrap__inner_box">
                        <div className="icon_box">
                            <Image src="/images/new_images/quotes.svg" width="100" height="100" className="img-fluid" alt="get instant quote for your device" />
                        </div>
                        <div className="content_box">
                            <p>Total Orders Value</p>
                            <p><strong><span>{props.home_counters.orders_value}</span> crores </strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}

export default HomeCounters