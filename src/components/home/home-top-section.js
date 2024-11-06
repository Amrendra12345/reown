import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
const HomeTopSection = (props) => {
    const settings = {
      dots: false,
      infinite: true,     
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,      
      lazyLoad: true,
      speed: 400,
      autoplaySpeed:9000,
    };
    return <section className="bannerTop">
            <div className="container">
                <div className="bannerTop__content">
                    <h1><span> Sell old </span> Mobile & Laptop </h1>
                    <p>Sell Old Mobile Phone & Laptop online in India for best price. Quick and Simple Process - Search
                        Device, Get Instant Quote, Choose Pickup Slot, Get Free Same Day Doorstep Pickup, Onspot
                        Payment
                    </p>
                </div>
                <div className="bannerTop__slider">
                    <Slider {...settings}>
                        <div className=''>
                          <Image src="/images/mobile.webp" width="920" height="250" alt="sell phone &amp; get same day free pickup"/>
                        </div>
                        <div className=''>
                            <Image src="/images/pickup.webp" width="920" height="250" alt="sell phone &amp; get same day free pickup"/>
                        </div>
                    </Slider>
                    <h1>TRUE PRICE NO SURPRISE</h1>
                </div>
            </div>
        </section>
}

export default HomeTopSection