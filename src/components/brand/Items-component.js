import Link from 'next/link';
import Image from 'next/image';

function ItemsComponent(props) {
  return (<>
      <div className="brand__items__item" key={props.id}>
        <Link href={props.href}>
            <Image src={props.image} width={50} height={50} alt={props.name } />
              <p>{props.name}</p>
          </Link>
     </div> 
    </>
  )
}

export default ItemsComponent;