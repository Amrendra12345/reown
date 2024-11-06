import React, {useContext, useEffect, useState} from 'react';
import {FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from 'next/image';
import {getPaymentMethods} from "@/frontend-libs/webapi_lib";
import {ProcessOrderContext} from "@/context/process-order.context";
import AmazonPayComponent from "@/components/process-order/payment-forms/amazon-pay.component";
import UpiComponent from "@/components/process-order/payment-forms/upi.component";
import BankTransferComponent from "@/components/process-order/payment-forms/bank-transfer.component";

const PaymentMethodsComponent = (props) => {

	const {customerKey,quoteKey} = useContext(ProcessOrderContext)
	const [paymentMethodList, setPaymentMethodList] = useState([])
	const [selectedPayment, setSelectedPayment] = useState(null)
	const [quoteDetails, setQuoteDetails]= useState(null)

	useEffect(() => {
		(async ()=>{
				const payment_method_result = await getPaymentMethods(customerKey, quoteKey)
				if(payment_method_result.status==200){
					setPaymentMethodList(payment_method_result.data.payment_methods)
					setQuoteDetails(payment_method_result.data.quote_details)
				}else{
					if(payment_method_result.message.search('expired')!=-1){
						//open pop up for quote expired
						props.setQuoteExpired(true)
					}
				}
		})();
	},[])

  const clickBack = () => { 
	props.moveBack()
  }

  const choosePayment = (method_name) => {
		setSelectedPayment(method_name)
  }

  const showSelectedMethodForm = () => {
	  switch(selectedPayment){
		  case 'Bank Transfer / IMPS': return (<BankTransferComponent moveNext={props.moveToNext}/>)
		  case 'Amazon Pay': return (<AmazonPayComponent moveNext={props.moveToNext} quote_details={quoteDetails} payment_method_data={getPaymentMethodByName(selectedPayment)}/>)
		  case 'UPI':return  (<UpiComponent moveNext={props.moveToNext}/>)
		  default: return <></>
	  }
  }

  const getPaymentMethodByName =(method_name) => {
		for(let i=0;i<paymentMethodList.length;i++)
			if(method_name == paymentMethodList[i].method_name)
				return paymentMethodList[i]
  }

  return (
		<>			
		<div className='pageTitle mt-0'>
			<p>  CHOOSE PAYMENT METHOD </p>
			<button type='button' className='btn-back' onClick={clickBack} > </button>
		</div>
		<div className='paymentMetod'>
			{
				paymentMethodList.map((payment_method) =>{
					return (
						<div className={`card ${selectedPayment == payment_method.method_name ? "active" : ''}`} key={payment_method.method_name} onClick={()=>{choosePayment(payment_method.method_name)}}>
							<div className={`card__${payment_method.method_name}`}>
								<Image src={payment_method.method_image} alt={payment_method.method_name} width={60} height={60} />
								<div className='card__caption'>
									<p>{payment_method.method_name}</p>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
		<div className="paymentMetod__content">
			{ showSelectedMethodForm() }
		</div>
	
		</>
  );
}

export default PaymentMethodsComponent;