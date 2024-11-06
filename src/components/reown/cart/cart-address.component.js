import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {useRouter} from "next/router";
import {profileActions} from "@/redux/profile/profile.reducer";
import {getBillingAddress, getDeliveryAddress, getparty} from "@/redux/profile/profile.selector";

const CartAddressComponent = (props) => {
    const auth = useSelector(getAuthData)
    const billingAddress = useSelector(getBillingAddress)
    const deliveryAddress = useSelector(getDeliveryAddress)
    const party = useSelector(getparty)
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false);
    const [checked, setChecked] = useState(true);
    const [businessChecked, setBusinessChecked] = useState(false);
    const nameRef = useRef()
    const emailRef = useRef()
    const deliveryHouseRef = useRef()
    const deliveryStreetRef = useRef()
    const deliveryLocalityRef = useRef()
    const deliveryCityRef = useRef()
    const deliveryStateRef = useRef()
    const deliveryPincodeRef = useRef()
    const deliveryBillingSame = useRef()
    const billingHouseRef = useRef()
    const billingStreetRef = useRef()
    const billingLocalityRef = useRef()
    const billingCityRef = useRef()
    const billingStateRef = useRef()
    const billingPincodeRef = useRef()
    const buyForBusinessRef = useRef()
    const companyRef = useRef()
    const gstRef = useRef()

    const toggleHandler = ()=>{
        setIsActive(!isActive);
    }

    const handleChange =(e)=>{
        setChecked(e.target.checked);
    }
    const businessCheckbox =(e)=>{
        setBusinessChecked(e.target.checked)
    }

    /**
     * Load authenticated user profile details
     */
    useEffect(()=>{
        if(auth.authLoaded && auth.currentUser){
                dispatch(profileActions.getProfileFullDetails())
        }
    }, [auth])

    const handleAddressSubmit = () => {
        const billingSame = deliveryBillingSame.current.checked?1:0
        const businessBuy = buyForBusinessRef.current.checked?1:0
        dispatch(profileActions.saveDeliveryDetails({
            name:nameRef.current.value,
            email:emailRef.current.value,
            shipto_houseno:deliveryHouseRef.current.value,
            shipto_street:deliveryStreetRef.current.value,
            shipto_locality:deliveryLocalityRef.current.value,
            shipto_city:deliveryCityRef.current.value,
            shipto_state:deliveryStateRef.current.value,
            shipto_pincode:deliveryPincodeRef.current.value,
            billing_same_as_shipping:billingSame,
            billing_houseno:billingSame?deliveryHouseRef.current.value:billingHouseRef.current.value,
            billing_street:billingSame?deliveryStreetRef.current.value:billingStreetRef.current.value,
            billing_locality:billingSame?deliveryLocalityRef.current.value:billingLocalityRef.current.value,
            billing_city:billingSame?deliveryCityRef.current.value:billingCityRef.current.value,
            billing_state:billingSame?deliveryStateRef.current.value:billingStateRef.current.value,
            billing_pincode:billingSame?deliveryPincodeRef.current.value:billingPincodeRef.current.value,
            buying_for_business:businessBuy,
            gst_no:businessBuy?gstRef.current.value:'',
            company_name:businessBuy?companyRef.current.value:''
        })).unwrap().then((data)=>{
            if(data.status == 200){
                setIsActive(!isActive);
            }
        })
    }


    return (<div className="page_card">
        <div className="cart__delivery__address_content">
            {deliveryAddress?(<><div className="deliveyAddress">
                <div className='page_title'>
                    <p>
                        <Image src="/images/address__icon.svg" width={22} height={20} alt="address icon" />
                        Delivery Address
                    </p>
                </div>
                <div className='address'>
                    <p>{deliveryAddress?.party_address_line_1+' '+(deliveryAddress?.party_address_line_2??'')}, {deliveryAddress?.party_city}, {deliveryAddress?.party_state}, India-{deliveryAddress?.party_pincode}</p>
                </div>
                <div className='edit_address'>
                    <button type='button' className={`btn btn-edit ${isActive ? 'active':''}`} onClick={toggleHandler}>Edit <BsFillArrowRightCircleFill /></button>
                </div>
            </div>
                <div className="delivery_img">
                    <Image src='/images/address__banner.svg' alt="address banner" width='160' height={80} />
                </div></>):''}
        </div>
        <div className={`shipping__Address ${(isActive || !deliveryAddress) ? 'active':''}`}>
            <hr/>
            <div className="page_title pt-1">
                <p>
                    <Image src="/images/address__icon.svg" width={22} height={20} alt="address icon" />
                    Shipping Address
                </p>
            </div>
            <form className="mt-1">
                <div className="form-group">
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="fullname" className="form-control" required defaultValue={party?.party_name??''} ref={nameRef}/>
                            <hr/>
                            <label htmlFor="fullname">Full Name</label>
                        </div>
                    </div>
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="email" className="form-control" required defaultValue={party?.party_email} ref={emailRef}/>
                            <hr/>
                            <label htmlFor="email">E-Mail</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="houseNo" className="form-control" required defaultValue={deliveryAddress?.party_house_no??''} ref={deliveryHouseRef}/>
                            <hr/>
                            <label htmlFor="houseNo"> House No.</label>
                        </div>
                    </div>
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="streetName" className="form-control" required defaultValue={deliveryAddress?.party_street_no??''} ref={deliveryStreetRef}/>
                            <hr/>
                            <label htmlFor="streetName">Street Name</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="locality" className="form-control" required defaultValue={deliveryAddress?.party_locality??''} ref={deliveryLocalityRef}/>
                            <hr/>
                            <label htmlFor="locality">Locality</label>
                        </div>
                    </div>
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="city" className="form-control" required defaultValue={deliveryAddress?.party_city??''} ref={deliveryCityRef}/>
                            <hr/>
                            <label htmlFor="city">City</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="locality" className="form-control" required defaultValue={deliveryAddress?.party_state??''} ref={deliveryStateRef}/>
                            <hr/>
                            <label htmlFor="locality">State</label>
                        </div>
                    </div>
                    <div className="form-group__input">
                        <div className="material">
                            <input type="text" id="postalCode" className="form-control" required defaultValue={deliveryAddress?.party_pincode??''} ref={deliveryPincodeRef}/>
                            <hr/>
                            <label htmlFor="postalCode">Postal Code</label>
                        </div>
                    </div>
                </div>
                <div className="form-group form-group-checkbox">
                    <input type="checkbox" name="billingAddress" id="billingAddress" checked={checked} onChange={handleChange} ref={deliveryBillingSame}/>
                    <label htmlFor="billingAddress">Billing address is same as the Shipping address</label>
                </div>
                <hr className="mt-1 mb-1"/>
                <div className={`billingAddress ${!checked? 'active':''}`}>
                    <div className="page_title pt-1">
                        <p>
                            <Image src="/images/address__icon.svg" width={22} height={20} alt="address icon" />
                            Billing Address
                        </p>
                    </div>
                    <div className="form-group">
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="houseNo" className="form-control" required defaultValue={billingAddress?.party_house_no??''} ref={billingHouseRef}/>
                                <hr/>
                                <label htmlFor="houseNo"> House No.</label>
                            </div>
                        </div>
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="streetName" className="form-control" required defaultValue={billingAddress?.party_street_no??''} ref={billingStreetRef}/>
                                <hr/>
                                <label htmlFor="streetName">Street Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="locality" className="form-control" required defaultValue={billingAddress?.party_locality??''} ref={billingLocalityRef}/>
                                <hr/>
                                <label htmlFor="locality">Locality</label>
                            </div>
                        </div>
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="city" className="form-control" required defaultValue={billingAddress?.party_city??''} ref={billingCityRef}/>
                                <hr/>
                                <label htmlFor="city">City</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="locality" className="form-control" required defaultValue={billingAddress?.party_state??''} ref={billingStateRef}/>
                                <hr/>
                                <label htmlFor="locality">State</label>
                            </div>
                        </div>
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="postalCode" className="form-control" required defaultValue={billingAddress?.party_pincode??''} ref={billingPincodeRef}/>
                                <hr/>
                                <label htmlFor="postalCode">Postal Code</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group form-group-checkbox">
                    <input type="checkbox" name="billingBusiness" id="billingBusiness" checked={businessChecked} onChange={businessCheckbox} ref={buyForBusinessRef}/>
                    <label htmlFor="billingBusiness">Buying For Your Business?</label>
                </div>
                <div className={`billingBusiness ${businessChecked? 'active':''}`}>
                    <div className="form-group">
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="gstno" className="form-control" required ref={gstRef}/>
                                <hr/>
                                <label htmlFor="gstno"> GST Number</label>
                            </div>
                        </div>
                        <div className="form-group__input">
                            <div className="material">
                                <input type="text" id="companyName" className="form-control" required ref={companyRef}/>
                                <hr/>
                                <label htmlFor="companyName">Company Name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-1 mb-1"/>
                <div className="next-btn text-center">
                    <button type="button" className="btn btn-orange" onClick={handleAddressSubmit}>Save</button>
                </div>
            </form>
        </div>
    </div>)
}

export default CartAddressComponent