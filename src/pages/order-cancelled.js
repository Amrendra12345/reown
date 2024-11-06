import DeliveryAddressComponent from '@/components/reown/deliveryAddress.component'
import {BiRupee} from 'react-icons/bi';
import Image from 'next/image';

const OrderCancelled = () => {
  return (
      <section className='orderDetails'>
          <div className='container'>
              <div className='orderDetails__wrapper'>
                  <div className='orderDetails__main'>
                      <div className='page_card'>
                          <DeliveryAddressComponent />
                      </div>
                      <div className='page_card'>
                          <div className='orderContent'>
                              <div className='pageTitle'>
                                  <Image src="/images/summary__icon.svg" width={25} height={28} alt='file icon' />
                                  <p>Order Details</p>
                              </div>
                          </div>
                          <div className='orderContent__wrap'>
                              <div className='orderContent__wrap_figure'>
                                  <Image src="/images/6539.jpeg" alt='laptop' width={80} height={80} />
                              </div>
                              <div className='orderContent__wrap_content'>
                                  <div className='pageTitle'>
                                      <p>Microsoft Surface Pro 4 | Intel Core i5 6th Gen</p>
                                  </div>
                                  <div className='qtyValue'>
                                      <div className='quantity'>
                                          <p> Quantity :</p>
                                          <p>1</p>
                                      </div>
                                      <div className='value'>
                                          <p><BiRupee /><span>15000 </span></p>
                                      </div>
                                  </div>
                                  <div className='orderCancelled'>
                                      <ul>
                                          <li className='active'>
                                              <span>Order Confirmed</span>
                                              <span>Mon, 08 May</span>
                                          </li>
                                          <li className=''>
                                              <span>Cancelled</span>
                                              <span style={{ visibility: 'hidden' }}>.</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='pageTitle'>
                          <p>Support Tickets</p>
                      </div>
                      <div className='supportTickets'>
                          <div className='page_card'>
                              <div className='supportTickets__wrap'>
                                  <div className='supportTickets__issue'>
                                      <p>Touchpad Faulty <span> ( Titkets ID : 16582 )</span></p>
                                       <ul>
                                          <li> Not</li>
                                       </ul>
                                  </div>
                                  <div className='supportTickets__date'>
                                     <p>Jul 07, 2023</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='orderDetails__aside'>
                      <div className='page_card'>
                          <div className='priceDetails'>
                              <div className='pageTitle'>
                                  <p>Price Details</p>
                              </div>
                              <hr />
                              <div className='priceDetails_content'>
                                  <p><span>Total</span> <span><BiRupee />1500</span></p>
                                  <p><span>Delivery Charges</span> <span>Free</span></p>
                              </div>
                          </div>
                          <hr />
                          <div className='priceDetails_total'>
                              <p><span>Total</span> <span><BiRupee />1500</span></p>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default OrderCancelled