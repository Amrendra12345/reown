import Image from "next/image";
import {BiRupee, BiTrash} from "react-icons/bi";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {getCartData} from "@/redux/cart/cart.selector";
import {cartActions} from "@/redux/cart/cart.reducer";
import {getAuthData} from "@/redux/auth/auth.selector";
import {checkEstimatedDelivery} from "@/frontend-libs/reown-lib";

const CartItemsComponent = (props) => {

    const dispatch = useDispatch()
    const cart = useSelector(getCartData)
    const auth = useSelector(getAuthData)
    const [deliveryTime, setDeliveryTime] = useState('')

    /**
     * Get authenticated user cart data
     */
    useEffect(() => {
        if(auth.authLoaded && auth.currentUser){
            dispatch(cartActions.syncCartData())
        }
    }, [auth])

    useEffect(() => {
        if(auth.authLoaded && auth.currentUser){
            (async ()=> {
                const est_delivery = await checkEstimatedDelivery(auth.token, localStorage.delivery_pincode)
                if(est_delivery.status == 200){
                    if(est_delivery.data.courier)
                    {
                        setDeliveryTime(est_delivery.data.courier.estimated_delivery)
                    }
                }
            })()
        }
    }, [auth])

    const handleCartRemove = (product_sku_id) => {
        dispatch(cartActions.removeCart(product_sku_id))
    }

    return (<div className="cart__delivery__cartItems">
        <div className="page_card">
            <div className='page_title mb-1'>
                <p>
                    <Image src="/images/summary__icon.svg" width={22} height={20} alt="address icon" />
                    Cart Items
                </p>
            </div>
            {
                cart?.cartItemsData?cart.cartItemsData.map((item) => {
                    return (
                        <div className="cartItem" key={item.product_sku_id}>
                            <div className="cart_img">
                                <Image src={item.product_icon} width={85} height={70} alt="laptop"/>
                            </div>
                            <div className="cart_content">
                                <div className="pageTitle">
                                    <p>{item.product_title}</p>
                                </div>
                                <div className="quantityPrices">
                                    <div className="quantity">
                                        <p>Quantity :</p>
                                        <p>1</p>
                                    </div>
                                    <div className="prices">
                                        <p>Price :</p>
                                        <p><BiRupee/><span>{item.amount}</span></p>
                                    </div>
                                </div>
                                <div className="deliveryBy">
                                    <p>Delivery by : </p>
                                    <p>{deliveryTime}</p>
                                </div>
                            </div>
                            <div className="cart_remove">
                                <BiTrash onClick={() => handleCartRemove(item.product_sku_id)}/>
                            </div>
                        </div>
                    )
                }):''
            }

        </div>
        <div className="text-right">
            <Link href={'/buy-laptop'} type="button" className="btn btn-yellow"> Back To Products </Link>
        </div>
    </div>)
}

export default CartItemsComponent