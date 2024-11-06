import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "@/redux/cart/cart.reducer";

const ApplyCouponComponent = () => {

    const couponRef = useRef()
    const dispatch = useDispatch()
    const handleApplyCoupon = async () => {
        if(couponRef.current.value){
            const resp = await dispatch(cartActions.applyCouponAction(couponRef.current.value)).unwrap()
            if(resp.status == 200){

            }else{
                //show apply coupon error
            }
        }else{
            //show empty error
        }
    }

    const handleRevokeCoupon = async () => {
        const resp = await dispatch(cartActions.revokeCouponAction()).unwrap()
        if(resp.status == 200){

        }else{

        }
    }

    return (<div className='page_card'>
        <div className="haveCoupon">
            <div className="haveCoupon__labels">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3a1 1 0 0 0-1 1v4h.893c.996 0 1.92.681 2.08 1.664A2.001 2.001 0 0 1 3 14H2v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4h-1a2.001 2.001 0 0 1-1.973-2.336c.16-.983 1.084-1.664 2.08-1.664H22V6a1 1 0 0 0-1-1zM9 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-.8 6.4 6-8 1.6 1.2-6 8-1.6-1.2zM15 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"></path></svg>
                <p>Have a Coupon Code ?</p>
            </div>
            <div className="haveCoupon__form-group">
                <input type="text" className="form-control" ref={couponRef}/>
                <button type="button" className="btn btn-orange" onClick={handleApplyCoupon}>Apply</button>
            </div>
        </div>
    </div>)
}

export default ApplyCouponComponent