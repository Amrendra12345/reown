import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className='whyChooseUs pb-4 bg-white'>
       <div className='container'>
          <div className='heading'>
              <h4>Why Choose Us</h4>
          </div>
          <div className='wrapper'>
            <div className='pro'>
               <div className='icon'>
                <Image src={'/icon/icon-01.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'> We Are Professional</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
              <div className='icon'>
                <Image src={'/icon/icon-02.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>Friendly Service</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
            <div className='icon'>
                <Image src={'/icon/icon-03.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>No Fix No Fees</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
            <div className='icon'>
                <Image src={'/icon/icon-04.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>Well Reputation</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
            <div className='icon'>
                <Image src={'/icon/icon-05.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>Free Diagnostics</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
            <div className='icon'>
                <Image src={'/icon/icon-06.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>Low Price Guarantee</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
            <div className='icon'>
                <Image src={'/icon/icon-07.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>Quick Repair Process</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
            <div className='pro'>
            <div className='icon'>
                <Image src={'/icon/icon-08.png'} width={50} height={50} alt='icon'/>
               </div>
                <p className='hadding-1'>Warantee</p>
                <p>Lorem Ipsum is simply dummy text of the print been the industry{`&#39;`}s standard.</p>
            </div>
          </div>
       </div>
     </section>
  )
}

export default WhyChooseUs