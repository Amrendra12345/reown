import Image from "next/image"

import Carousel from 'react-bootstrap/Carousel';
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { SparklesCore } from "../ui/sparkles";
import OurServices from "@/pages/reown/ourServices";
import WhyChooseUs from "@/pages/reown/whyChooseUs";
import HappyClient from "@/pages/reown/happyClient";
import HomeHowItWorks from "../home/home-how-it-works";
import HomeFaqsComponent from "../home/home-faqs.component";
import Link from "next/link";


const ReownHome = (props) => {

    return (
        <>
        <section className="reown">
           <div className="container">
               <div className="reown_wrapper">
                   <div className="reown_content">
                      <h1 className="text-2xl p-4 text-center font-bold text-white">Reown Refurbished <span> Laptops & Mobile </span></h1>
                      <p>Are you looking to purchase a laptop but when you see the prices, are unable to pick one as it might be too expensive?</p>
                      <p>What if there was an option to get the laptop you desired at a price that suits your budget?</p>
                     <p>Refurbished laptops are the perfect solution as they are cost-friendly and prove to be the best alternative to an otherwise high-priced gadget.</p>
                    <p>There has been a huge increase in the popularity of Laptops, which has resulted in the launch of an array of Mid-range to High-end laptops. All this has made buying those Laptops a bit difficult especially for the middle class, but with the arrival of refurbished Laptops owning a business class laptop of your dreams has become a lot simpler and lucrative.</p>
                    <div className="flex justify-center mt-4">
                      <Link href={"/buy-laptop"} className="btn bg-slate-800 rounded-sm text-white uppercase py-2 hover:bg-slate-700">Show Now</Link>
                    </div>
                   </div>
                   <div className="reown_banner p-4">
                   <SparklesCore />
                   <BackgroundBeamsWithCollision>
                     <Carousel>
                        <Carousel.Item>
                           <div className="w-[500px] h-[350px] relative">
                               <Image src={'/banner/laptop-2.svg'} alt="banner-1" className="object-contain" sizes="(min-width: 808px) 40vw, 70vw" fill />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                           <div className="w-[500px] h-[350px] relative">
                               <Image src={'/banner/laptop-3.svg'} alt="banner-2"  className="object-contain" sizes="(min-width: 808px) 40vw, 70vw" fill />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                           <div className="w-[500px] h-[350px] relative">
                               <Image src={'/banner/laptop-4.svg'} alt="banner-3"  className="object-contain" sizes="(min-width: 808px) 40vw, 70vw" fill />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                           <div className="w-[500px] h-[350px] relative">
                               <Image src={'/banner/laptop-5.svg'} alt="banner-4"  className="object-contain" sizes="(min-width: 808px) 40vw, 70vw" fill />
                            </div>
                        </Carousel.Item>
                     </Carousel>                    
                    </BackgroundBeamsWithCollision>	
                    
                   </div>
               </div>
           </div>
        </section>
        <OurServices/>
        <WhyChooseUs/>
        <HappyClient/>
        <HomeHowItWorks/>
        <HomeFaqsComponent/>
        </>
    //  <section className="reown">
    //     <div className="container">
    //         <div className="reown_home">
    //             <div className="reown_home__content">
    //                 <div className="heading">
    //                     <h1>Reown Refurbished <span> Laptops & Mobile </span></h1>
    //                 </div>
    //                 <p>Are you looking to purchase a laptop but when you see the prices, are unable to pick one as it might be too expensive?</p>
    //                 <p>What if there was an option to get the laptop you desired at a price that suits your budget?</p>
    //                 <p>Refurbished laptops are the perfect solution as they are cost-friendly and prove to be the best alternative to an otherwise high-priced gadget.</p>
    //                 <p>There has been a huge increase in the popularity of Laptops, which has resulted in the launch of an array of Mid-range to High-end laptops. All this has made buying those Laptops a bit difficult especially for the middle class, but with the arrival of refurbished Laptops owning a business class laptop of your dreams has become a lot simpler and lucrative.</p>

    //             </div>
    //             <div className="reown_home__figure">
    //                 <Image src="/images/reown_bg.svg" width={550} height={250} alt="reown_bg"/>
    //             </div>
    //         </div>
    //         <div className="page_card">
    //             <div className="pageTitle">
    //                 <p>Key Feature</p>
    //             </div>
    //             <div className="keyIcons">
    //                 <div className="icon">
    //                     <Image src="/images/assured.svg" alt="Assured Buyback Program-icon" width={40} height={40} />
    //                     <div className="caption">
    //                         <p>Assured Buyback Program</p>
    //                     </div>
    //                 </div>
    //                 <div className="icon">
    //                     <Image src="/images/piggy-bank.svg" alt="Budget Friendly-icon" width={40} height={40} />
    //                     <div className="caption">
    //                         <p>Budget Friendly</p>
    //                     </div>
    //                 </div>
    //                 <div className="icon">
    //                     <Image src="/images/high-Quality.svg" alt="High-Quality Product-icon" width={40} height={40} />
    //                     <div className="caption">
    //                         <p>High-Quality Product</p>
    //                     </div>
    //                 </div>
    //                 <div className="icon">
    //                     <Image src="/images/branded-Delight.svg" alt="branded-Delight-icon" width={40} height={40} />
    //                     <div className="caption">
    //                         <p>Brand Delight</p>
    //                     </div>
    //                 </div>
    //                 <div className="icon">
    //                     <Image src="/images/truck__icon.svg" alt="Express delivery-icon" width={40} height={40} />
    //                     <div className="caption">
    //                         <p>Express delivery</p>
    //                     </div>
    //                 </div>
    //                 <div className="icon">
    //                     <Image src="/images/warranty.svg" alt="Warranty-icon" width={40} height={40} />
    //                     <div className="caption">
    //                         <p>Warranty</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="next-btn">
    //                 <Link className="btn btn-orange" href="/buy-laptop">
    //                     <Image src='/images/cart.svg' width={20} height={16} alt="cart icon"/>
    //                     <span> Shop Now </span> 
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    )
}

export default ReownHome