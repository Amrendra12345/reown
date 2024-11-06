import { FaMicrochip, FaMemory, FaSdCard, FaBatteryHalf } from 'react-icons/fa';

const DeviceSpecificationComponent = (props) => {
	return (
		<>
		  <div className='pageTitle'><p> SPECIFICATIONS </p> </div>		 
		  <div className='specification'>
			<ul>
				{props.specs.length > 0 ? props.specs.map((spec) => {
					switch (spec.name) {
						case 'Processor': return (
							<li key={spec.name}>
								<p><span><FaMicrochip /></span><span>Processor</span> </p>
								<p className='text-muted'>{spec.value}</p>
							</li>
						)
						case 'RAM': return (
							<li key={spec.name}>
								<p><span><FaMemory /></span><span>RAM</span></p>
								<p className='text-muted'>{spec.value}</p>
							</li>
						)
						case 'Storage': return (
							<li key={spec.name}>
								<p><span><FaSdCard /></span><span> Storage </span> </p>
								<p className='text-muted'>{spec.value}</p>
							</li>
						)
						case 'Battery Capacity': return (
							<li key={spec.name}>
								<p><span><FaBatteryHalf /></span><span> Battery Capacity </span> </p>
								<p className='text-muted'>{spec.value}</p>
							</li>
						)
					}
				}) : ''}						
			</ul>
		  </div>
		</>
	);
}

export default DeviceSpecificationComponent;