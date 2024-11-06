import Image from 'next/image';

const PlaceOrderComponent = (props) => {

	const displayPaymentMethodDetails = () => {
		switch (props.order_details.payment_method) {
			case 'Amazon Pay':
				return (<>
					<tr>
						<td>Payment Method</td>
						<td>{props.order_details.payment_method} Gift Card</td>
					</tr>
					<tr>
						<td>Voucher Name</td>
						<td>{props.order_details.payment_method}</td>
					</tr>
				</>)
			case 'UPI':
				return (<>
					<tr>
						<td>Payment Method</td>
						<td>{props.order_details.payment_method}</td>
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
						<td>{props.order_details.payment_method}</td>
					</tr>
					<tr>
						<td>Account Name</td>
						<td>{props.order_details.bank_acc_name}</td>
					</tr>
					<tr>
						<td>Account Number</td>
						<td>{props.order_details.bank_acc_no}</td>
					</tr>
					<tr>
						<td>IFSC Code</td>
						<td>{props.order_details.bank_ifsc}</td>
					</tr>
				</>
			default: return <></>
		}
	}

	return (
		<div className="container">
			<div className="page_card placeOrder">
				<div className='placeOrder__header'>
					<div className="placeOrder__header__content">
						<h4>ORDER CONFIRMATION # {props.order_details.order_id}</h4>
						<p>Dear ,</p>
						<p>Your order has been successfully placed with us.</p>
						<p>	Please quote above order confirmation reference	number on all future communications.</p>
					</div>
					<div className="placeOrder__header__figure">
						<Image width={200} height={200} src={props.variant_details.variant_image} alt={props.variant_details.variant_name} />
					</div>
				</div>
			</div>
			<div className='placeOrder__tables'>
				<div className='placeOrder__tables__order-details'>
					<div className='pageTitle'>
						<p>ORDER DETAILS</p>
					</div>
					<div className='page_card '>
						<table class="table">
							<tbody>
								<tr>
									<th>Name</th>
									<td>{props.customer_details.customer_name}</td>
								</tr>
								<tr>
									<th>Email</th>
									<td>{props.customer_details.customer_email}</td>
								</tr>
								<tr>
									<th>Mobile</th>
									<td>{props.customer_details.customer_mobile}</td>
								</tr>
								<tr>
									<th>Address</th>
									<td>{props.customer_details.customer_address}</td>
								</tr>
								<tr>
									<th width="30%">Device Model Name</th>
									<td>{props.variant_details.variant_name}</td>
								</tr>
								<tr>
									<th>Sell Value</th>
									<td>{props.order_details.original_order_value}</td>
								</tr>
								<tr>
									<th colspan="2">Pickup Details</th>
								</tr>
								<tr>
									<td>Timeslot</td>
									<td>{props.order_details.pickup_date}/{props.order_details.pickup_timeslot}</td>
								</tr>
								<tr>
									<th colspan="2">Payment Details</th>
								</tr>
								{displayPaymentMethodDetails()}
							</tbody>
						</table>
					</div>
				</div>
				<div className='placeOrder__tables__device-report'>
					<div className='pageTitle'>
						<p>DEVICE REPORT</p>
					</div>
					<div className='page_card'>
						<table class="table">
							<tbody>
								{
									props.device_report.map(function (report) {
										return (<tr key={report.title}>
											<td>{report.title}</td>
											<td>{report.value}</td>
										</tr>)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='next-btn mt-0 placeOrder_btn'>
				<button type='button' className='btn btn-orange'>Place Another Order</button>
			</div>
		</div>
	);
}

export default PlaceOrderComponent;