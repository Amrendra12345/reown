import Image from 'next/image';

const HomeHowItWorks = (props) => {
    return <section className='how-It-Work pb-4 pt-3'>
            <div className='container '>
                <div className='heading'>
                    <h2>Sell Old Mobile Phone or Laptop for Instant Cash</h2>
                    <p>We buy old used new second hand Mobile Phones & Laptops in just 3 easy steps</p>
                </div>
                <div className='how-It-Work__wrap'>
                <div className='how-It-Work__wrap_content'>
                     <div className='content_box'>
                        <Image src="/images/new_images/get_quote.svg" className="img-fluid" alt="get quote for your old mobile" width="324" height="324" />
                        <div className='content_box__content'>
                        <h6><span>1</span> Check Price</h6>
                            <p>Provide device details and get the best price through our advanced pricing engine.</p>
                            </div>
                        </div>
                    </div>
                <div className='how-It-Work__wrap_content'>
                    <div className='content_box'>
                        <Image src="/images/new_images/schedule_pickup.svg" width="324" height="324" className="img-fluid" alt="free pickup for old devices" />
                    
                       <div className='content_box__content'>
                            <h6><span>2</span> Schedule Pickup</h6>
                            <p>Free pickup from your home or office address as per your chosen date and time slot.</p>
                            </div>
                        </div>
                    </div>
                <div className='how-It-Work__wrap_content'>
                    <div className='content_box'>
                        <Image src="/images/new_images/get_paid.svg" className="img-fluid" draggable="false" alt="sell mobile and get paid" width="324" height="324" />
                        <div className='content_box__content'>
                            <h6><span>3</span> Get Paid</h6>
                            <p>Instant and 100% onspot secure payment at the time of device pickup.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

}

export default HomeHowItWorks;