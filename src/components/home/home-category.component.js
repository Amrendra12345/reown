import axios from "axios";
import  Image from "next/image";
import {useContext, useEffect, useRef, useState} from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {config_urlencoded} from "@/frontend-libs/constants";
import {getCategorySlug} from "@/frontend-libs/helpers";

const HomeCategoryComponent = (props) => {
    const inputRef = useRef();
    const [families, setFamilies] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const searchFamily = async (event) => {
        if(event.target.value.length < 1){
            setIsActive(false)
        }else{
            setIsActive(true);
        }
        try{
            if(!event.target.value){
                setFamilies([]);
            }else{
                const result = await axios.post('/api/search-family',
                    {
                        search_key:event.target.value
                    }, config_urlencoded);

                if(result.data.success){
                        if(result.data.families.length>0){                            
                            setFamilies(result.data.families);                           
                        }else{
                            setFamilies(event.target.value);
                        }
                }
            }
        }catch (err){

        }
    }

    return <>
      <section className="category">
            <div className="container">
                <div className="category__wrap">
                    <div className="input-group">
                        <span><FaSearch/></span>
                        <input type="text" className="form-control" onChange={searchFamily} ref={inputRef} placeholder="Search device" />                        
                    </div>
                    <div className={`input-group_searchItem ${isActive?'active':''}`}>
                        {Array.isArray(families)?(
                        <ul>
                            {families.map(function(element){
                                return <li key={element.family_slug}>
                                    <Link href={'/sell-'+getCategorySlug(element.family_type)+'/'+element.family_make.toLowerCase()+'/'+element.family_slug}>
                                        {element.family_make + ' '+element.family_name}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    ):(<span>Nothing found for <strong>{families}</strong></span>)}
                    </div>
                    <div className="category__wrap_cards">
                        {!props.categories ? '' : (
                            props.categories.map(function (element) { 
                                return <div className="category__wrap_cards__card" key={element.category_name}>
                                   <Link className="category_link" href={`/sell-${getCategorySlug(element.category_name)}`}>
                                        <Image src={element.category_image} alt={element.category_name} className="img-fluid" width={60} height={100} />
                                        <div className="overlayer">
                                            SELL {element.category_name}
                                        </div>
                                    </Link>
                                </div>
                            })
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HomeCategoryComponent