import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";

const LaptopQc = (props) => {
    return (
        <>
            <section className='laptopQc'>
                <div className='container'>
                    <div className='heading_2'>
                       <h1>Download QC Software</h1>
                    </div>
                    <div className='page_card'>
                        <p className='pt-2'>Download and run our advanced QC software to get best value for your computer.</p>
                        <p>The software evaluates your {`computer's`} system configuration and hardware functional faults. Be assured, no personal information including any files or media stored on your computer is scanned or accessed by the software making it completly safe to use.</p>
                        <p>Recycledevice is the only buyback company in market which provides this software to its customers for self evaluation and knowing the true value of your old computer.</p>
                        <div className='text-center pt-2 next-btn'>
                             <button type='button' className='btn btn-orange'>Click to Download</button>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
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

export default LaptopQc