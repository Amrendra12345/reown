import {BiRupee} from "react-icons/bi";
import React from "react";
import {useSelector} from "react-redux";
import {getCartData} from "@/redux/cart/cart.selector";

const CartTotalComponent = (props) => {

    const cart = useSelector(getCartData)

    const handlePayNow = () => {

    }

    return (<div className="page_card">
        <div className="priceDetails">
            <div className="pageTitle">
                <p>Price Details</p>
            </div>
            <hr/>
            <div className="totalPrice">
                <p>Total</p>
                <p><BiRupee/>{cart?.cartTotal}</p>
            </div>
            <div className="couponDiscount">
                <p>Coupon Discount</p>
                <p><BiRupee/>{cart?.cartDiscount}</p>
            </div>
            <div className="deliveryCharges">
                <p>Delivery Charges</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="total">
                <p>Total</p>
                <p><BiRupee/>{cart?.cartTotal}</p>
            </div>
            <hr/>
            <div className="text-center">
                <button type="button" className="btn btn-orange" onClick={handlePayNow}>Pay Now</button>
            </div>
        </div>
    </div>)
}

export default CartTotalComponent