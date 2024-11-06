import { useEffect, useState, useRef } from 'react';
import { Parser } from 'html-to-react'


function Accordion(props) {    
    const [activeIndex, setActiveIndex] = useState(0);    
    
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);        
    };
    
    return (
        <div className='accordion'>
            {props.items.map((item, index) => {
                return (
                    <div className="accordion__item" key={index}>
                        <div className={`accordion__item__title ${index === activeIndex ? 'active':''}`} onClick={() =>handleClick(index)}>
                            <p>{item.title}</p>
                        </div>
                        {index === activeIndex && 
                            <div className="accordion__item__content">
                            {Parser().parse(item.content)}
                        </div>}
                    </div>
                );
            })}
        </div>
      )
}

export default Accordion;