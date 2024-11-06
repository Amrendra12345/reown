import {createContext, useState} from "react";

export const QuestionAnswersContext = createContext({
    answersSet:{}, // hold user selected answers
    setAnswerSet:()=>{},
    activeSection:0, // which section is active
    setActiveSection:()=>{},
    sectionsList:[], // holds the question list for every step/section
    setSectionsList:()=>{},
    childParent:{},
    setChildParent:()=>{},
    setsDisplayStatus:{}, // holds which set is visible for answering
    setSetsDisplayStatus:()=>{},
    autoQCData:null,  //hold data detected in auto qc
    setAutoQCData:()=>{},
    dCode:null,  //holds autoqc code for successfull data
    setDCode:()=>{},
    quoteGenerated:null, // holds generated quote data. display quote details page if set
    setQuoteGenerated:()=>{},
    exchangeMethod:null,  // hold exchange method of journey
    setExchangeMethod:()=>{},
    variantSlug:null,  //holds variant_slug of journey
    setVariantSlug:()=>{}
})



export const QuestionAnswerProvider = ({children}) => {
    const [answersSet, setAnswerSet] = useState({})
    const [activeSection, setActiveSection] = useState(0)
    const [sectionsList, setSectionsList] = useState([])
    const [setsDisplayStatus, setSetsDisplayStatus] = useState({})
    const [childParent, setChildParent] = useState({})
    const [autoQCData, setAutoQCData] = useState(null)
    const [dCode, setDCode] = useState(null)
    const [quoteGenerated, setQuoteGenerated] = useState(null)
    const [variantSlug, setVariantSlug] = useState(null)
    const [exchangeMethod, setExchangeMethod] = useState(null)
    let value = {answersSet, setAnswerSet, activeSection, setActiveSection, sectionsList, setSectionsList, setsDisplayStatus, setSetsDisplayStatus, childParent, setChildParent,autoQCData,setAutoQCData,dCode, setDCode,quoteGenerated,setQuoteGenerated,exchangeMethod,setExchangeMethod,variantSlug,setVariantSlug
    }
    return <QuestionAnswersContext.Provider value={value}>{children}</QuestionAnswersContext.Provider>
}