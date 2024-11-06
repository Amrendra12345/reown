import React from 'react'
import VariantListComponent from './VariantListComponent';
import VariantUptoComponent from './VariantUptoComponent';

const SellDeviceComponent = (props) => {
   
    return (
      <>
          {props.page_name=='variants-list'?<VariantListComponent {...props}/>:<VariantUptoComponent {...props} />}

      </>
  )
}

export default SellDeviceComponent;