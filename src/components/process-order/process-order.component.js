import VariantImageSpecsComponent from "@/components/ques-ans/VariantImageSpecsComponent";
import React, {useContext, useEffect, useState} from "react";
import UserProfileComponent from "@/components/process-order/user-profile.component";
import AddressesListComponent from "@/components/process-order/addresses-list.component";
import PaymentMethodsComponent from "@/components/process-order/payment-methods.component";
import TimeslotsComponent from "@/components/process-order/timeslots.component";
import {ProcessOrderContext} from "@/context/process-order.context";
import ReviewOrderComponent from "@/components/process-order/reviewOrder.component";
import PageExpire from "@/components/modal/pageExpire";

const ProcessOrderComponent = (props) => {

    const {setCustomerKey,setQuoteKey} = useContext(ProcessOrderContext)
    const userSections = ['profile','address','payment','timeslot','order-preview']
    const [activeSection, setActiveSection]= useState(0)
    const [quoteExpired, setQuoteExpired] = useState(false)

    const renderRightSection = () => {
        switch (userSections[activeSection]){
            case 'profile':return <UserProfileComponent user_details = {props.user_details} quote_details={props.quote_details} moveToNext={moveToNext} moveBack={moveBack} setQuoteExpired={setQuoteExpired}/>
            case 'address':return <AddressesListComponent moveToNext={moveToNext} moveBack={moveBack} setQuoteExpired={setQuoteExpired}/>
            case 'payment':return <PaymentMethodsComponent moveToNext={moveToNext} moveBack={moveBack} setQuoteExpired={setQuoteExpired}/>
            case 'timeslot':return <TimeslotsComponent moveToNext={moveToNext} moveBack={moveBack} setQuoteExpired={setQuoteExpired}/>
            case 'order-preview':return <ReviewOrderComponent moveBack={moveBack} setQuoteExpired={setQuoteExpired}/>
        }
    }

    const moveToNext = () => {
        if(activeSection < userSections.length-1){
            setActiveSection(activeSection+1)
        }

    }
    const moveBack = () => {
        if(activeSection > 0){
            setActiveSection(activeSection-1)
        }
    }

    useEffect(()=>{
        if(props.user_details){
            setCustomerKey(props.user_details.customer_id)
        }
        setQuoteKey(props.quote_key)
    }, [])

    return ( <><div className="container">
        <div className="page_card">
            <div className={`row ${userSections[activeSection]}`}>
                <div className="col-Left">
                     <VariantImageSpecsComponent {...props.variant_details} device_report={props.device_report} order_value={parseInt(props.quote_details.quote_value) + parseInt(props.quote_details.offer_value)} />
                </div>
                <div className="col-Right">
                     {renderRightSection()}
                </div>
            </div>
        </div>
    </div>
    {quoteExpired?<PageExpire/>:''}
        </>
    )
}



export default ProcessOrderComponent