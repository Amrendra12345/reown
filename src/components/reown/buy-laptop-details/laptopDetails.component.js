import { BiRupee,BiTime,BiPlus} from "react-icons/bi";
import {FaAngleDown} from "react-icons/fa";
import Image from "next/image";
import ReactImageZoom from 'react-image-zoom';
import {useState, useEffect} from "react";
import WarrantyPolicyComponent from "../warrantyPolicy.component";
import AssuredBuybackComponent from "../assuredBuyback.component";
import ReturnPolicyComponent from "./returnPolicy.component";
import AdditionalInfoComponent from "./additionalInfo.component";
import TechnicalDetailsComponent from "./technicalDetails.component";
import RefurbishedComponent from "./refurbished.component";
import Link from "next/link";
import {createSlug} from "@/frontend-libs/reown-lib";
import RelatedItemsComponent from "@/components/reown/buy-laptop-details/related-items.component";
import PincodeCheckComponent from "@/components/reown/buy-laptop-details/pincode-check.component";
import {useDispatch, useSelector} from "react-redux";
import {getAuthData} from "@/redux/auth/auth.selector";
import {cartActions} from "@/redux/cart/cart.reducer";
import { getCartData } from "@/redux/cart/cart.selector";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";




const LaptopDetailsComponent = (props) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const [imgSrc, setImgSrc] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [tabActive, setTabActive] = useState('tab1');
    const props1 = {width:280, height: 280, img:props.productDetails.product.images[0]??'', zoomPosition:"original"};
    const [pincodeEnabled, setPincodeEnabled] = useState(false)
    const auth = useSelector(getAuthData)
    const cart = useSelector(getCartData)
    const [customRam, setCustomRam] = useState(null)
    const [customHdd, setCustomHdd] = useState(null)
    const [finalPrice, setFinalPrice] = useState(props.productDetails.product.sell_price)

    const imgHeandler = (e)=>{
        setImgSrc(e.target.src);
        
    }
    

    const toggleItem = ()=>{
        setIsActive(current => !current);
    }
    const menuTab = ((tab)=>{
        setTabActive(tab)
    })

    const pincodeCheckCallback = (pincodeServiceable) => {
        setPincodeEnabled(pincodeServiceable)
    }

    const handleRamSelect = (ram) => {
        setCustomRam(ram)
        let price = props.productDetails.product.sell_price + (ram?parseInt(props.productDetails.custom_rams[ram]):0) + (customHdd?parseInt(props.productDetails.custom_hdds[customHdd]):0)
        setFinalPrice(price)
    }

    const handleHddSelect = (hdd) => {
        setCustomHdd(hdd)
        let price = props.productDetails.product.sell_price + (customRam?parseInt(props.productDetails.custom_rams[customRam]):0) + (hdd?parseInt(props.productDetails.custom_hdds[hdd]):0)
        setFinalPrice(price)
    }

    const handleAddtoCart = async () => {
        dispatch(cartActions.addToCart(
            {product_sku_id:props.productDetails.product.product_sku_id,
                quantity:1,
                custom_ram:customRam,
                custom_hdd:customHdd})
        )
            .unwrap()
            .then((data)=>{
                //handle success or errors
            })
    }

    useEffect(()=>{
        if (auth && auth.currentUser && cart.addingToCart) {
            (async ()=> {
                dispatch(cartActions.addToCart(
                    {product_sku_id:props.productDetails.product.product_sku_id,
                        quantity:1,
                        custom_ram:customRam,
                        custom_hdd: customHdd}))
            })();
        }
    }, [auth])

    return (
      <section className='productDetails'>
          <div className='container'>
              <div className='page_card mb-1'>
                  <div className="search_breadcrumb">
                      <ul className="breadcrumb">
                          <li><Link href="/"> Home </Link></li>
                          <li><Link href="/reown"> Reown </Link></li>
                          <li><Link href="/buy-laptop"> Product List </Link></li>
                          <li><Link className="active" href={'/buy-laptop/'+createSlug(props.productDetails.product.product_title, props.productDetails.product.product_sku_id)}>{props.productDetails.product.product_title}</Link></li>
                      </ul>
                  </div>
                  <hr className='mt-1'/>
                  <div className='productDetails__wrap'>
                      <div className='productDetails__wrap__figure'>
                          <div className="figure" onClick={() => setOpen(true)}>
                                {/* <ReactImageZoom {...props1} /> */}
                                <ReactImageZoom {...props1} src={imgSrc} width={300} height={300} alt="img"></ReactImageZoom>
                                
                            
                          </div>
                          <div className="smallImg">
                          {
                              props.productDetails.product.images && Array.isArray(props.productDetails.product.images)?props.productDetails.product.images.map((image)=>{
                                return (<Image src={image} onClick={(e)=>imgHeandler(e)} width={50} height={50} alt="small img" key={image}/>)
                              }):''
                          }
                          </div>
                      </div>
                      <div className='productDetails__wrap__contents'>
                          <div className='pageTitle'>
                             <p>{props.productDetails.product.product_title} | {props.productDetails.product.ram} | {props.productDetails.product.hdd}</p>
                          </div>
                          <div className="content">
                             <div className="content__product">
                                <div className='product_values'>
                                    <p><BiRupee/><span> {finalPrice} </span> </p>
                                </div>
                                 <PincodeCheckComponent pincodeCheckCallback={pincodeCheckCallback}></PincodeCheckComponent>
                                <div className="freedelivery">
                                    <div className="freedelivery__icons">
                                        <Image src="/images/truck__icon.svg" width={20} height={16} alt="truck icon"/>
                                        <p> Free delivery</p>
                                    </div>
                                    <div className="freedelivery__icons">
                                         <BiTime/>
                                         <p>6 Months Warranty</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content__buyback">
                                  <div className="buyback">
                                      <p className="assured"><span>With assured buyback</span>  </p>
                                      <table className="table">
                                        <tbody>
                                          <tr>
                                             <td> <span>Redemption Period</span><span>Starts form Invoice Date</span> </td>
                                             <td> <span>Buyback</span><span>% of Invoice Price</span></td>
                                          </tr>
                                          <tr>
                                             <td> 3-6 Month</td>
                                             <td> 70%</td>
                                          </tr>
                                          <tr>
                                             <td> 6-12 Month</td>
                                             <td> 50%</td>
                                          </tr>
                                          <tr>
                                             <td> 12-18 Month</td>
                                             <td> 40%</td>
                                          </tr>
                                          <tr>
                                             <td> 18-24 Month</td>
                                             <td> 30%</td>
                                          </tr>
                                          </tbody>
                                        </table>
                                  </div>
                            </div>
                          </div>
                          <div className=" customization">
                              <button type="button" className={`btn-edit ${isActive ? 'active':''}`} onClick={toggleItem}><span> Customization & Add-ons </span><FaAngleDown/></button> 
                              <div className={`customization__items ${isActive ? 'active':''}`}>
                                  {props.productDetails.custom_rams?(
                                      <>
                                          <div className="pageTitle">
                                              <p>RAM</p>
                                          </div>
                                          <table className="table">
                                              <tbody>
                                              {
                                                  Object.entries(props.productDetails.custom_rams).map(function(entry){
                                                      return (<tr key={entry[0]}>
                                                          <td>{entry[0]}</td>
                                                          <td><span><span><BiPlus/></span> <span><BiRupee/> {entry[1]}</span></span></td>
                                                          <td><input type="checkbox" name="ram" checked={customRam==entry[0]?true:false} onChange={(event)=>handleRamSelect(event.target.checked?entry[0]:null)}/></td>
                                                      </tr>)
                                                  })
                                              }
                                              </tbody>
                                          </table>
                                      </>
                                  ):''}

                                  {props.productDetails.custom_hdds?(
                                      <>
                                    <div className="pageTitle">
                                        <p>Storage</p>
                                    </div>
                                    <table className="table">
                                        <tbody>
                                        {Object.entries(props.productDetails.custom_hdds).map(function(entry){
                                            return (<tr key={entry[0]}>
                                                <td>{entry[0]}</td>
                                                <td><span> <span><BiPlus/></span> <span><BiRupee/> {entry[1]}</span> </span></td>
                                                <td><input type="checkbox" name="ram" checked={customHdd==entry[0]?true:false} onChange={(event)=>handleHddSelect(event.target.checked?entry[0]:null)}/></td>
                                            </tr>)
                                        })}
                                        </tbody>
                                    </table>
                                      </>):''}
                              </div>
                          </div>
                          <div className="next-btn">
                              {!cart.cartItems.includes(props.productDetails.product.product_sku_id)?(<button type="button" className={`btn btn-orange ${!pincodeEnabled?'disabled':''}`} onClick={handleAddtoCart}>
                                  <Image src='/images/cart.svg' width={20} height={16} alt="cart icon"/>
                                  Add to Cart
                              </button>):(<><Link type="button" className="btn btn-orange" href={'/cart'}>
                                  <Image src='/images/cart.svg' width={20} height={16} alt="cart icon"/>
                                  Go to Cart
                              </Link><Link type="button" className="btn btn-orange" href={'/buy-laptop'}>
                                  <Image src='/images/cart.svg' width={20} height={16} alt="cart icon"/>
                                  Continue Shopping
                              </Link></>)}
                          </div>
                      </div>
                  </div>
                  <div className="productDetails__tab">
                     <div className="tab_menu">
                        <ul>
                            <li className={tabActive==="tab1"?"active":''} onClick={()=>{menuTab("tab1")}}> Technical Details </li>
                            <li className={tabActive==="tab2"?"active":''} onClick={()=>{menuTab("tab2")}}> Additional Information</li>
                            <li className={tabActive==="tab3"?"active":''} onClick={()=>{menuTab("tab3")}}> Return & Refund Policy</li>
                            <li className={tabActive==="tab4"?"active":''} onClick={()=>{menuTab("tab4")}}> Warranty Policy</li>
                            <li className={tabActive==="tab5"?"active":''} onClick={()=>{menuTab("tab5")}}> Assured Buyback Policy</li>
                        </ul>
                      </div>
                      <div className="tab_content">
                          <div className={`tab-pane ${tabActive==="tab1"?"active":''}`}>
                              <TechnicalDetailsComponent product={props.productDetails.product}/>
                          </div>
                          <div className={`tab-pane ${tabActive==="tab2"?"active":''}`}>
                             <AdditionalInfoComponent/>
                          </div>
                          <div className={`tab-pane ${tabActive==="tab3"?"active":''}`}>
                             <ReturnPolicyComponent/>
                          </div>
                          <div className={`tab-pane ${tabActive==="tab4"?"active":''}`}>
                              <WarrantyPolicyComponent/>
                          </div>
                          <div className={`tab-pane ${tabActive==="tab5"?"active":''}`}>
                             <AssuredBuybackComponent/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="page_card">
                  <RefurbishedComponent/>
                  <RelatedItemsComponent products={props.productDetails.related_items}></RelatedItemsComponent>
              </div>
            </div>
            
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Fullscreen, Slideshow, Zoom]}
                slides={
                    props.productDetails.product.images && Array.isArray(props.productDetails.product.images) ? props.productDetails.product.images.map((image) => { 
                        return (
                            { src: image }
                         )
                    }):''
                }
            />
      </section>
  )
}

export default LaptopDetailsComponent