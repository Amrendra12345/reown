import {BsSearch, BsXLg} from "react-icons/bs";
import React, {useRef} from "react";

export const SearchComponent = (props) => {
    const searchRef = useRef()

    return <div className='material'>
                <input type='text'id="searchDevice" className='form-control'  required ref={searchRef} defaultValue={props.search}/>
                <span className='colseIcon' onClick={()=> {
                    props.applySearch()
                }}>
                    <BsXLg/>
                </span>
                <span className='searchIcon' onClick={()=> {
                    props.applySearch(searchRef.current.value)
        }}><BsSearch /></span>
        <hr />
        <label htmlFor="searchDevice"> Search device</label>
            </div>
}

export default SearchComponent