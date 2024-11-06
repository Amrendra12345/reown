import Link from "next/link";
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {getCategorySlug} from "@/frontend-libs/helpers";


const Footer = (props) => {
    return (
		<footer className="footer">
			<div className="container">
				{props.footer
					? props.footer.map(function (element) {
							return (
								<div
									className="footer__sellDevice"
									key={element.category_id}
								>
									<div className="device_type">
										<Link
											href={`/sell-${element.category
												.toLowerCase()
												.replace(" ", "-")}`}
										>
											<strong>
												SELL OLD {element.category}{" "}
											</strong>
										</Link>
									</div>
									<div className="device_link">
										{element.makes
											.split(",")
											.map(function (element1) {
												return (
													<Link
														href={`/sell-${getCategorySlug(
															element.category
														)}/${element1
															.toLowerCase()
															.replace(" ", "")}`}
														key={element1}
													>
														Sell {element1}{" "}
													</Link>
												);
											})}
									</div>
								</div>
							);
					  })
					: ""}
            </div>
            <div className="footer__contents">
                <div className="container">
                    <div className="footer__wrap">
					<div className="footer__wrap__item">
						<p>
							<strong>Sell Devices </strong>
						</p>
						<ul>
							{props.footer
								? props.footer.map(function (element) {
										return (
											<li key={element.category_id}>
												<Link
													href={`/sell-${element.category
														.toLowerCase()
														.replace(" ", "-")}`}
												>
													Sell Old {element.category}
												</Link>
											</li>
										);
								  })
								: ""}
						</ul>
					</div>
					<div className="footer__wrap__item">
						<p>
							<strong>Company</strong>
						</p>
						<ul>
							<li>
								<Link href="/about-us">About Us</Link>
							</li>
							<li>
								<Link href="/b2b-marketplace">
									{" "}
									B2B Marketplace
								</Link>
							</li>
							<li>
								<Link href="/become-a-partner">
									Become a Partner
								</Link>
							</li>
							<li>
								<Link href="/become-a-rider">
									Become a Rider
								</Link>
							</li>
							<li>
								<Link href="/our-warehouses">
									Our Warehouses
								</Link>
							</li>
							<li>
								<Link href="/partner-brands">
									Partner Brands
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer__wrap__item">
						<p>
							<strong> More Info </strong>
						</p>
						<ul>
							<li>
								<Link href="/terms-and-conditions">
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link href="/terms-of-use">Terms of Use</Link>
							</li>
							<li>
								<Link href="/privacy-policy">
									{" "}
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="/cookie-policy">
									{" "}
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link href="/e-waste-policy">
									{" "}
									E - Waste Policy
								</Link>
							</li>
							<li>
								<Link href="/legal">Legal</Link>
							</li>
						</ul>
					</div>
					<div className="footer__wrap__item">
						<p>
							<strong> Need Help? </strong>
						</p>
						<ul>
							<li>
								<Link href="/contact-us">Contact Us</Link>
							</li>
							<li>
								<Link href="/careers">Careers</Link>
							</li>
							<li>
								<Link href="/faq">FAQs</Link>
							</li>
							<li>
								<Link href="/track-order">Track Order</Link>
							</li>
							<li>
								<Link href="/why-recycle">Why-recycle</Link>
							</li>
							<li>
								<Link href="/laptopqc">Laptop QC</Link>
							</li>
						</ul>
					</div>
					<div className="footer__wrap__item">
						<p>
							<strong> Follow Us </strong>
						</p>
						<div className="social_icon">
							<div className="facebook">
								<FaFacebookF />
							</div>
							<div className="instagram">
								<FaInstagram />
							</div>
							<div className="twitter">
								<FaTwitter />
							</div>
							<div className="envelope">
								<FaRegEnvelope />
							</div>
						</div>
						<div className="address">
							<p>
								<strong>RelCube India Pvt. Ltd.</strong>
							</p>
							<p> CIN : U52609UP2017PTC094858 </p>
							<p> Basement & 1st Floor, A-53,</p>
							<p> Sector-8, Noida - 201301,</p>
							<p> Uttar Pradesh, India </p>
						</div>
					</div>
				</div>
                </div>
            </div>
			<p className="footer__copyRight">
				Copyright &copy; 2022 Relcube India Pvt. Ltd.
			</p>
		</footer>
	);
}

export default Footer