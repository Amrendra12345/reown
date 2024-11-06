import Image from 'next/image'
import React, { useState } from 'react'

const OurServices = () => {
    const [isActive, setIsActive] = useState(false)
    
  return (
    <section className='ourServices pb-5 bg-white'>
       <div className='container'>
           <div className='heading pb-4'>
             <h2 className=''> Our Services</h2>
           </div>
           <div className='flex justify-between item-center'>
               <div className='left_content flex-1 flex flex-col'>
                  <div className='flex justify-end w-full pt-4 flex-col'>
                   <h3 className={`text-xl text-end font-semibold relative  ${isActive === 'mobile' ? 'active':''}`} onClick={()=>setIsActive('mobile')}>
                   <span></span> Mobile Repair</h3>
                   <p className='text-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`&#39;`}s standard dummy text ever since the 1500s.</p>

                  </div>
                  <div className='mt-auto flex justify-end w-full pb-4 flex-col'>
                        <h3 className={`text-xl text-end font-semibold laptop ${isActive ==='laptop'? 'active':''}`} onClick={()=>setIsActive('laptop')}>
                        <span></span> 
                        Laptop Repair</h3>
                        <p className='text-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`&#39;`}s standard dummy text ever since the 1500s.</p>
                  </div>
               </div>
               <div className='left_content flex-1 flex justify-center items-center'>
                  <div className='service-img'>  
                   {
                    isActive === 'mobile' ? (
                        <Image src={'/banner/service-img-02.jpg'} className='rounded-full' width={300} height={300} alt='service-img-1'/>
                    ):
                    isActive === 'laptop' ? (
                        <Image src={'/banner/service-img-03.jpg'} className='rounded-full' width={300} height={300} alt='service-img-1'/>
                    ):
                    isActive === 'computer' ? (
                        <Image src={'/banner/service-img-04.jpg'} className='rounded-full' width={300} height={300} alt='service-img-1'/>
                    ):
                    isActive === 'tablet' ? (
                        <Image src={'/banner/service-img-01.jpg'} className='rounded-full' width={300} height={300} alt='service-img-1'/>
                    )
                    :(
                        <Image src={'/banner/service-img-01.jpg'} className='rounded-full' width={300} height={300} alt='service-img-1'/>
                    )

                   }                    
                  </div>
               </div>
               <div className='left_content flex-1 flex flex-col'>
                  <div className='flex justify-start w-full pt-4 flex-col'>
                   <h3 className={`text-xl text-start font-semibold tablet ${isActive === 'tablet' ? 'active':''}`} onClick={()=>setIsActive('tablet')}>
                   <span></span>Tablet Repair</h3>
                   <p className='text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`&#39;`}s standard dummy text ever since the 1500s.</p>

                  </div>
                  <div className='mt-auto flex justify-end w-full pb-4 flex-col'>
                        <h3 className={`text-xl text-start font-semibold computer ${isActive === 'computer' ? 'active':''}`} onClick={()=>setIsActive('computer')}> <span></span> Computer Repair</h3>
                        <p className='text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`&#39;`}s standard dummy text ever since the 1500s.</p>
                  </div>
               </div>
           </div>
       </div>
    </section>
  )
}

export default OurServices