import Link from "next/link";
import SearchComponent from "@/components/reown/buy-laptop/search.component";
import FiltersComponent from "@/components/reown/buy-laptop/filters.component";
import React, { useState, useRef, useEffect } from "react";
import {getFilters} from "@/frontend-libs/reown-lib";
import {useRouter} from "next/router";
import { createUrlFromParams } from "@/frontend-libs/helpers";
import {BsFillFilterSquareFill, BsXSquareFill} from "react-icons/bs"

const BuyLaptopNestedLayoutComponent = (props) => {
    const [toggleAside, setToggleAside] = useState(false);
    const scrollRef = useRef(null);
	
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [filteredBrands, setFilteredBrands] = useState([])
    const [filteredProcessors, setFilteredProcessors] = useState([]);

    useEffect(() => {
        window.addEventListener("scroll", pageSticky);
        return () => {
            window.removeEventListener("scroll", pageSticky);
        };
    }, []);

    useEffect(()=>{
        setSearch(router.query.search??'')
        if(router.query['make_id[]']){
            if(Array.isArray(router.query['make_id[]']))
                setFilteredBrands(router.query['make_id[]'])
            else
                setFilteredBrands([router.query['make_id[]']])
        }else{
            setFilteredBrands([])
        }
        if(router.query['processors[]']){
            if(Array.isArray(router.query['processors[]']))
                setFilteredProcessors(router.query['processors[]'])
            else
                setFilteredProcessors([router.query['processors[]']])
        }else{
            setFilteredProcessors([])
        }
    }, [])


    const pageSticky = () => {        
        const scrollTop = window.scrollY;
        const wrap = scrollRef.current.getBoundingClientRect();
        const pagebBreadcrumb = document.querySelector('.buyLaptop__breadcrumb');
        if (scrollTop >= wrap.height) { 
            pagebBreadcrumb.classList.add('fixed');
		} else {
            pagebBreadcrumb.classList.remove('fixed');
		}
    };

    const toggleShow = () => {
        setToggleAside(!toggleAside);
        if (toggleAside == false) {
            document.body.classList.add('open-sidebar');
        } else {
            document.body.classList.remove('open-sidebar');
        }
    }

    const applySearch = (value) => {
        setSearch(value??'')
        setFilteredBrands([])
        setFilteredProcessors([])
        if(value){
            router.push('/buy-laptop?search='+value)
        }else{
            router.push('/buy-laptop')
        }
    }

    const applyBrandFilters = (brand, action) => {
        let brands = filteredBrands
        if(action == 'add'){
            if(!brands.includes(brand))
                brands.push(brand)
        }else{
            brands = brands.filter((value)=>{
                if(brand == value)
                    return false
                return true
            })
        }
        setFilteredBrands(brands)
        router.push('/buy-laptop'+createUrlFromParams(undefined, router.query.search, brands, router.query['processors[]']))
    }

    const applyProcessorFilters = (processor, action) => {
        let processors = filteredProcessors
        if(action == 'add'){
            if(!processors.includes(processor))
                processors.push(processor)
        }else{
            processors = processors.filter((value)=>{
                if(processor == value)
                    return false
                return true
            })
        }
        setFilteredProcessors(processors)
        router.push('/buy-laptop'+createUrlFromParams(undefined, router.query.search, router.query['make_id[]'], processors))
    }
 
    

	return (
		<section className="buyLaptop">
            <div className={`buyLaptop__breadcrumb  ${toggleAside == true? 'sidebarOpen':''}`} ref={scrollRef}>
                <div className="container">
                    <div className="page_card">
                        <ul className="breadcrumb">
                            <li><Link href="/"> Home </Link></li>
                            <li>{" "}<Link href="/reown"> Reown </Link>{" "}</li>
                            <li><Link className="active" href="/buy-laptop">Products List{" "}</Link>
                            </li>
                        </ul>
                         <div className="search_input">
                            <div className="filter_icon" onClick={toggleShow}>
                              <BsFillFilterSquareFill />
                            </div>
                            <SearchComponent search={search} applySearch={applySearch}></SearchComponent>
                        </div>
                    </div>
                </div>
			</div>
            <div className="buyLaptop__wrap">
                <div className="container">
                    <div className="buyLaptop__wrap_content">
                        <div className={`aside ${toggleAside == true ? 'active' : ''}`}>
                            <div className="page_card">
                                <div className="sidebarClose" onClick={toggleShow}>
                                    <BsXSquareFill/>
                                </div>
                            <FiltersComponent applyBrandFilters={applyBrandFilters} applyProcessorFilters={applyProcessorFilters} selectedBrands={filteredBrands} selectedProcessors={filteredProcessors} display={toggleAside}></FiltersComponent>
                        </div>
                    </div>
                    <div className="main">
				     	{props.children }
                        </div>
                    </div>
                </div>
			</div>
		</section>
	)
}

export default BuyLaptopNestedLayoutComponent;
