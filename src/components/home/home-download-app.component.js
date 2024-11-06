import { useRef, useState } from "react";
import axios from "axios";;
import { FaArrowRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import AppDownloadComponent from '../AppDownload/AppDownload-Component';

const HomeDownloadAppComponent = () => {
	

	return (
		<>
			<section className="downloadApp">
				<div className="container">
					<div className="heading">
						<h2>Sell Old Mobile Phone & Laptop online - Download mobile app now</h2>
					</div>
					<p>Download Recycledevice mobile phone application and sell your phone, laptop and other devices on the go. The mobile application is packaged with advanced diagnostics software to perform automated QC of your device and instant quote generation. Includes exciting offers and extra cash through Amazon Pay, Flipkart, Paytm gift cards and lots more. Enables real time tracking, re-scheduling of orders. Download purchase receipts, QC comparison sheets for all your historical orders and many more features.</p>
					<div className="download__app">
					    < AppDownloadComponent/>
					</div>
				</div>
			</section>	
		</>
	);
};

export default HomeDownloadAppComponent;
