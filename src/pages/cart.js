import React, { useEffect, useRef, useState } from "react";
import {withSessionSsr} from "@/server-libs/session-lib";
import {getCommonData} from "@/server-libs/helpers";
import CartDetailsComponent from "@/components/reown/cart/cart-details.component";

const Cart = (props) => {
    return <CartDetailsComponent  {...props} />
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({req, query}){

	const data = [];
	const result = await getCommonData(req, data)
	if(result.success == true){
		return {
			props: {
				...result.data,
			}
		}
	}
	return {
		props:{}
	}
})

export default Cart