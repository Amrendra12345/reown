import {createContext, useReducer, useState} from "react";

export const BuyLaptopContext = createContext({
    selectedBrands:[],
    setSelectedBrands:()=>{},
    selectedProcessors:[],
    setSelectedProcessors:()=>{},
    search:'',
    setSearch:()=>{}
})

const buyLaptopReducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case 'SET_BRANDS': return {
            ...state,
            selectedBrands: payload
        }
        case 'SET_PROCESSORS': return {
            ...state,
            selectedProcessors: payload
        }
        case 'SET_SEARCH': return {
            ...state,
            search: payload
        }
    }
}

const INITIAL_STATE = {
    selectedBrands: [],
    selectedProcessors: [],
}


export const BuyLaptopProvider = ({children}) => {
    const [{selectedBrands, selectedProcessors, search}, dispatch] = useReducer(buyLaptopReducer, INITIAL_STATE)

    const setSelectedProcessors = (value) => {
        dispatch({type:'SET_PROCESSORS', payload:value})
    }

    const setSelectedBrands = (value) => {
        dispatch({type:'SET_BRANDS', payload:value})
    }

    const setSearch = (value) => {
        dispatch({type:'SET_SEARCH', payload:value})
    }

    const value = {
        selectedBrands, selectedProcessors,search, setSelectedProcessors, setSelectedBrands, setSearch
    }
    return <BuyLaptopContext.Provider value={value}>{children}</BuyLaptopContext.Provider>
}