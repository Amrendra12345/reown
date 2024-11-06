import {BiRupee} from "react-icons/bi";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {getOrdersList} from "@/redux/async-actions/async.actions";
import Link from "next/link";

const OrdersListComponent = () => {

    const auth = useSelector(getAuthData)
    const [ordersList, setOrdersList] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        if(auth.authLoaded && auth.currentUser){
            const order_resp = dispatch(getOrdersList()).unwrap().then((response)=>{
                if(response.status == 200){
                    setOrdersList(response.data.orders)
                }
            })

        }
    }, [auth])

    const displayOrderStatus = (order) => {
        switch (order.invoice_status){
            case 'Delivered': return (<div className="cancelled">
                <p>Delivered On {order.actual_delivery_date}</p>
            </div>)
            case 'Cancelled': return (<div className="cancelled">
                <p>Cancelled</p>
            </div>)
            default: return (<div className="cancelled">
                <p>Expected Delivery On {order.expected_delivery_date}</p>
            </div>)
        }
    }

    const displaySupportTicketData = (order) => {
        return order.ticket?(<div className="supportTicket">
            <div className="supportTicket_content">
                <p><span>Support Ticket</span> <span>#{order.ticket.ticket_master_id} :</span> <span> {order.ticket.ticket_subcategory}</span></p>
                <p>{order.ticket.ticket_problem_statement}</p>
            </div>
            <div className="supportTicket_btnOepn">
                <button type="button" className="btn-edit">{order.ticket.ticket_status=='O'?'Open':'Resolved'}</button>
            </div>
        </div>):''
    }

    return (<div className='orders__main'>
        {ordersList.length>0?ordersList.map((order)=>{
            return (
                <Link href={'/order-details/'+order.sell_invoice_ref_no} key={order.sell_invoice_ref_no}>
                <div className='page_card' >
                <div className='orders__main__content'>
                    <div className='order_heading mb-1'>
                        <div className='orderId'>
                            <p><span>Order</span> <span>#{order.sell_invoice_ref_no}</span></p>
                            <p>View order details</p>
                        </div>
                        <div className='orderDate'>
                            <p><span>Order Date</span></p>
                            <p> {order.invoice_date} </p>
                        </div>
                        <div className='orderTotal'>
                            <p><span> Total</span></p>
                            <p> <span><BiRupee/></span><span>{order.sell_invoice_total_value}</span>  </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="orderContent">
                        <div className="figure">
                            <Image src={order.product_icon} width={70} height={70} alt="laptop"/>
                        </div>
                        <div className="orderContent__content">
                            <div className="pageTitle">
                                <p>{order.product_title}</p>
                            </div>
                            {displayOrderStatus(order)}

                            <div className="status">
                                <p>Buyback Status :</p>
                                <p>Confirmed</p>
                            </div>
                            {displaySupportTicketData(order)}
                        </div>
                    </div>
                </div>
            </div></Link>)
        }):(<div>No data found</div>)}
    </div>)
}

export default OrdersListComponent