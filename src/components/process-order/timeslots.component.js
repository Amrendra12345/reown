import React, {useContext, useEffect, useRef, useState} from "react";
import { ProcessOrderContext } from "@/context/process-order.context";
import {viewTimeslots} from "@/frontend-libs/webapi_lib";
import Selectbox from "@/frontend-libs/selectbox";



const TimeslotsComponent = (props) => {

    const {customerID,quoteKey,orderParams,setOrderParams} = useContext(ProcessOrderContext)
    const [timeslots, setTimeslots] = useState([])
    const [enableNext, setEnableNext] = useState(false)
    const tsRef = useRef()

    const clickBack = ()=>{
        props.moveBack()
    }
   

    useEffect(() => {
        (async ()=>{
            const timeslot_result = await viewTimeslots(quoteKey, orderParams['pincode'])
            if(timeslot_result.status=200){
                setTimeslots(timeslot_result.data.timeslots)
            }else{
                if(timeslot_result.message.search('expired')!=-1){
                    //open pop up for quote expired
                    props.setQuoteExpired(true)
                }
            }
        })();
    },[])

    const handleSelect = (e)=>{
        orderParams['timeslot'] = e
        const newOrderParams = Object.assign({}, orderParams)
        setOrderParams(newOrderParams)
        setEnableNext(true)
    }

    const moveNext = () => {
        if(enableNext)
        {
            props.moveToNext()
        }
    }

    return (
        <>
            <div className="pageTitle mt-0">
                <h4> PICKUP DATE & TIME </h4>
                <button type="button" className="btn-back" onClick={clickBack}> </button>
            </div>    
            <div className="pickupTime__form">
                    <div className="form-group">
                        <div className="form-group__input">
                            <label>Select a suitable timeslot</label>
                            <p className="text-muted">Choose pickup date and time from the list</p>
                        </div>
                        <div className="form-group__input">
                            <Selectbox options={
                                timeslots.map((timeslot)=>{
                                    return{
                                        label:timeslot.pickup_date+' / '+timeslot.pickup_timeslot,
                                        value:timeslot.pickup_date+' / '+timeslot.pickup_timeslot
                                    }
                                })
                            } 
                          
                            onChangeHandler={(e)=>handleSelect(e.value)} 
                            />

                            {/* <select className="form-control" onChange={handleSelect} ref={tsRef}>
                        {timeslots.map(function(timeslot){
                            return (
                                    <option key={timeslot.pickup_date+timeslot.pickup_timeslot}>{timeslot.pickup_date+' / '+timeslot.pickup_timeslot}</option>
                            )
                        })}
                            </select> */}
                        </div>
                    </div>                                                         
            </div>          
            <div className="next-btn">
                <button  className={`btn ${enableNext == true ? "btn-orange" : "disabled"}`} onClick={moveNext}>Review Order</button>
            </div>         
     </>
  )
}

export default TimeslotsComponent;