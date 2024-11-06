import {FaMapMarkerAlt} from "react-icons/fa";
import {checkPincodeServiceability} from "@/frontend-libs/reown-lib";
import {useEffect, useRef, useState} from "react";

const PincodeCheckComponent = ({pincodeCheckCallback}) => {

    const [status, setStatus] = useState('')
    const pinRef = useRef()

    useEffect(() => {
        let delivery_pincode = localStorage.getItem('delivery_pincode')
        if(delivery_pincode){
            pinRef.current.value = delivery_pincode
            pincodeCheckCallback(true)
            setStatus("serviceable")
        }
    })

    const checkPincode = async () => {
        let pincode = pinRef.current.value
        if(pincode.length==6){
            const pincode_result = await checkPincodeServiceability(pincode)
            if(pincode_result.status == 200){
                if(pincode_result.message=='pincode_servicable'){
                    pincodeCheckCallback(true)
                    setStatus('serviceable')
                    localStorage.setItem("delivery_pincode", pincode)
                }else{
                    pincodeCheckCallback(false)
                    setStatus('Pincode is not serviceable')
                    localStorage.removeItem("delivery_pincode")
                }
            }else{
                pincodeCheckCallback(false)
                setStatus("Some error occurred")
                localStorage.removeItem("delivery_pincode")
            }
        }else{
            pincodeCheckCallback(false)
            setStatus("")
            localStorage.removeItem("delivery_pincode")
        }
    }

    return (<div className='pincode'>
        <p>Enter pincode to see product availablity</p>
        <div className="material">
            <input type="text" required id="pincode" onInput={checkPincode} maxLength={6} ref={pinRef}/>
            <hr/>
            <label htmlFor="pincode">Enter Pincode</label>
            <div className="map_icon">
                <FaMapMarkerAlt/>
            </div>
        </div>
        {status && status!='serviceable'?(<div className="erorr">{status}</div>):''}
        {status && status=='serviceable'?(<div className="success">Pincode is serviceable</div>):''}
    </div>)
}
export default PincodeCheckComponent