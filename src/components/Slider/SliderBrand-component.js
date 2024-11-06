

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function SliderBrandComponent(props) {
    const settings = {
    centerMode: false,
    centerPadding: '10px',
    slidesToShow: 6,
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
          slidesToShow: 3,
        },
      },
    ],
  };
  return (  
      <div className='container slider mt-0'>
        <div className='page_card'>
          <div className='title'>
             <h2>top {props.title} </h2>
          </div>
          <div className='slider'>
            <Slider {...settings}>
              {Array.isArray(props.items) ? props.items.map((element) => {
                return (
                  <div className='slider__items' key={element.make_name ?? element.product_name}>
                    <div className={`slider__items__item ${props.title}`}>
                      <Image  src={element.image_url} alt={element.make_name ?? element.product_name} width={50} height={50}/>
                      <div className='captions'>
                        <p>{element.make_name ?? element.product_name}</p>
                      </div>
                    </div>
                  </div>
                )                
                }):''
              }
            </Slider>
          </div>
         </div>
      </div>
  
  )
}

export default SliderBrandComponent;