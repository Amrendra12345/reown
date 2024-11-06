import {useEffect} from 'react'
import {useRouter} from "next/router";

const PageExpire = (props) => {

    const router = useRouter()

    useEffect(() => {
        document.body.classList.add('open-modal');        
        setTimeout(()=>{
            router.push('/')
        }, 2000)
        return () => {
            document.body.classList.remove('open-modal');
         }
	},[])

  return (
        <div className='modal pageExpire' >
        <div className='modal-content'>
              <div className='modal-content-body'>
                  <p className='opps'>Oops!</p>
                 <p>Redirecting to Home page</p> 
            </div>
        </div>
    </div>
  )
}

export default PageExpire;
