
import {useRef, useState} from "react";
import {getPincode, searchCity} from "@/frontend-libs/webapi_lib";
import ModalPincode from "../modal/ModalPincode";
import { validateIntegerField } from "@/frontend-libs/helpers";

const PincodeSearchComponent = (props) => {
    const pincodeRef = useRef();    
    const [cities, setCities] = useState([])
    const [city, setCity] = useState('')
    const [error, setError] = useState('')
    const [showModal, setShowModal] = useState(false);
	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

    // const handleClose = () => {
    //     setCities([])
    //     setShow(false);
    // }
    // const handleShow = () => {
    //     setCities([])
    //     setShow(true);
    // }
    
    
    
    const pincodeSearch = async (pincode) => {    
            if (pincode.length == 6) {
                const pincode_data = await getPincode(pincode)

                if(pincode_data.status==200){
                    setCity(pincode_data.data.pincode_details[0]['city'])
                    setError('')
                    props.callback({
                        'status': true,
                        'pincode_details': {...pincode_data.data.pincode_details[0],pincode:pincode}
                    })
                }else{
                    setCity('')
                    setError(pincode_data.message)
                    props.callback({
                        'status': false
                    })
                }
            } else {
                setCity('')
                setError('')
                props.callback({
                    'status': false
                })
            }
    }



    const citySearch = async (event) => {
        event.preventDefault();
      
        const result = await searchCity(event.target.value);        
        if(result.status == 200){
            setCities(result.data.cities)
        }
        
    }

    const selectLocation = async (pincode) => {
        closeModal()
        await pincodeSearch(pincode)
        pincodeRef.current.value=pincode
    }

    return <>
        <input type="text" maxLength={6} className={`form-control pincode_input`} placeholder="Enter Pincode"  ref={pincodeRef} onKeyDown={e => validateIntegerField(e)} onKeyUp={(event) => {pincodeSearch(event.target.value)}} />{city?(<span className="success">{city}</span>):''}{error?(<span className="error">{error}</span>):''}
        <p className="linkpincode" onClick={openModal}>Search by city name </p>
        
        {showModal && <div className='modal pincodeModal' >
                <div className='modal-content'>
                    <div className='modal-content-title'>
                        <p>Enter City Name </p>
                        <button type='button' className='btn btn-close' onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    <div className='modal-content-body'>
                        <input type='text' className='form-control' onKeyUp={citySearch} />
                        {cities && <div className='cityName'>
                            <ul>
                                {
                                    cities ? cities.map((city_item) => {
                                        return (
                                            <li key={city_item.pincode} onClick={()=>selectLocation(city_item.pincode)}>
                                            <span>{city_item.pincode}</span> <span>{city_item.locality}</span>
                                            </li>
                                        )
                                    }):'' 
                                }
                            </ul>
                        </div>}
                    </div>
                </div>
           </div>
        }
   








     {/* <Modal  size="sm" show={show} onHide={handleClose} className={styles.pincodeCity}>
         <Modal.Header closeButton>
                <Modal.Title>
                    <h6 className={styles.title}>
                        ENTER CITY NAME
                    </h6>
                </Modal.Title>
            </Modal.Header>        
            <Modal.Body>
                <input type="text" className="form-control" placeholder="" onKeyUp={citySearch} />
                {
                    cities &&  <div className={styles.dropdowns}>
                    <ul>
                        {
                            cities?cities.map(function(city_item){
                            return <li key={city_item.pincode} onClick={()=>selectLocation(city_item.pincode)}><span>{city_item.pincode}</span> <span>{city_item.locality}</span></li>
                        }):''
                        }
                    </ul>
                    </div>   

                }
            </Modal.Body>
      </Modal> */}

    </>
}

export default PincodeSearchComponent