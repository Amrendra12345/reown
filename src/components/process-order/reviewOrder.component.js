import {FaRegArrowAltCircleLeft } from "react-icons/fa";
import {useContext, useRef, useState} from "react";
import {ProcessOrderContext} from "@/context/process-order.context";
import {placeOrder} from "@/frontend-libs/webapi_lib";
import {redirect} from "next/navigation";
import {useRouter} from "next/router";
const ReviewOrderComponent = (props) => {

    const {orderParams} = useContext(ProcessOrderContext)
    const [enablePlaceOrder, setEnablePlaceOrder] = useState()
    const router =  useRouter()

    const acceptTerms = (event) => {
        if(event.target.checked)
            setEnablePlaceOrder(true)
        else
            setEnablePlaceOrder(false)
    }

    const clickBack = ()=>{
        props.moveBack()
    }

    const handlePlaceOrder = async ()=>{
        if(enablePlaceOrder){
            const place_result = await placeOrder(orderParams['quote_key'], orderParams['mobile'], orderParams['address_id'], orderParams['payment_method'], orderParams['bank_name']??'', orderParams['bank_no']??'', orderParams['bank_ifsc']??'', orderParams['paytm_no']??'', orderParams['voucher_id']??'', orderParams['timeslot'],orderParams['vpa']??'' )
            if(place_result.status == 200){
                router.push('/order-placed/'+place_result.data.order_id)
            }else{
                alert(place_result.message)
            }
        }
    }

    const displayPaymentMethodDetails =()=>{
        switch(orderParams['payment_method']){
            case 'Amazon Pay':
                return (<>
                    <tr>
                        <td>Payment Method</td>
                        <td>{orderParams['payment_method']} Gift Card</td>
                    </tr>
                    <tr>
                        <td>Voucher Name</td>
                        <td>Amazon Pay</td>
                    </tr>
                </>)
            case 'UPI':
                return (<>
                    <tr>
                        <td>Payment Method</td>
                        <td>{orderParams['payment_method']}</td>
                    </tr>
                    <tr>
                        <td>UPI Id</td>
                        <td>{orderParams['vpa']}</td>
                    </tr>
                </>)
            case 'Bank Transfer / IMPS':
                return <>
                    <tr>
                        <td>Payment Method</td>
                        <td>{orderParams['payment_method']}</td>
                    </tr>
                    <tr>
                        <td>Account Name</td>
                        <td>{orderParams['bank_name']}</td>
                    </tr>
                    <tr>
                        <td>Account Number</td>
                        <td>{orderParams['bank_no']}</td>
                    </tr>
                    <tr>
                        <td>IFSC Code</td>
                        <td>{orderParams['bank_ifsc']}</td>
                    </tr>
                </>
            default: return <></>
        }
    }

    return (
        <>
            <div className='pageTitle mt-0'>
                <p>REVIEW ORDER</p>
                <button type='button' className='btn-back' onClick={clickBack}></button>
            </div>
            <div className='reviewOrder'>
                <table className='table'>
                    <tbody>
                        <tr>
                           <th colSpan={2}>Your Details</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                             <td>{orderParams['first_name']}</td>
                        </tr>
                        <tr>
                                <td>Email</td>
                                 <td>{orderParams['email']}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{orderParams['mobile']}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{orderParams['house']+', '+orderParams['street']+', '+orderParams['area']+', '+orderParams['city']+', '+orderParams['state']+'- '+orderParams['pincode']}</td>
                            </tr>
                            <tr>
                               <th colSpan={2}>Pickup Details</th>
                            </tr>
                            <tr>
                                <td>Timeslot</td>
                                <td>{orderParams['timeslot']}</td>
                            </tr>
                            <tr>
                               <th colSpan={2}>Payment Details</th>
                            </tr>
                            {displayPaymentMethodDetails()}
                    </tbody>
                </table>
            </div>
            <div className='coupon-code'>
                <div className='inputCheckBox'>
                    <input type='checkbox' value="something" onClick={acceptTerms}/>
                    <label >I agree to the <a href='#'>Terms & Conditions</a></label>
                </div>
                <div className='couponCode'>
                    <input type="text" className="form-control" id="coupon" placeholder="COUPON CODE" />
                    <button type='button' className="btn btn-orange">APPLY</button>
                </div>
            </div>
            <div className='next-btn'>
              <button type='button' className={`btn ${enablePlaceOrder == true ? "btn-orange" : "disabled"}`} onClick={handlePlaceOrder}>PLACE ORDER</button>
            </div>
        </>
    )
}
export default ReviewOrderComponent;