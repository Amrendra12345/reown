import DeliveryAddressComponent from "@/components/reown/deliveryAddress.component";
import Image from "next/image";
import {BiRupee} from "react-icons/bi";
import {FaFileDownload} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {getOrderData} from "@/redux/async-actions/async.actions";

const OrderDetailsComponent = (props) => {

    const router = useRouter()
    const auth = useSelector(getAuthData)
    const dispatch = useDispatch()
    const [order, setOrder] = useState(null)

    /**
     * Check for authentication
     */
    useEffect(()=>{
        if(auth.authLoaded){
            if(!auth || !auth.currentUser)
                router.push('/')
            else
            {
               dispatch(getOrderData(router.query.order_id)).unwrap().then((response)=> {
                   if(response.status == 200){
                       //console.log(response.data.order)
                       setOrder(response.data.order)
                   }
               })
            }
        }
    }, [auth])

    const cancelOrder =(sell_invoice_ref_no) => {
        if(sell_invoice_ref_no){

        }
    }

    const displayAddress = (order) => {
        return {
            address_line_1 : order.details[0]?.ship_to_address_line_1,
            address_line_2 : order.details[0]?.ship_to_address_line_2,
            city : order.details[0]?.ship_to_city,
            state : order.details[0]?.ship_to_state,
            pincode : order.details[0]?.ship_to_pincode
        }
    }

    const displayOrderStatus = (order) => {
        const status = order.summary.invoice_status.toLowerCase()
        const awb_status = order.summary.tracking_awb_status.toLowerCase()
        switch(status){
            case 'cancelled':
                return (<div className='orderStatus'>
                    <ul>
                        <li className='active'>
                            <span>Order Confirmed</span>
                            <span>{order.summary.invoice_date}</span>
                        </li>
                        <li className='active'>
                            <span>Cancelled</span>
                            <span></span>
                        </li>
                    </ul>
                </div>)
            default:
                return (<div className='orderStatus'>
                    <ul>
                        <li className='pre_active'>
                            <span>Order Confirmed</span>
                            <span>{order.summary.invoice_date}</span>
                        </li>
                        <li className={['shipped', 'delivered'].includes(status)?'pre_active':''}>
                            <span>Shipped</span>
                            <span></span>
                        </li>
                        <li className={((status=='shipped'&&awb_status=='out for delivery')||(status=='delivered'&&awb_status=='delivered'))?'pre_active':''}>
                            <span>Out For Delivery</span>
                            <span>.</span>
                        </li>
                        <li className={status=='delivered'?'pre_active':''}>
                            <span>Delivered</span>
                            <span>{order.summary.actual_delivery_date}</span>
                        </li>
                    </ul>
                </div>)

        }
        return (<div className='orderStatus'>
            <ul>
                <li className='active'>
                    <span>Order Confirmed</span>
                    <span>Fri, 11 Feb</span>
                </li>
                <li className='active'>
                    <span>Shipped</span>
                    <span>.</span>
                </li>
                <li className='active'>
                    <span>Out For Delivery</span>
                    <span>.</span>
                </li>
                <li className='active'>
                    <span>Delivered</span>
                    <span>Fri, 11 Feb</span>
                </li>
            </ul>
        </div>)
    }

    return (<section className='orderDetails'>
        <div className='container'>
            <div className='orderDetails__wrapper'>
                {order?(<><div className='orderDetails__main'>
                    <div className='page_card'>
                        <DeliveryAddressComponent {...displayAddress(order)}/>
                    </div>
                    <div className='page_card'>
                        <div className='orderContent'>
                            <div className='pageTitle'>
                                <Image src="/images/summary__icon.svg" width={25} height={28} alt='file icon'/>
                                <p>Order Details</p>
                            </div>
                        </div>
                        {order.details.map((data)=> {
                            return (<div className='orderContent__wrap' key={data.ext_invoice_ref_no}>
                                <div className='orderContent__wrap_figure'>
                                    <Image src={order.summary.product_icon} alt='laptop' width={80} height={80} />
                                </div>
                                {order.summary.cancel_allowed=='Y'?(<button type="button" className="btn btn-danger"
                                                                             onClick={()=>{cancelOrder(order.summary.sell_invoice_ref_no)}}>Cancel
                                    Order</button>):''}
                                <div className='orderContent__wrap_content'>
                                    <div className='pageTitle'>
                                        <p>{order.summary.product_title}</p>
                                    </div>
                                    <div className='qtyValue'>
                                        <div className='quantity'>
                                            <p> Quantity :</p>
                                            <p>1</p>
                                        </div>
                                        <div className='value'>
                                            <p><BiRupee/><span>{data.sell_invoice_total_value} </span></p>
                                        </div>
                                    </div>
                                    {displayOrderStatus(order)}
                                </div>
                            </div>)
                        })}

                    </div>
                </div>
                    <div className='orderDetails__aside'>
                        {order.summary.invoice_status !== 'Cancelled'?(<div className='page_card'>
                            <div className='downloadFile'>
                                <p><span><FaFileDownload /></span>   Download Invoice </p>
                                <button type='button' className='btn btn-orange'>Download</button>
                            </div>
                        </div>):''}
                        <div className='page_card'>
                            <div className='priceDetails'>
                                <div className='pageTitle'>
                                    <p>Price Details</p>
                                </div>
                                <hr/>
                                <div className='priceDetails_content'>
                                    <p><span>Total</span> <span><BiRupee/>{order.summary.sell_invoice_total_value}</span></p>
                                    <p><span>Delivery Charges</span> <span>Free</span></p>
                                </div>
                            </div>
                            <hr/>
                            <div className='priceDetails_total'>
                                <p><span>Total</span> <span><BiRupee/>{order.summary.sell_invoice_total_value}</span></p>
                            </div>
                            <div className='next-btn text-center'>
                                <hr/>
                                <button type='button' className='btn btn-orange mt-1'>Get Support</button>
                            </div>
                        </div>
                    </div></>):''}
            </div>
        </div>
    </section>)
}

export default OrderDetailsComponent