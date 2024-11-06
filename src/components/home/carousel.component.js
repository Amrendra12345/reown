import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/carousel.module.scss";
const CarouselTop = (props) => {
	return <>	
		<Carousel className={styles.carousel}>
				<Carousel.Item interval= {8000}>
					<Image
						className="img-fluid"           
						src="/images/mobile.webp"
				    	width={920} height={443}
					   alt="sell old mobile phone and laptop"
					/>
				</Carousel.Item>
				<Carousel.Item interval={8000}>
					<Image
						className="img-fluid"
					    width={920} height={443}
					 	src="/images/pickup.webp"
						alt="sell phone & get same day free pickup"
					/>
      </Carousel.Item>
    </Carousel>	
      <div className="truePrice text-center">
         <p>TRUE PRICE <span> NO SURPRISE </span></p>
      </div>
    
	</>
};
export default CarouselTop;
