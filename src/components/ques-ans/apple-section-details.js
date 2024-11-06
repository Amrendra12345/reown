import {checkForAppleLaptop} from "@/frontend-libs/helpers";

const appleHiddenQuestions = [
    'gpu', 'panel_display'
]

const appleProcessors = [
    "Intel Core Duo",
    "Intel Core 2 Duo",
    "Intel Core M",
    "Intel Core i3",
    "Intel Core i5",
    "Intel Core i7",
    "Intel Core i9",
    "Apple M1",
    "Apple M1 Pro",
    "Apple M1 Max",
    "Apple M2",
];
const appleRams = [
    "512MB",
    "1GB",
    "2GB",
    "3GB",
    "4GB",
    "6GB",
    "8GB",
    "12GB",
    "16GB",
    "24GB",
    "32GB"
];

const appleHdds = [
    "80GB",
    "160GB",
    "200GB",
    "240GB",
    "250GB",
    "320GB",
    "500GB",
    "1TB",
    "128GB(SSD)",
    "256GB(SSD)",
    "512GB(SSD)",
    "1TB(SSD)",
    "2TB(SSD)"
];

export const displayAppleSections = (answer) => {
    switch(answer.ans_param_name){
        case 'ram': return (appleRams.map((option)=>{
            return {
                label:option,value:option
            }
           
        }))
         case 'internal_storage':return (appleHdds.map((option)=>{
            return {
                label:option,value:option
            }
        }))
        case 'cpu_model': return (appleProcessors.map((option)=>{
            return {
                label:option,value:option
            }
        }))
         default: return (answer.ans_param_value.split(',').map((option)=>{
            return {
                label:option,value:option
            }
        }))
    }
}

export const appleSectionDefaultValue = (answer) =>{
    switch(answer.ans_param_name){
        case 'ram': return(appleRams[0])
        case 'internal_storage': return(appleHdds[0])
        case 'cpu_model': return(appleProcessors[0])
        default: return (answer.ans_param_value.split(',')[0]??'')
    }
}

export const isAppleHiddenQuestion = (answer) => {
    return checkForAppleLaptop() && appleHiddenQuestions.includes(answer.ans_param_name)
}