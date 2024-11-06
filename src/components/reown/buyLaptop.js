import {useEffect, useRef, useState} from 'react';
import { FaSlidersH,FaMicrochip,FaAngleDown } from "react-icons/fa";
import { BsLaptop,BsSearch} from "react-icons/bs";
import { BiRupee} from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';


const BuyLaptop = () => {  
    const [reachedBottom, setReachedBottom] = useState(false);

   const eleWrap = useRef(null)
    const handlescroll = () => {
        const offsetHeight = document.documentElement.offsetHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

      
      }

  return (
      <section className='buyLaptop'>       
          <div className='container'>
              <div className='page_card'>
                  <div className="search_breadcrumb">
                      <ul className="breadcrumb">
                          <li><Link href="/"> Home </Link></li>
                          {/* <li><Link href="/sell-mobile"> Reown </Link></li> */}
                          <li><Link className="active" href="/sell-mobile"> Product List </Link></li>
                      </ul>
                      <div className='inputGroup'>                          
                          <input type='text' className='form-control' placeholder='Search device' required/>
                          <span className='colseIcon'>
                               <span></span>
                               <span></span>
                          </span>
                          <span className='searchIcon'><BsSearch/></span>
                      </div>
                  </div>
              </div>
              <div className='wrap'>
                  <div className='aside'>
                      <div className='page_card'>
                          <div className='pageTitle'>
                              <p>FILTERS</p>
                              <p><FaSlidersH/></p>
                          </div>
                          <div className='filter_Menu'>
                            <ul>
                                <li> 
                                    <span className="menu_title">
                                        <span> <BsLaptop/> <span>Brand</span></span> 
                                        <span><FaAngleDown/> </span>
                                     </span>
                                   <div className='subMenu'>
                                       <ul>
                                          <li>
                                              <fieldset className="material">
                                                 <input type="text" className='form-control' required />
                                                  <hr/>
                                                  <label>Search Brand</label>
                                               </fieldset> 
                                          </li>
                                          <li className='items'>
                                                 <input type='checkbox' id="acer"/> 
                                                 <label htmlFor='acer'>Acer</label>
                                             </li>
                                             <li className='items'>
                                                 <input type='checkbox' id="hp"/> 
                                                 <label htmlFor='hp'>Hp</label>
                                             </li>
                                       </ul>
                                   </div>
                                </li>
                                 <li>
                                      <span className="menu_title">
                                          <span>  <FaMicrochip /> <span>Processor</span> </span>
                                          <span><FaAngleDown /></span>
                                      </span>
                                      <div className='subMenu'>
                                          <ul>
                                             <li>                                              
                                                <fieldset className="material">
                                                    <input type="text" required />
                                                    <hr/>
                                                    <label>Search Processor</label>
                                                </fieldset>
                                             </li>
                                             <li className='items'>
                                                 <input type='checkbox' id="acer"/> 
                                                 <label htmlFor='acer'>Acer</label>
                                             </li>
                                             <li className='items'>
                                                 <input type='checkbox' id="hp"/> 
                                                 <label htmlFor='hp'>Hp</label>
                                             </li>
                                          </ul>
                                      </div>
                                 </li>
                            </ul>
                          </div>
                      </div>
                  </div>
                  <div className='listingItems'>
                      <div className='page_card'>
                          <div className='page_card__content'>
                             <div className='figure'>
                                <Image src="/images/6539.jpeg" width={165} height={130} alt="laptop" />
                              </div>
                              <div className='caption'>
                                    <div className='title'>
                                        <p>Acer Aspire 3 A315-54 | Intel Core i3 8th Gen | SSD | 15 Inch screen | 4GB | 256GB(SSD)</p>
                                    </div>
                                    <div className='caption_content'>
                                        <div className='list_item'>
                                            <ul>
                                                <li>Intel Core i3 8th Gen </li>
                                                <li>4GB</li>
                                                <li>256GB(SSD)</li>
                                            </ul>
                                        </div>
                                        <div className='values'>
                                            <p><BiRupee/><span> 2600 </span></p>
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
                      </div>
                      <div className='page_card'>
                          <div className='page_card__content'>
                             <div className='figure'>
                                <Image src="/images/6539.jpeg" width={165} height={130} alt="laptop" />
                              </div>
                              <div className='caption'>
                                    <div className='title'>
                                        <p>Acer Aspire 3 A315-54 | Intel Core i3 8th Gen | SSD | 15 Inch screen | 4GB | 256GB(SSD)</p>
                                    </div>
                                    <div className='caption_content'>
                                        <div className='list_item'>
                                            <ul>
                                                <li>Intel Core i3 8th Gen </li>
                                                <li>4GB</li>
                                                <li>256GB(SSD)</li>
                                            </ul>
                                        </div>
                                        <div className='values'>
                                            <p><BiRupee/><span> 2600 </span></p>
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
                      </div>
                      <div className='page_card'>
                          <div className='page_card__content'>
                             <div className='figure'>
                                <Image src="/images/6539.jpeg" width={165} height={130} alt="laptop" />
                              </div>
                              <div className='caption'>
                                    <div className='title'>
                                        <p>Acer Aspire 3 A315-54 | Intel Core i3 8th Gen | SSD | 15 Inch screen | 4GB | 256GB(SSD)</p>
                                    </div>
                                    <div className='caption_content'>
                                        <div className='list_item'>
                                            <ul>
                                                <li>Intel Core i3 8th Gen </li>
                                                <li>4GB</li>
                                                <li>256GB(SSD)</li>
                                            </ul>
                                        </div>
                                        <div className='values'>
                                            <p><BiRupee/><span> 2600 </span></p>
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
                      </div>
                  </div>
              </div>
          </div>
          
      </section>
  )
}

export default BuyLaptop
