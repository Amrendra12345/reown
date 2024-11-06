import {FaBuilding, FaHome} from "react-icons/fa";
import React, {useContext, useEffect, useState} from "react";
import {ProcessOrderContext} from "@/context/process-order.context";
import {checkAddressServicability, viewAddress} from "@/frontend-libs/webapi_lib";
import AddressDetailsComponent from "@/components/process-order/AddressDetailsComponent";

const AddressesListComponent = (props) => {
    const {customerKey,quoteKey,orderParams, setOrderParams} = useContext(ProcessOrderContext)
    const [addressList, setAddressList] = useState([])
    const [editingAddress, setEditingAddress] = useState(null)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if(!editingAddress) {
            setUpAddressList()
        }
    },[editingAddress])


    const setUpAddressList = async ()=>{
        const address_result = await viewAddress(customerKey)
        if(address_result.status=200){
            setAddressList(address_result.data.address)
        }
    }

    const clickBack = () => {
        props.moveBack()
    }

    const moveNext = async () => {
        if(selectedAddress && await isAddressServicable(quoteKey,selectedAddress)){
            orderParams['address_id'] = selectedAddress
            const address = getAddressByID(selectedAddress)
            orderParams['address_type'] = address.address_type
            orderParams['house'] = address.house_no
            orderParams['street'] = address.street_no
            orderParams['area'] = address.locality
            orderParams['pincode'] = address.pincode
            orderParams['city'] = address.city
            orderParams['state'] = address.state
            const newOrderParams = Object.assign({}, orderParams)
            setOrderParams(newOrderParams)
            props.moveToNext()
        }
    }

    const selectAddress = (address_id) => {
        setSelectedAddress(address_id)
    }

    const getAddressByID = (address_id) => {
        for(let i = 0; i < addressList.length; i++)
            if(addressList[i].address_id == address_id)
                return addressList[i]
        return null
    }


    const editAddress = (address) => {
        setEditingAddress(address)
    }

    const cancelEdit = () => {
        setEditingAddress(null)
    }

    /**
     *
     * @returns {Promise<boolean>}
     */
    const isAddressServicable = async () => {
        const address_result = await checkAddressServicability(quoteKey, selectedAddress)
        if(address_result.status == 200){
          if(address_result.data.servicable === true){
              return true
          }else{
              setError(address_result.message)
              return false
          }
        }
        setError(address_result.message)
        return false
    }

    return <>
        {!editingAddress ? <>
            <div className="pageTitle mt-0">
                <h4> CHOOSE YOUR ADDRESS </h4>
                <button type="button" className="btn-back" onClick={clickBack}></button>
            </div>
            <div className="editingTitle">
               <p>Please enter complete and correct address matching your address proof from where pickup will be done</p>
            </div>
    
        <div className="editingAddress">
            {
                addressList.map((addr)=>{
                    return (
                        <div className={`card ${selectedAddress == addr.address_id ? "active" : ''}`} key={addr.address_id}>
                            <div className={`card__${addr.address_type}`} >
                              <p className="card__title" onClick={()=>selectAddress(addr.address_id)}><span>{addr.address_type == 'Home'? <FaHome /> : <FaBuilding/> }</span><span>{addr.address_type }</span></p>
                             <p onClick={()=>selectAddress(addr.address_id)}>{addr.house_no+', '+addr.street_no+', '+addr.locality+', '+addr.city+', '+addr.state+'-'+addr.pincode}</p>
                                
                                    <button type="button" className="btn btn-edit" onClick={()=>editAddress(addr)}>Edit</button>
                                
                          </div>
                        </div>
                    )
                })
            }
        </div>
        
            <div className="next-btn">
                <p className="error">{error}</p>
                <button type='button' className={` btn btn-orange ${!selectedAddress? 'disabled_next':''}`} onClick={moveNext}>Next</button>
            </div>
        
        </> : <AddressDetailsComponent cancelEdit={cancelEdit} address={editingAddress} setQuoteExpired={props.setQuoteExpired}/>}
        
        {/* <ReviewOrderComponent></ReviewOrderComponent> */}
    </>
}

export default AddressesListComponent