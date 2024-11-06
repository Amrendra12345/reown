import DeviceImageComponent from "./DeviceImageComponent";
import DeviceSpecificationComponent from "./DeviceSpecificationComponent";
import {useState} from "react";
import PincodeSearchComponent from "@/components/pincode-search/pincode-search.component";
import Link from "next/link";
import {useRouter} from "next/router";
import {setUserCity} from "@/frontend-libs/webapi_lib";
import {capitalizeFirstLetter, getCategorySlug} from "@/frontend-libs/helpers";

const VariantUptoComponent = (props) => {

	const [orderType, setOrderType] = useState('')
	const [enableNext, setEnableNext] = useState(false)
	const [city, setCity] = useState('')
	const [pincode, setPincode] = useState('')
	const router = useRouter()


	const selectOrderType = (orderType)=>{
		setOrderType(orderType);
	}

	const pincodeCallback = (data) => {
		if(data.status && data.pincode_details){
			setCity(data.pincode_details.city)
			setPincode(data.pincode_details.pincode)
			setEnableNext(true)
		}else{
			setCity('')
			setPincode('')
			setEnableNext(false)
		}
	}

	const continueNext = async (url) => {
		if(pincode && city){
			const result = await setUserCity(pincode, city)
			if(result.status==200){
				router.push(url)
			}
		}
		return false
	}
	
	return (
		<>			
			<div className="heading_1">
				<h2>{`Sell Old ${props.variant_details.variant_slug.toUpperCase()}`}</h2>
			</div>
			<div className="page_card">
				<div className='search_breadcrumb mb-2'>
					<ul className='breadcrumb'>
						<li><Link href='/'> Home </Link></li>
				     	<li>
						<Link href={`/sell-${getCategorySlug(props.category)}`}  className=""> Sell Old {capitalizeFirstLetter(props.category)} </Link>
						</li>
						<li><Link href={`/sell-${getCategorySlug(props.category)}/${props.brand}`} className="">Sell Old {capitalizeFirstLetter(props.brand)}</Link></li>
						<li>
							<Link href={`/sell-${getCategorySlug(props.category)}/${props.brand.toLowerCase()}/${props.variant_details.variant_slug.toLowerCase()}`} className="active">{`Sell Old ${capitalizeFirstLetter(props.variant_details.variant_name)}`}</Link></li>
					</ul>
				</div>
				<hr />
				<div className="row getUpto">
				    <div className="col-Left">
						<DeviceImageComponent image={props.variant_details.variant_image} brandName={props.variant_details.variant_name } />
					</div>
					<div className="col-Right">
						<DeviceSpecificationComponent specs={props.variant_details.specs} />
						<div className="getUpTo">
							{props.variant_details.sell_value ? <div className={`getUpTo__content ${orderType === 'sell'? 'active':''}`} onClick={()=>{ selectOrderType('sell')}}>
								<p className="sell"><span> Sell </span> & Get Upto </p>
								<p className="value"><span>₹</span> {props.variant_details.sell_value}</p>
							</div> : ''}
							{props.variant_details.recycle_value? <div className={`getUpTo__content ${orderType === 'recycle'? 'active':''}`}  onClick={()=>{ selectOrderType('recycle')}}>
								<p className="sell"><span> Recycle </span> & Get Upto </p>
								<p className="value"><span>₹</span> {props.variant_details.sell_value}</p>
							</div> : ''}
						</div>
						<div className="pincode">
						    <PincodeSearchComponent callback={pincodeCallback} />
						</div>
						<div className="btnNext">
							{(orderType=='sell' || orderType =='')?(<button type="button" className="btn btn-orange" onClick={() => continueNext('/sell/' + props.variant_details.variant_slug)}>Next</button>):''}
							{orderType == 'recycle' ? (<button type="button" className="btn btn-orange" onClick={() => continueNext('/recycle/' + props.variant_details.variant_slug)}>Next</button>) : ''}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VariantUptoComponent;
