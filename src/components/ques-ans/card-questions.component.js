import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import Image from "next/image";
import React, {useContext, useEffect, useState} from "react";
import {QuestionAnswersContext} from "@/context/question-answers.context";

const CardQuestionsComponent = (props) => {

    const {answersSet, setAnswerSet, activeSection, sectionsList} = useContext(QuestionAnswersContext)
    const [disableNext, setDisableNext] = useState(false);
 
    useEffect(()=>{
        for(let i = 0; i< props.ques_value.answers.length; i++)
            if(props.ques_value.answers[i]['ans_required'] && !answersSet[props.ques_value.answers[i]['ans_param_name']])
            {
                setDisableNext(true)
                return
            }
        setDisableNext(false)

    },[answersSet])

    const handleSelect = (answer) => {
        
        var answersSetNew = Object.assign({}, answersSet);
        if(!props.ques_value.ques_multiselect){
            answersSetNew[answer['ans_param_name']] = answer['ans_param_value']
        }else{
            if(!answersSetNew[answer['ans_param_name']]){
                answersSetNew[answer['ans_param_name']] = answer['ans_param_value']
            }
            else
                delete answersSetNew[answer['ans_param_name']]
        }
        setAnswerSet(answersSetNew);
        
    }

    return <>{sectionsList[activeSection] == props.ques_name ? (<>
        <div className="pageTitle mt-0">
            <p> ANSWER FEW QUESTIONS </p>
            {activeSection > 0 ? <button type="button" className="btn-back" onClick={props.back}></button> : ''}
        </div>
        <div className="subTitle">
             <p>{props.ques_value.ques_title}</p>
             <p>{props.ques_value.ques_description}</p>
        </div>
        <div className="question">
            {
                props.ques_value.answers.map((answer) => {
                  
                    return (
                        <div key={answer.ans_id} className={`question__figure ${answersSet[answer.ans_param_name]==answer.ans_param_value?'active' : ''}`} onClick={()=>handleSelect(answer)}>
                            <Image src={answer.ans_image} width={70} height={70} alt={ answer.ans_title} />
                            <div className="caption">
                                <p className="mb-0">{answer.ans_title}</p>
                                <p><small></small></p>
                            </div>
                        </div>
                   )
               })
            }
        </div>
        <div className="next-btn">
             <button type="button" className="btn btn-orange"  onClick={()=>props.next(props.ques_value.answers)} >Next</button>
        </div>
       
    </>):''}</>
}

export default CardQuestionsComponent