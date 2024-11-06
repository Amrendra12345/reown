import React, { use, useState } from "react";
import { useRouter } from "next/router";
import DeviceSpecificationComponent from "@/components/sellDevice/DeviceSpecificationComponent";
import DeviceImageComponent from "./DeviceImageComponent";
import Link from "next/link";
import {capitalizeFirstLetter, getCategorySlug} from "@/frontend-libs/helpers";

const VariantListComponent = (props) => {

	const router = useRouter();
	//const first_variant = (Array.isArray(props.family_details.variants) && props.family_details.variants.length)?props.family_details.variants[0].variant_slug:''
	const [activeVariant, setActiveVariant] = useState(null);
	const [activeBtn, setactiveBtn] = useState(false)

	const chooseVariant = (variant_slug) => {
		setActiveVariant(variant_slug);
		setactiveBtn(true)
	};

	const handleContinue = (e) => {
		e.preventDefault();
		router.push(`/sell-${props.category.toLowerCase()}/${props.brand.toLowerCase()}/${activeVariant}`);
	};
	
	return (
		<>
			<div className="heading_1">
			    <h2>{`Sell Old ${props.family_details.family_name}`}</h2>
			</div>
			<div className="page_card">
				<div className='search_breadcrumb mb-1'>
					<ul className='breadcrumb'>
						<li><Link href='/'> Home </Link></li>
					<li>
						<Link href={`/sell-${props.category}`}  className=""> Sell Old {capitalizeFirstLetter(props.category)} </Link>
						</li>
						<li><Link href={`/sell-${getCategorySlug(props.category)}/${props.brand}`} className="">Sell Old {capitalizeFirstLetter(props.brand)}</Link></li>
						<li><Link href={`/sell-${getCategorySlug(props.category)}/${props.brand}/${props.family_details.family_slug}`} className="active">{`Sell Old ${props.family_details.family_name}`}</Link></li>
					</ul>
				</div>
				<hr/>
				<div className="row specifications">
					<div className="col-Left">
						<DeviceImageComponent image={props.family_details.family_image} brandName={props.family_details.family_name}
							solidSDevice={`${props.family_details.exchanged_count}+`} solidtxt={'Devices sold with us'} />
					</div>
					<div className="col-Right">						
						<p className="solidDevice"><span>{props.family_details.exchanged_count}+ </span> Devices sold with us </p>
						<DeviceSpecificationComponent specs={props.family_details.specs} />
						<div className="pageTitle"><p> CHOOSE VARIANT</p></div>
						<div className="variants">
							{props.family_details.variants?props.family_details.variants.map((variant)=> {
							   return (
									<div key={variant.variant_id} onClick={() => { chooseVariant(variant.variant_slug) }}
										className={`variants__item ${activeVariant == variant.variant_slug ? "active" : ""}`}>
										<p>{variant.variant_name}</p>
									</div>
									);
								}):''}
						</div>						
						<div className="next-btn">
							<button  className={`btn ${activeBtn == true ? "btn-orange" : "disabled"}`} onClick={handleContinue}>Next</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VariantListComponent;
