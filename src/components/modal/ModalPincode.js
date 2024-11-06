import {useState, useEffect} from 'react'

function ModalPincode(props) {
    const [cities, setCities] = useState([])
    const [city, setCity] = useState('')
    const citySearch = () => {
        
    }

    useEffect(() => {
           document.body.classList.add('open-modal');
        return () => {
           document.body.classList.remove('open-modal');
        }
    }, [])
    

  return (
    <div className='modal pincodeModal' >
        <div className='modal-content'>
            <div className='modal-content-title'>
                <p>Enter City Name </p>
                <button type='button' className='btn btn-close' onClick={props.closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
                                    <li key={city_item.pincode}>
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
  )
}

export default ModalPincode
