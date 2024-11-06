import {FaAngleDown, FaMicrochip, FaSlidersH} from "react-icons/fa";
import {BsLaptop} from "react-icons/bs";
import {useEffect, useRef, useState} from "react";
import {getFilters} from "@/frontend-libs/reown-lib";

const FiltersComponent = (props) => {
    const brandRef = useRef()
    const processorRef = useRef()
    const [filters, setFilters] = useState([])
    const [searchBrand, setSearchBrand] = useState([])
    const [searchProcessor, setSearchProcessor] = useState([])
    const [showChildMenu, setShowChildMenu] = useState('brands')

    useEffect(()=>{
        // fetch all brands and processors here
        const getFiltersResp = async ()=>{
            const filtersResp = await getFilters()
            if(filtersResp.status == 200){
                setFilters(filtersResp.data.filters)
            }
        }
        getFiltersResp()
    }, [])

    const handleBrandChange = (event, value) => {
        props.applyBrandFilters(value, event.target.checked?'add':'remove')
    }

    const handleProcessorChange = (event, value) => {
        props.applyProcessorFilters(value, event.target.checked?'add':'remove')
    }

    const filterBrands = () => {
        let search_item = brandRef.current.value
        // let filteredBrands = []
        // if(brandRef.current.value!=''){
        //     filteredBrands = brands.filter((elem)=>{
        //         if(elem.match(new RegExp(search_item, 'ig')).length)
        //             return true
        //         return false
        //     })
        // }else{
        //     filteredBrands = props.brands??[]
        // }
        setSearchBrand(search_item)
    }

    const filterProcessors = () => {
        let search_item = processorRef.current.value
        // let filteredBrands = []
        // if(brandRef.current.value!=''){
        //     filteredBrands = brands.filter((elem)=>{
        //         if(elem.match(new RegExp(search_item, 'ig')).length)
        //             return true
        //         return false
        //     })
        // }else{
        //     filteredBrands = props.brands??[]
        // }
        setSearchProcessor(search_item)
    }

    const filterMenu = ((event)=>{
        setShowChildMenu(event);
    })
  
    return (
		
		<>
				<div className="pageTitle">
					<p>FILTERS</p>
					<p>
						<FaSlidersH />
					</p>
				</div>
				<div className="filter_Menu">
					<ul>
						<li	onClick={() => {filterMenu("brands");}}>
							<span className="menu_title">
								<span>{" "}	<BsLaptop /> <span>Brand</span></span>
						    	<span><FaAngleDown />{" "}</span>
							</span>
                            <div className={`subMenu ${showChildMenu == "brands" ? 'active': ''}`}>
								<ul>
									<li>
										<fieldset className="material">
											<input
												type="text"
												className="form-control"
												required
												ref={brandRef}
												onInput={filterBrands}
											/>
											<hr />
											<label>Search Brand</label>
										</fieldset>
                                    </li>
                                    <div className="scrollMenuChild">
									{Array.isArray(filters.brands) &&
									filters.brands.length > 0
										? filters.brands.map(function (brand) {
												if (
													brand.product_make.match(
														new RegExp(
															searchBrand,
															"ig"
														)
													)
												) {
                                                    return (
														<li
															className="items"
															key={
																brand.product_make
															}
														>
															{props.selectedBrands.includes(
																brand.product_make.toLowerCase()
															) ? (
																<input
																	key={
																		brand.product_make +
																		"1"
																	}
																	type="checkbox"
																	id={
																		brand.product_make
																	}
																	defaultChecked={
																		true
																	}
																	onChange={(
																		event
																	) =>
																		handleBrandChange(
																			event,
																			brand.product_make.toLowerCase()
																		)
																	}
																/>
															) : (
																<input
																	key={
																		brand.product_make +
																		"2"
																	}
																	type="checkbox"
																	id={
																		brand.product_make
																	}
																	defaultChecked={
																		false
																	}
																	onChange={(
																		event
																	) =>
																		handleBrandChange(
																			event,
																			brand.product_make.toLowerCase()
																		)
																	}
																/>
															)}

															<label htmlFor="acer">
																{
																	brand.product_make
																}
															</label>
                                                          </li>
                                                        
													);
												} else {
													return "";
												}
										  })
                                        : ""}
                                    </div>
								</ul>
							</div>
						</li>
						<li onClick={() => {filterMenu("processor");}}>
							<span className="menu_title">
								<span>{" "}	<FaMicrochip /> <span>Processor</span>{" "}	</span>
								<span><FaAngleDown /></span>
							</span>
							<div className={`subMenu ${showChildMenu == "processor" ? 'active': ''}`}>
								<ul>
									<li>
										<fieldset className="material">
											<input
												type="text"
												ref={processorRef}
												onInput={filterProcessors}
												required
											/>
											<hr />
											<label>Search Processor</label>
										</fieldset>
                                    </li>
                                    <div className="scrollMenuChild">
									{Array.isArray(filters.processors) &&
									filters.processors.length > 0
										? filters.processors.map(function (
												processor
										  ) {
												if (
													processor.processor.match(
														new RegExp(
															searchProcessor,
															"ig"
														)
													)
												) {
                                                    return (
                                                        
														<li
															className="items"
															key={
																processor.processor
															}
														>
															{props.selectedProcessors.includes(
																processor.processor.toLowerCase()
															) ? (
																<input
																	key={
																		processor.processor +
																		"1"
																	}
																	type="checkbox"
																	id={
																		processor.processor
																	}
																	defaultChecked={
																		true
																	}
																	onChange={(
																		event
																	) =>
																		handleProcessorChange(
																			event,
																			processor.processor.toLowerCase()
																		)
																	}
																	x={
																		"true-wala"
																	}
																/>
															) : (
																<input
																	key={
																		processor.processor +
																		"2"
																	}
																	type="checkbox"
																	id={
																		processor.processor
																	}
																	defaultChecked={
																		false
																	}
																	onChange={(
																		event
																	) =>
																		handleProcessorChange(
																			event,
																			processor.processor.toLowerCase()
																		)
																	}
																	x={
																		"false-wala"
																	}
																/>
															)}

															<label htmlFor="acer">
																{
																	processor.processor
																}
															</label>
                                                        </li>
                                                        
                                                            
													);
												} else {
													return "";
												}
										  })
                                            : ""}
                                        </div>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</>
		
	);
}

export default FiltersComponent