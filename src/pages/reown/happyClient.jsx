import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';

const HappyClient = () => {

  return (
    <div className='happyClient'>
    <BackgroundBeamsWithCollision >
        <div className='container w-full'>
                 
            <div className='wrapper pb-16 pt-4'>
                <div className='flex-1 flex justify-center items-center gap-4'>
                    <Image src={'/icon/icon-1.png'} width={50} height={50} alt='icon-1'/>
                    <div className='border-l ps-4'>
                        <p className='text-xl text-white'>Happy Clients</p>
                        <p className='text-4xl text-white font-bold'> <CountUp end={98234}></CountUp></p>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center gap-4'>
                    <Image src={'/icon/icon-2.png'} width={50} height={50} alt='icon-1'/>
                    <div className='border-l ps-4'>
                        <p className='text-xl text-white'>Completed Deals</p>
                        <p className='text-4xl text-white font-bold'><CountUp end={298234}></CountUp></p>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center gap-4'>
                <Image src={'/icon/icon-3.png'} width={50} height={50} alt='icon-1'/>
                  <div className='border-l ps-4'>
                        <p className='text-xl text-white'>Running Procet</p>
                        <p className='text-4xl text-white font-bold'><CountUp end={9234}></CountUp></p>
                    </div>
                </div>
                <div className='flex-1 flex justify-center items-center gap-4'>
                <Image src={'/icon/icon-4.png'} width={50} height={50} alt='icon-1'/>
                    <div className='border-l ps-4'>
                        <p className='text-xl text-white'>Award Winning</p>
                        <p className='text-4xl text-white font-bold'><CountUp end={8234}></CountUp></p>
                    </div>
                </div>
            </div>  
            </div>       
         </BackgroundBeamsWithCollision>
         
    </div>
  )
}

export default HappyClient