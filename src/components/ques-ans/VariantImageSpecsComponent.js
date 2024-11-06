import Image from 'next/image'
import React, {useContext} from 'react';
import { FaMicrochip, FaMemory, FaSdCard, FaBatteryHalf } from "react-icons/fa";
import {BiRupee } from 'react-icons/bi';
import {QuestionAnswersContext} from "@/context/question-answers.context";


const VariantImageSpecsComponent = (props) => {
    
  return (
      <>
          
              <div className="figure">
                  <Image src={props.variant_image} alt={`img-${props.variant_name}`} width={220} height={220} priority />
                  <div className="figure__caption">
                     <p className="brand_name">{props.variant_name}</p> 
                     <p className='orderValue'>{props.order_value > 0?<BiRupee/>:''}{props.order_value }</p>                
                   </div>
              </div>
          
        
              {
                  !props.device_report ? (
                      <div className='accessories'>                        
                        <div className='accessories_name'>
                            <p> {props.variant_name} </p>
                        </div>
                        <div className='accessories__content'>
                              <ul>
                                 {
                                    props.specs ? props.specs.map((spec) => {
                                        switch (spec.name) {
                                            case 'Processor':
                                                return (
                                                    <li key={spec.name}>
                                                        <span>
                                                            <span className='icon'><FaMicrochip /></span>
                                                            <span>Processor</span>
                                                        </span>
                                                        <span className='device_name'>{spec.value}</span>
                                                    </li>
                                                )
                                            case 'RAM':
                                                return (
                                                    <li key={spec.name}>
                                                        <span>
                                                            <span className='icon'><FaMemory /></span>
                                                            <span>RAM</span>
                                                        </span>
                                                        <span className='device_name'>{spec.value }</span>
                                                    </li>
                                                )
                                            case 'Storage':
                                                return (
                                                    <li key={spec.name}>
                                                        <span>
                                                            <span className='icon'><FaSdCard /></span>
                                                            <span>Storage</span>
                                                        </span>
                                                        <span className='device_name'>{spec.value }</span>
                                                    </li>
                                                )
                                            case 'Battery Capacity':
                                                return (
                                                    <li key={spec.name}>
                                                        <span>
                                                            <span className='icon'><FaBatteryHalf /></span>
                                                            <span>Battery Capacity</span>
                                                        </span>
                                                        <span className='device_name'>{spec.value }</span>
                                                    </li>
                                                )
                                        }
                                    }): '' 
                                 }
                              </ul>
                        </div>
                      </div>
                      
                  ) : (
                     <div className='device'>
                              {!props.order_value ? (
                                <>
                                 <div className='device_name'>
                                    <p>{props.variant_name}</p>
                                </div>
                                <div className='pageTitle'>
                                   <p>Device Report</p>
                                </div>
                            </>
                              ) : (<>
                                 <div className='device_name'>
                                    <p>{props.variant_name}</p>
                                  </div>
                                    <div className='device__value'>
                                        <p><BiRupee/> {props.order_value }</p>      
                                  </div>
                                </>
                              )       
                        }
                     
                        <div className='device__content'>
                            <table className='table'>
                                 <tbody>
                                   {
                                        props.device_report.map((report) => { 
                                            return (
                                                <tr key={report.title}>
                                                    <td>{report.title}</td>
                                                    <td>{report.value}</td>
                                               </tr>
                                           )
                                        })    
                                  }
                                </tbody>
                            </table>
                        </div>
                     </div>       
              )  
          }
             
           
          
        
     </>
  )
}

export default VariantImageSpecsComponent