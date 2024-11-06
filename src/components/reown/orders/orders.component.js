import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {BsFilter, BsX} from "react-icons/bs";
import {BiRupee} from "react-icons/bi";
import Image from "next/image";
import {useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {useRouter} from "next/router";
import FiltersComponent from "@/components/reown/orders/filters.component";
import OrdersListComponent from "@/components/reown/orders/orders-list.component";

const OrdersComponent = () => {

    const [toggleSidebar, setToggleSidebar]= useState(false)
    const orderRef = useRef(null);
    const auth = useSelector(getAuthData)
    const router = useRouter()

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    /**
     * Check for authentication
     */
    useEffect(()=>{
        if(auth.authLoaded){
            if(!auth || !auth.currentUser)
                router.push('/')
        }
    }, [auth])

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const orderBreadcrumb = orderRef.current.getBoundingClientRect();
        const orderContent = document.querySelector('.orders__breadcrumb');
        const orderSidebar = document.querySelector('.orders__aside');
        if (scrollTop >  orderBreadcrumb.height) {
            orderContent.classList.add('sticky');
            orderSidebar.classList.add('sticky');
        } else {
            orderContent.classList.remove('sticky');
            orderSidebar.classList.add('sticky');
        }
    }
    const sideBarMobile = () => {
        setToggleSidebar(!toggleSidebar);
        if (toggleSidebar == false) {
            document.body.classList.add('open-sidebar')
        } else {
            document.body.classList.remove('open-sidebar')
        }
    }
    return (
        <section className={`orders  ${toggleSidebar == true ? 'openAside' : ''}`}>
            <div className="orders__breadcrumb" ref={orderRef}>
                <div className="container">
                    <div className='page_card'>
                        <ul className="breadcrumb">
                            <li><Link href="/"> Home </Link></li>
                            <li><Link href="/reown"> Reown </Link></li>
                            <li><Link className="active" href="/orders"> Orders </Link></li>
                        </ul>
                        <div className="filter_icon" onClick={sideBarMobile}>
                            <p><span><BsFilter/></span>Filters</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-1'>
                <div className='orders__wrap'>
                    <FiltersComponent {...{sideBarMobile,toggleSidebar}}/>
                    <OrdersListComponent />
                </div>
            </div>
        </section>
    )
}

export default OrdersComponent