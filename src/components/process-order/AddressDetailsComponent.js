import {manageAddress} from "@/frontend-libs/webapi_lib";
import {useContext, useRef} from "react";
import { ProcessOrderContext } from "@/context/process-order.context";

import { useState } from "react";

const AddressDetailsComponent = (props) => {

  const {customerKey, quoteKey} = useContext(ProcessOrderContext)
  const pinRef = useRef()
  const localityRef = useRef()
  const houseRef = useRef()
  const streetRef = useRef()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const submitAddress = async () => {
      const submit_result = await manageAddress(quoteKey, customerKey, props.address.address_type, houseRef.current.value, streetRef.current.value, localityRef.current.value, pinRef.current.value)
      if(submit_result.status == 200){
          setSuccess('Address has been saved')
          setError('')
          setTimeout(function () {
              props.cancelEdit()
          }, 1000);
      }else{

          if(submit_result.message.search('expired')!=-1){
              //open pop up for quote expired
              props.setQuoteExpired(true)
          }

          setSuccess('')
          setError(submit_result.message)
          setTimeout(function () {
              setError(submit_result.message)
          }, 1000);
      }
  }

    return (
     
        <>
            <div className='pageTitle mt-0'>
                <p> ENTER YOUR DETAILS </p>
                <button type='button' className='btn-back' onClick={props.cancelEdit}></button>
            </div>
            <div className='addressDetails'>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <label for="">Pincode *</label>
                        <input type='text' className="form-control" defaultValue={props.address.pincode??''} ref={pinRef}/>
                    </div>
                    <div className='form-group__input'></div>
                </div>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <label for="">Area / Locality *</label>
                        <input type='text' className="form-control" defaultValue={props.address.locality??''} ref={localityRef}/>
                    </div>
                    <div className='form-group__input'>
                        <label for="">House No. / Office No. *</label>
                        <input type='text' className="form-control" defaultValue={props.address.house_no??''} ref={houseRef}/>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-group__input'>
                        <label for="">Building / Street Name *</label>
                        <input type='text' className="form-control" defaultValue={props.address.street_no??''} ref={streetRef}/>
                    </div>
                    <div className='form-group__input'></div>
                </div>
                 <p className='error'>{error}</p>
                 <p className='success'>{success}</p>
                <div className='next-btn'>
                    <button type='button' className='btn btn-orange' onClick={submitAddress}>Save</button>
                </div>
            </div>
      </>
        
  )
}
export default AddressDetailsComponent
