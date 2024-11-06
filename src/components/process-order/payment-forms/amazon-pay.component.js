import Image from "next/image";
import React, {useContext} from "react";
import {ProcessOrderContext} from "@/context/process-order.context";
import MD5 from "crypto-js/md5"
const AmazonPayComponent = (props) => {

    const {orderParams, setOrderParams}  = useContext(ProcessOrderContext)

    const handleSubmit = () => {
        orderParams['payment_method'] = props.payment_method_data.method_name
        orderParams['voucher_name'] = props.payment_method_data.method_name
        orderParams['voucher_id'] = MD5(props.payment_method_data.voucher_details.voucher_id)
        const newOrderParams = Object.assign({}, orderParams)
        setOrderParams(newOrderParams)
        props.moveNext()
    }

    const calculateFinalPrice = ()=>{
        return parseInt(parseInt(props.quote_details.quote_value)+parseInt(props.quote_details.offer_value)+(parseInt(props.quote_details.quote_value)+parseInt(props.quote_details.offer_value))*props.payment_method_data.voucher_details.voucher_discount/100)
    }

    return (
      <div className='amazon'>
        <div className='subTitle'>
            <div className='figure'>
                <Image src="https://qacdn.recycledevice.com/app_assets/amazon-pay.svg"
                       width={80} height={80}
                       alt="Upi"
                />
            </div>
            <div className='price'>
                <p><span> ₹ </span> {calculateFinalPrice()}</p>
            </div>
        </div>
        <div className="amazon_txt">
          <p>Get {props.payment_method_data.voucher_details.voucher_discount}% Extra on Amazon Pay Gift Card</p>
          <p className='text-muted'>Amazon Pay Gift Cards cannot be transferred for value or redeemed for cash.</p>
        </div>
        <div className="next-btn">
            <button type="button" className="btn btn-orange"onClick={()=>{handleSubmit()}}> Next </button>
            <div className='card_img amazon_logo'>
                <Image src="https://qacdn.recycledevice.com//app_assets/issued-by-qwikcilver.png" alt="Paytm" width={120} height={80}/>
            </div>
        </div>
    </div>)
}

export default AmazonPayComponent