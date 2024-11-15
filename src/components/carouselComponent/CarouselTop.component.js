import Carousel from 'react-bootstrap/Carousel';
import styles from "./carousel.module.scss";
import Image from 'next/image';
const Carousel_home = (props) => {
  return (
		<>
			<Carousel className={styles.sliders}>
					<Carousel.Item interval={8000}>
						<Image
							className="img-fluid"
							src="/images/mobile.webp"
							width="920"
							height="443"
							alt="sell old mobile phone and laptop"
						/>
					</Carousel.Item>
					<Carousel.Item interval={8000}>
						<Image
							className="img-fluid"
							width="920"
							height="443"
							src="/images/pickup.webp"
							alt="sell phone & get same day free pickup"
						/>
					</Carousel.Item>
				</Carousel>
			<div className={styles.truePrice}>
					<p className={styles.txt}>
						TRUE PRICE <span> NO SURPRISE </span>
					</p>
				</div>
		</>
	);
};
export default Carousel_home;