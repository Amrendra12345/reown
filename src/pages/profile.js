import Image from "next/image"
import { useState } from "react"

const Profile = () => {
    const [isActive, setIsActive] = useState('perInfo');
    const [isChecked, setIsChecked] = useState(true);
    const profileHeandelr =(e)=>{
        setIsActive(e)
    }
    const billingCheckbox = (e)=>{
        setIsChecked(e.target.checked);
    }
  return (
    <section className='profile'>
        <div className='container'>
             <div className='profile__container'>
                <div className='profile__aside'>
                    <div className='page_card user_profile'>
                        <div className='user__img'>
                            <Image src="/images/team/gautam.jpg" alt="user img" width={90} height={80}/>
                        </div>
                        <div className='user__content'>
                            <p className='profileName'><span>Hello,</span><span>Amrendra kumar Singh</span></p>
                            <input type='file' id="file" />
                            <label htmlFor="file" className="btn-file">upload</label>
                            <p className='helper'><small>png, jgp, jpeg only</small></p>
                           

                        </div>
                    </div>
                    <div className={`page_card personalInfo ${isActive=='perInfo'? 'active':''}`}>
                        <button type="button" className="btn btn-profile" onClick={()=>{profileHeandelr('perInfo')}}>Personal information </button>
                    </div>
                    <div className={`page_card address ${isActive=='perAddress'? 'active':''}`}>
                       <button type="button" className="btn btn-profile"  onClick={()=>{profileHeandelr('perAddress')}}> Address </button>
                    </div>
                    <div className={`page_card kyc ${isActive=='kyc'? 'active':''}`}>
                        <button type="button" className= "btn btn-profile"  onClick={()=>{profileHeandelr('kyc')}}> Kyc Details </button>
                    </div>
                </div>
                <div className='profile__main'>
                    <div className='page_card'>
                        <div className={`perInfoDetails ${isActive=='perInfo'? 'active':''}`}>
                            <div className="pageTitle">
                                <p> Personal Information </p>
                            </div>
                            <hr/>
                            <form>
                                <div className="form-group">
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="name" required />
                                            <hr></hr>
                                            <label htmlFor="name">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="email" required />
                                            <hr></hr>
                                            <label htmlFor="email">E-Mail</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="mobNo" required />
                                            <hr></hr>
                                            <label htmlFor="mobNo">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="whatsapp" required />
                                            <hr></hr>
                                            <label htmlFor="whatsapp">Whatsapp Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group radioInput">
                                    <div className="form-group-checkbox">
                                        <input type="radio" id="male" name="gender"/>
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-group-checkbox">
                                        <input type="radio" id="female" name="gender"/>
                                        <label htmlFor="female">Female</label>
                                    </div>
                                    <div className="form-group-checkbox">
                                        <input id="other" type="radio" name="gender"/>
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                                <hr />
                                <div className="next-btn">
                                    <button type="button" className="btn btn-orange"> Save </button>
                                </div>
                            </form>
                        </div>
                        <div className={`perInfo_Address ${isActive=='perAddress'? 'active':''}`}>
                            <div className="pageTitle">
                                <Image src='/images/address__icon.svg' width={20} height={18} alt="address icon"/>
                                <p> Shipping Address </p>
                            </div>
                            <hr/>
                            <form>
                                <div className="form-group">
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="houseNo" required />
                                            <hr></hr>
                                            <label htmlFor="houseNo">House N0.</label>
                                        </div>
                                    </div>
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="street" required />
                                            <hr></hr>
                                            <label htmlFor="street">Street Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="locality" required />
                                            <hr></hr>
                                            <label htmlFor="locality">Locality</label>
                                        </div>
                                    </div>
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="city" required />
                                            <hr></hr>
                                            <label htmlFor="city"> City</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="state" required />
                                            <hr></hr>
                                            <label htmlFor="state">State</label>
                                        </div>
                                    </div>
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="postalCode" required />
                                            <hr></hr>
                                            <label htmlFor="postalCode"> Postal Code</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group form-group-checkbox">
                                   <input type="checkbox" name="billingAddress" id="billingAddress" checked={isChecked} onChange={billingCheckbox}/>
                                   <label htmlFor="billingAddress">Billing address is same as the Shipping address</label>
                                   
                                </div>
                                <hr />
                                <div className={` billingAddress ${!isChecked ? 'active':''}`}>
                                    <div className="pageTitle">
                                        <Image src='/images/address__icon.svg' width={20} height={18} alt="address icon"/>
                                        <p> Billing Address </p>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group__input">
                                            <div className="material">
                                                <input type="text" id="houseNo" required />
                                                <hr></hr>
                                                <label htmlFor="houseNo">House N0.</label>
                                            </div>
                                        </div>
                                        <div className="form-group__input">
                                            <div className="material">
                                                <input type="text" id="street" required />
                                                <hr></hr>
                                                <label htmlFor="street">Street Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group__input">
                                            <div className="material">
                                                <input type="text" id="locality" required />
                                                <hr></hr>
                                                <label htmlFor="locality">Locality</label>
                                            </div>
                                        </div>
                                        <div className="form-group__input">
                                            <div className="material">
                                                <input type="text" id="city" required />
                                                <hr></hr>
                                                <label htmlFor="city"> City</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group__input">
                                            <div className="material">
                                                <input type="text" id="state" required />
                                                <hr></hr>
                                                <label htmlFor="state">State</label>
                                            </div>
                                        </div>
                                        <div className="form-group__input">
                                            <div className="material">
                                                <input type="text" id="postalCode" required />
                                                <hr></hr>
                                                <label htmlFor="postalCode"> Postal Code</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="next-btn text-center">
                                    <button type="button" className="btn btn-orange"> Save </button>
                                </div>
                            </form>
                        </div>
                        <div className={`keyDetails ${isActive=='kyc'? 'active':''}`}>
                            <hr></hr>
                            <div className="form-group">
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="name" required />
                                            <hr></hr>
                                            <label htmlFor="name">Gst Number</label>
                                        </div>
                                    </div>
                                    <div className="form-group__input">
                                        <div className="material">
                                            <input type="text" id="companyName" required />
                                            <hr></hr>
                                            <label htmlFor="companyName">Company Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-2">
                                <p><span> Note :</span>  After placing an order, GSTIN cannot be changed. Registration state must match either with the billing or the shipping state.</p>
                                </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Profile