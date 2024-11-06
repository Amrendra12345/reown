import { FaArrowCircleLeft, FaGift,FaInfoCircle } from "react-icons/fa";
import {useContext, useState} from "react";
import {QuestionAnswersContext} from "@/context/question-answers.context";
import {updateOffer} from "@/frontend-libs/webapi_lib";
import {useRouter} from "next/router";


const DeviceValueComponent = () => {

  const router = useRouter()
  const {quoteGenerated, setQuoteGenerated} = useContext(QuestionAnswersContext)
  const [offerSelected, setOfferSelected] = useState()

  const backHandler = () => {
      setQuoteGenerated(null)
      //setAutoQCData(null)
      //setActiveSection(0)
      //setDCode(null)
      //setAnswerSet({})
  }

  const offerClickHandler = () => {
        setOfferSelected(!offerSelected)
  }

  const nextHandler = async () => {
        if(offerSelected){
             const apply_offer = await  updateOffer(quoteGenerated.quote_details.quote_id, quoteGenerated.quote_details.offer_value)
            if(apply_offer.status != 200){
                alert('offer applied')
            }
        }
        router.push('/process-order/'+quoteGenerated.quote_details.quote_id)
  }


  return (      
          <>
              <div className="pageTitle">
                  <p>DEVICE VALUE</p>
                  <button type="button" className="btn-back" onClick={backHandler}></button>
              </div>
              <div className="deviceValue">
                <p> <span>₹</span> {parseInt(quoteGenerated.quote_details.quote_value) + parseInt(offerSelected?quoteGenerated.quote_details.offer_value:0)}</p>
              </div>
              <div className="pageTitle"><p>EXCLUSIVE OFFER</p> </div>
              <div className={`exclusiveOffer ${offerSelected ? 'active' : ''}`} onClick={offerClickHandler}>
                      <div className="giftOffer">
                          <FaGift />
                          <p className="offer_value">₹ {quoteGenerated.quote_details.offer_value} </p>
                      </div>
                      <div className="choose_option">
                         <p> Choose this offer to Get ₹ {quoteGenerated.quote_details.offer_value} Extra </p>
                      </div>                     
              </div>
              <div className="pageTitle"><p> GET MORE </p></div>
              <div className="getMore">
                      <FaInfoCircle/>
                      <div className="getMore_content">
                          <p>Checkout with payment option as Amazon Pay Gift Card and get additional {quoteGenerated.quote_details.amazonpay_discount}% </p>
                          <p>Effective Price with Amazon Pay Gift Card ₹  {parseInt(quoteGenerated.quote_details.quote_value*(1+quoteGenerated.quote_details.amazonpay_discount/100)) + parseInt(offerSelected?quoteGenerated.quote_details.offer_value:0)}</p>
                      </div>
              </div>               
              <div className="next-btn">
                 <button type="button" className="btn btn-orange" onClick={nextHandler}>Next</button>
              </div>
            
          </>
  );
}

export default DeviceValueComponent;