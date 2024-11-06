import Image from "next/image"

const DeliveryAddressComponent = (props) => {
  console.log(props)
  return (
      <div className='deliveryAddress'>
          <div className="deliveryAddress__address">
              <div className='pageTitle'>
                  <Image src="/images/address__icon.svg" width={22} height={20} alt="address icon" />
                  <p>Delivery Address</p>
              </div>
              <p>{(props.address_line_1??'')+', '+(props.address_line_2??'')+', '+(props.city??'')+', '+(props.state??'')+', India-'+(props.pincode??'') }</p>
          </div>
          <div className="deliveryAddress__figure">
              <Image src='/images/address__banner.svg' alt="address banner" width='160' height={80} />
          </div>
      </div>
  )
}

export default DeliveryAddressComponent