import {useEffect} from 'react'

function ModalContact(props) {
    useEffect(() => {
        document.body.classList.add('open-modal');
        //this function is called when react component cleans up
        return () => {
           document.body.classList.remove('open-modal');
        }
	},[])
  return (
    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-content-title'>
                <p>RecycleDevice</p>
                <button type='button' className='btn btn-close' onClick={props.closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
            <div className='modal-content-body'>
                <iframe	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.272931500046!2d77.33210011508163!3d28.591587882434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce529b0e8fed9%3A0x477d822dcbd8ff4b!2sRecycleDevice+-+Relcube+India+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1534494006924" width="100%" height="500" frameborder="0" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
  )
}

export default ModalContact