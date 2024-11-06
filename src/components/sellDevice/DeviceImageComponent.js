import Image from "next/image";

const DeviceImageComponent = (props) => {
  return (
      <div className="figure">
          <Image src={props.image} width={220} height={220} alt={`img-${props.brandName}`} priority />
              <div className="figure_caption">
                <p className="brand_name">{props.brandName}</p>
                <p className="solidDevice"><span>{props.solidSDevice}</span> {props.solidtxt} </p>
              </div>
      </div>
      
  )
}

export default DeviceImageComponent;