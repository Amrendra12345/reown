import {createContext, useReducer, useState} from "react";

export const ProcessOrderContext = createContext({
    customerKey:null,
    setCustomerKey:()=>{},
    quoteKey:null,
    setQuoteKey:()=>{},
    orderParams:{},
    setOrderParams:()=>{}

})

const processOrderReducer = (state, action) => {
    const {type, payload } = action
    switch(type){
        case 'SET_QUOTE_KEY': return {
            ...state,
            quoteKey: payload
        }
        case 'SET_CUSTOMER_KEY': return {
            ...state,
            customerKey: payload
        }
        case 'SET_ORDER_PARAMS': return {
            ...state,
            orderParams: payload
        }
    }
}

const INITIAL_STATE = {
    quoteKey: null,
    customerKey: null,
    orderParams:{}
}


export const ProcessOrderProvider = ({children}) => {
    const [{customerKey, quoteKey, orderParams}, dispatch] = useReducer(processOrderReducer, INITIAL_STATE)

    const setQuoteKey = (value) => {
        dispatch({type:'SET_QUOTE_KEY', payload:value})
    }

    const setCustomerKey = (value) => {
        dispatch({type:'SET_CUSTOMER_KEY', payload:value})
    }

    const setOrderParams = (orderParams) => {
        dispatch({type:'SET_ORDER_PARAMS', payload:orderParams})
    }

    const value = {
        customerKey, setCustomerKey, quoteKey, setQuoteKey, setOrderParams, orderParams
    }
    return <ProcessOrderContext.Provider value={value}>{children}</ProcessOrderContext.Provider>
}