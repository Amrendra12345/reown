
import React, {useState, useEffect} from 'react';
import SliderBrandComponent from '../Slider/SliderBrand-component';
import Link from 'next/link';
import ItemsComponent from '../brand/Items-component'
import AppDownloadComponent from '../AppDownload/AppDownload-Component';
import {capitalizeFirstLetter, getCategorySlug} from "@/frontend-libs/helpers";
const BrandComponent = (props) => {
  let items;
  
  if (props.brands) {
    items = props.brands.map(function (element) {
      return {
        id: element.brand_id,
        name: element.brand_name,
        image: element.brand_image,
        href: "/sell-" + props.category + "/" + element.brand_name.toLowerCase()
      }
    })
  } else if (props.families) {
    items = props.families.map(function (element) {
      return {
        id: element.family_id,
        name: element.family_name,
        image: element.family_image,
        href: "/sell-" + props.category + "/" + props.brand.toLowerCase() + "/" + element.family_slug.toLowerCase(),
        brand: element.family_brand
      }
    })
  } else {
    items = []
  }
  const [displayItems, setDisplayItems] = useState(items)

  const applyFilter = (event) => {
    const search = event.target.value
    const filteredItems = items.filter(function (element) {
      if (element.name.toLowerCase().search(search.toLowerCase()) != -1)
        return true
      return false;
    })
    setDisplayItems(filteredItems)
  }


  return (
    <>
      <div className={`container ${props.brand?'model':'brand'}`}>
        <div className='heading_2'>
            <h1>Sell Old { props.brand?props.brand+' ':'' }{props.category}</h1>
        </div>
        <div className='page_card'>
          <div className='search_breadcrumb mb-1'>
            <ul className='breadcrumb'>
                <li><Link href='/'> Home </Link></li>
              <li>
                 <Link href={`/sell-${getCategorySlug(props.category)}`}  className={props.brand?'':'active'}> Sell Old {capitalizeFirstLetter(props.category)} </Link>
                </li>
                { props.brand?<li><Link href={`/sell-${getCategorySlug(props.category)}/${props.brand.toLowerCase()}`} className="active">Sell Old {capitalizeFirstLetter(props.brand)}</Link></li>:''}
            </ul>
            {props.brand ? <div className='search_device'>
              <input className='form-control' placeholder='Search device' type="text" onChange={applyFilter} />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>:''}
          </div>
          <hr/>
          <div className='pageTitle'>
             <p>CHOOSE YOUR {props.brand?'MODEL':'BRAND'}</p>
          </div>
          <div className='brand__items'>
              {displayItems ? (displayItems.map(function (item) {
                return <ItemsComponent {...item} key={item.id}/>
              })):'No data'}
          </div>
        </div>
      </div>
       <SliderBrandComponent items={props.top_brands} title="brands" />
       <SliderBrandComponent items={props.top_models} title="models"/>
    </>
  )
}
export default BrandComponent