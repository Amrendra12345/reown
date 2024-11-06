import Image from "next/image";
import {BiRupee} from "react-icons/bi";
import React, {useContext} from "react";
import ReactPaginate from "react-paginate";
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
import {useRouter} from "next/router";
import {createUrlFromParams} from "@/frontend-libs/helpers";
import Link from "next/link";
import {createSlug} from "@/frontend-libs/reown-lib";

const ProductListComponents = (props) => {
    const router = useRouter()
    const num_of_pages = Math.ceil(parseInt(props.productsData.result_count)/parseInt(props.productsData.limit))

    const currentPage = parseInt(props.productsData.offset)/parseInt(props.productsData.limit)

    const handlePageClick = (event) => {
        if(event.nextSelectedPage!=undefined){
            router.push('/buy-laptop'+createUrlFromParams((parseInt(event.nextSelectedPage)+1), router.query.search, router.query['make_id[]'], router.query['processor[]']))
        }
    }

    return <>

        {Array.isArray(props.productsData.models)?props.productsData.models.map(function(model){
        return (
            <div className='page_card' key={model.product_sku_id}>
                <Link href={'/buy-laptop/'+createSlug(model.product_title, model.product_sku_id)}>
                <div className='page_card__content'>
                    <div className='figure'>
                        <Image src={model.product_icon} width={165} height={130} alt="laptop" />
                    </div>
                    <div className='caption'>
                        <div className='title'>
                            <p>{model.product_title}</p>
                        </div>
                        <div className='caption_content'>
                            <div className='list_item'>
                                <ul>
                                    <li>{model.processor}</li>
                                    <li>{model.ram}</li>
                                    <li>{model.hdd}</li>
                                </ul>
                            </div>
                            <div className='values'>
                                <p><BiRupee/><span>{model.sell_price}</span></p>
                            </div>
                        </div>
                        <div className='buyback'>
                            <div className='icon'>
                                <Image src='/images/paylater-icon.svg' width={16} height={16} alt='buyback icon'/>
                            </div>
                            <div className='icon_txt'>
                                <p>Assured Buyback</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div >
        )
    }):''}
        <div className="pagination">
        <ReactPaginate breakLabel="..."
                       nextLabel={<BsChevronRight/>}
                       onClick={(event) => handlePageClick(event)}
                       pageRangeDisplayed={5}
                       pageCount={num_of_pages}
                       previousLabel={<BsChevronLeft/>}
                       renderOnZeroPageCount={null}
                       forcePage={currentPage}
        ></ReactPaginate>
        </div>
        </>
}


export default ProductListComponents