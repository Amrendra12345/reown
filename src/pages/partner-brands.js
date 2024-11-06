import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
const PartnerBrands = () => {
   const settings = {      
        slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            focusOnSelect: true,
            arrows: true,
            centerMode: true,
            speed: 800,
            infinite: true,
            autoplaySpeed: 3500,
            centerPadding: '0px',
            dots: false, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className='ourPartner'>
      <div className='container'>
        <div className='heading_2'>
             <h1>Our Partners</h1>
        </div>
        <div className='page_card'>
          <div className='slider mb-2'>
              <Slider {...settings}>
               <div className='slider__card'>
                  <div className='cards text-center'>
                  <Image src="/images/home/Amazon.png" alt='home' width={182} height={62} />
                    <div className='caption'>
                      <p> <strong>Amazon</strong></p>
                      <p>Sourcing Partner</p>
                    </div>
                  </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/AxisBank.png" alt='home' width={182} height={62} />
                   <div className='caption'>
                      <p><strong>Axis Bank</strong></p>
                      <p>Payment Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/bizlog-icon.png" alt='home' width={182} height={62} />
                   <div className='caption'>
                     <p><strong> Bizlog </strong></p>
                      <p>Logistics Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/ecom-express-icon.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                    <p><strong>Ecom Express </strong></p>
                    <p>Logistics Partner</p>
                    </div>
                </div>
              </div>
                <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/flipkart-icon.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                      <p><strong>Flipkart </strong></p>
                      <p>Voucher Partner</p>
                  </div>
                </div>
              </div>
                <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/Gupshup.png" alt='home' width={182} height={62} />
                   <div className='caption'>
                      <p><strong>Gupshup </strong></p>
                        <p>Messaging Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/icici-icon.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                    <p><strong>ICICI </strong></p>
                    <p>Payment Partner</p>
                  </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/Lendingkart.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                      <p><strong>Lendingkart</strong> </p>
                        <p>Lending Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center mx-1'>
                  <Image src="/images/home/msg91-icon.png" alt='home' width={182} height={62} />
                  <div className='caption'> 
                    <p><strong> MSG91 </strong> </p>
                    <p>Messaging Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center mx-1'>
                  <Image src="/images/home/payment-icon.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                    <p><strong>Paytm </strong></p>
                      <p>Payment Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/Pickrr.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                   <p><strong>Pickrr </strong></p>
                  <p> Logistics Partner</p>
                  </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/Qwikcilver.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                     <p><strong> Qwikcilver </strong></p>
                      <p> Payment Partner</p>
                    </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/Razorpay.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                    <p><strong> Razorpay </strong></p>
                     <p>Payment Partner</p>
                  </div>
                </div>
              </div>
              <div className='slider__card'>
                <div className='cards text-center'>
                  <Image src="/images/home/shadowfax-icon.png" alt='home' width={182} height={62} />
                  <div className='caption'>
                    <p><strong>Shadowfax</strong></p>
                    <p>Logistics Partner</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className='noteContent'>
              <p><strong>Note : </strong> {' '}  All Brand / Product names and logos are property of their respective owners and are used on this website for identification purposes only and does not imply any endorsement by Recycledevice.</p>
          </div>
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

export default PartnerBrands;