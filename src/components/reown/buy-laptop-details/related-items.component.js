import Slider from "react-slick";
import Image from "next/image";
import {BiRupee} from "react-icons/bi";
import Link from "next/link";
import {createSlug} from "@/frontend-libs/reown-lib";

const RelatedItemsComponent = ({products}) => {
    const settings = {
        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return <div className='moreItems'>
        <div className='pageTitle'>
            <p>More Items</p>
        </div>
        <div className='moreItems_content'>
            <div className='slider'>
                <Slider {...settings}>
                    {products.map((product)=>{
                        return (<Link key={product.product_sku_id} href={'/buy-laptop/'+createSlug(product.product_title, product.product_sku_id)}>
                            <div className='figure' >
                            <Image src={product.product_icon} width={300} height={250} alt='laptop'/>
                            <div className='caption'>
                                <p className='name'> {product.product_title}</p>
                                <div className='pageTitle'>
                                    <p><BiRupee/> <span>{product.list_price}/</span></p>
                                </div>
                            </div>
                        </div>
                        </Link>)
                    })}

                </Slider>
            </div>
        </div>
    </div>
}

export default RelatedItemsComponent