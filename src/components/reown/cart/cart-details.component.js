import Link from "next/link";
import React, {useEffect, useRef} from "react";
import CartAddressComponent from "@/components/reown/cart/cart-address.component";
import CartItemsComponent from "@/components/reown/cart/cart-items.component";
import {useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {useRouter} from "next/router";
import ApplyCouponComponent from "@/components/reown/cart/apply-coupon.component";
import CartTotalComponent from "@/components/reown/cart/cart-total.component";
import {getCartData} from "@/redux/cart/cart.selector";

const CartDetailsComponent = (props) => {
    const scrollTopRef = useRef(null);
    const auth = useSelector(getAuthData)
    const cart = useSelector(getCartData)
    const router = useRouter()

    /**
     * Check for authentication
     */
    useEffect(()=>{
        if(auth.authLoaded){
            if(!auth || !auth.currentUser)
                router.push('/')
        }
    }, [auth])

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = () => {
        const cartBreadcrumb = scrollTopRef.current.getBoundingClientRect();
        const breadcrumb = document.querySelector('.cart__breadcrumb');
        const scrollTop = window.scrollY;
        if (scrollTop > cartBreadcrumb.height) {
            breadcrumb.classList.add('sticky');
        } else {
            breadcrumb.classList.remove('sticky');
        }
    }
    return (
        <section className='cart'>
            <div className="cart__breadcrumb" ref={scrollTopRef}>
                <div className='container'>
                    <div className='page_card'>
                        <ul className="breadcrumb">
                            <li><Link href="/"> Home </Link></li>
                            <li><Link href="/reown"> Reown </Link></li>
                            <li><Link className="active" href="/cart"> cart </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container mt-0'>
                <div className='cart__delivery'>
                {
                    (!cart || !cart.cartItems.length)?<>Cart is empty<br/><Link href={'/buy-laptop'}>Go To Products</Link></>:(<>
                        <div className="cart__delivery__address">
                            <CartAddressComponent />
                            <CartItemsComponent />
                        </div>
                        <div className="cart__delivery__prices">
                            <ApplyCouponComponent />
                            <CartTotalComponent />
                        </div>
                    </>)
                }
                </div>
            </div>
        </section>
    )
}

export default CartDetailsComponent