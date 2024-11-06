import Link from "next/link";
import Image from "next/image";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "@/redux/auth/auth.reducer";
import LoginComponent from "@/components/reown/login.component";
import SignUpComponent from "@/components/reown/sign-up.component";
import MobileOtpComponent from "@/components/reown/mobile-otp.component";
import {Router} from "next/router";
import {getAuthData} from "@/redux/auth/auth.selector";
import { FaUser, FaAngleDown } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import {getCartData} from "@/redux/cart/cart.selector";
import {cartActions} from "@/redux/cart/cart.reducer";
const Header = (props) => {
	const dispatch = useDispatch()
	const auth = useSelector(getAuthData);
	const cart = useSelector(getCartData);
	const [headerSticky, setHeaderSticky] = useState(0);
	const ref_Header = useRef(null)
	useEffect(() => {
		Router.events.on("routeChangeStart", (url) => {
			dispatch(authActions.closeSidebar())
		});
	});

	useEffect(() => {
		if(auth && auth.currentUser && auth.authLoaded){
			dispatch(cartActions.syncCartData())
		}
	}, [auth]);

	useEffect(() => {
		const headerHeight = ref_Header.current.getBoundingClientRect().height;
		setHeaderSticky(headerHeight);
		window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
	},[headerSticky])
	
	const isSticky = () => {
		const scrollTop = window.scrollY;
		const viewPortHeight = window.innerHeight;
		const header = document.querySelector('.header');
		if (scrollTop >= headerSticky) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	}
	

	const displayLoginSidebar = () => {
		switch (auth.openedLoginSidebar){
			case 'login': return <LoginComponent></LoginComponent>
			case 'signup': return <SignUpComponent></SignUpComponent>
			case 'verifyLogin': return <MobileOtpComponent verify_type="login"></MobileOtpComponent>
			case 'verifySignup': return <MobileOtpComponent verify_type="signup"></MobileOtpComponent>
			default : return <></>
		}
	}

  return (
	    <>
		   
		  <header className="header" ref={ref_Header}>
			  <div className="container">
				  <div className="header__content">
					  <div className="brands">
						  <Link href='/'>
						      <Image src="/images/recycledevice.svg" width={230} height={40} alt="recycledevice logo"/>
						  </Link>
					  </div>
					  <div className="menu">
						  <ul className="menu_link">
						<li className="beacomeApartner">
							<Link href="/become-a-partner">
							<span>Become A </span>Partner
						  </Link>
						</li>
					
                     { !auth.currentUser?(
							<li className="loginUser" onClick={()=>dispatch(authActions.openSidebar('login'))}>
							<FaUser/> <span>Login</span>
						 </li>
					    ):(<>
							<li className="userProfile">
						    <span>{auth.currentUser.fullname} </span> <BsChevronDown/>
						   <div className="dropdownMenu">
							   <ul>
								 <li><Link href={'/profile'}>My Profile</Link></li>
								 <li><Link href={'/orders'}>My Order</Link></li>
								 <li onClick={()=>dispatch(authActions.logout())}>Logout</li>
							   </ul>
						   </div>
						</li>
						<li className="shoppingCart">
							<Link href="/cart"><Image src='/images/cart.svg' width={18} height={14} alt="cart icon"/></Link>
						</li>
						</>)
					 }
					 </ul>
					  </div>
				  </div>
			  </div>
		  </header>
			{
				displayLoginSidebar()
			}
			
		
		</>
	);
};
export default Header;
