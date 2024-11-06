import {BsX} from "react-icons/bs";
import {useState} from "react";

const FiltersComponent = (props) => {

    return (<div className={`orders__aside ${props.toggleSidebar == true? 'showAside':''}`}>
        <div className='page_card'>
            <div className='pageTitle mb-1'>
                <p>Filters</p>
                <p onClick={props.sideBarMobile}><BsX/></p>
            </div>
            <hr className="asideHr"/>
            <div className='filterSection'>
                <div className='pageTitle'>
                    <p>ORDER STATUS</p>
                </div>
                <ul>
                    <li>
                        <input type='checkbox' id="onTheWay" name="onTheWay"/>
                        <label htmlFor='onTheWay'>On the way</label>
                    </li>
                    <li>
                        <input type='checkbox' id="delivered" name="delivered"/>
                        <label htmlFor='delivered'>Delivered</label>
                    </li>
                    <li>
                        <input type='checkbox' id="cancelled" name="cancelled"/>
                        <label htmlFor='cancelled'>Cancelled</label>
                    </li>
                    <li>
                        <input type='checkbox' id="returned" name="returned"/>
                        <label htmlFor='returned'>Returned</label>
                    </li>
                </ul>
                <hr/>
                <div className='pageTitle'>
                    <p>ORDER TIME</p>
                </div>
                <ul>
                    <li>
                        <input type='checkbox' id="lastdays" name="lastdays"/>
                        <label htmlFor='lastdays'>Last 30 days</label>
                    </li>
                    <li>
                        <input type='checkbox' id="year2022" name="year2022"/>
                        <label htmlFor='year2022'>2022</label>
                    </li>
                    <li>
                        <input type='checkbox' id="year2021" name="year2021"/>
                        <label htmlFor='year2021'>2021</label>
                    </li>
                    <li>
                        <input type='checkbox' id="year2020" name="year2020"/>
                        <label htmlFor='year2020'>2020</label>
                    </li>
                    <li>
                        <input type='checkbox' id="older" name="older"/>
                        <label htmlFor='older'>Older</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}

export default FiltersComponent