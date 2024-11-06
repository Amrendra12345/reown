import { useRef, useState } from "react";
import axios from "axios";
import { FaArrowRight} from "react-icons/fa";
import Image from "next/image";
import { validateIntegerField } from "@/frontend-libs/helpers";

const AppDownloadComponent = () => {
	const mobileboxRef = useRef();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSubmit = async (event) => {
		const mobile_number = mobileboxRef.current.value;
		const filter = /^\d*(?:\.\d{1,2})?$/;
		if (filter.test(mobile_number)) {
			if (!(mobile_number.length == 10)) {
				setError("Please enter 10  digit mobile number");
				setSuccess("");
				return false;
			}
		} else {
			setError("Not a valid number");
			setSuccess("");
			return false;
		}
		try {
			const result = await axios.post("/api/share-app-link", {
				mobile_number: mobile_number,
				device_type: "customer_android",
			});
			mobileboxRef.current.value = "";
			if (result.data.success) {
				setSuccess(result.data.message);
				setError("");
			}
		} catch (err) {
			setSuccess("");
			setError(err.response.data.message);
		}
	};
	return (
		<>
			<div className="download-app">
				<div className="download-app__input-group">
				    <label>GET APP LINK ON WHATSAPP</label>
					<div className="btnInpu">					 
					<input
						type="text"
						placeholder="9199999999"						
						className="form-control"
						pattern="/^-?\d+\.?\d*$/"
						maxlength={10}
						required
						ref={mobileboxRef}
						onKeyDown={validateIntegerField}
					/>
					<button type="button" className="btn btn-dark btn-arrow" onClick={handleSubmit}><FaArrowRight/></button>
					</div>
					{error?<div className="error">{error}</div>:''}
					{success?<div className="success">{success}</div>:''}
				</div>
				<div className="download-app__btn-app">
			    	<label>App Download</label>
					<a href="https://play.google.com/store/apps/details?id=com.recycledevice.partners" target="_blank" className="btn btn-dark googleApp" rel="noreferrer">
						<div className="app">
							<div className="icon">
								<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path style={{fill: "#64be6a"}} d="m17 8.5l-13.4-7.8c-0.4-0.2-0.9-0.1-1.2 0.1l11.1 11.2z" />
									<path style={{fill: "#41c6f0"}} d="m2.4 0.9c-0.3 0.2-0.4 0.5-0.4 0.8v20.6c0 0.4 0.1 0.7 0.4 0.9l11.1-11.2z" />
									<path style={{fill: "#fdd700"}} d="m21.5 11l-4.5-2.5-3.5 3.5 3.5 3.5 4.5-2.5c0.7-0.4 0.7-1.5 0-2z" />
									<path style={{ fill: "#ef384a" }} d="m2.4 23.1c0.3 0.3 0.8 0.4 1.2 0.1l13.4-7.7-3.5-3.5z" />
								</svg>
							</div>
							<div className="txt">
								<span>Download App</span>
								<span>Google Play</span>
							</div>
						</div>
					</a>					
					
				</div>
				<div className="download-app__qrcode">
				   <div className="qrcode-img">
						<Image
						src="/images/rd_partnerqr.svg"
						className="img-fluid border w-50 mt-3"
						alt="google qrcode"
						width={100}
						height={100}
					/>
					</div>
				</div>
			</div>
		</>
	);
};

export default AppDownloadComponent;
