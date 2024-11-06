import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import React, {useContext, useEffect, useState} from "react";
import {QuestionAnswersContext} from "@/context/question-answers.context";
import {checkForAppleLaptop} from "@/frontend-libs/helpers";
import {displayAppleSections,appleSectionDefaultValue, isAppleHiddenQuestion} from "@/components/ques-ans/apple-section-details";
import Selectbox from "@/frontend-libs/selectbox";
import Select from 'react-select'
const DropdownQuestionsComponent = (props) => {
    const [selectedOptions, setSelectedOptions] = useState();
    const {answersSet, setAnswerSet, activeSection, sectionsList, autoQCData} = useContext(QuestionAnswersContext)

    const [disableNext, setDisableNext] = useState(false);    
    useEffect(()=>{      
        for(let i = 0; i< props.ques_value.answers.length; i++)
            if(props.ques_value.answers[i]['ans_required'] && !answersSet[props.ques_value.answers[i]['ans_param_name']])
            {
                if(!isAppleHiddenQuestion(props.ques_value.answers[i])){
                    setDisableNext(true)
                    return
                }
            }
        setDisableNext(false)
    },[answersSet])

    const handleSelect = (ans_param_value, ans_param_name) => { 
        let answersSetNew = Object.assign({}, answersSet);
        answersSetNew[ans_param_name] = ans_param_value
        setAnswerSet(answersSetNew)
    }


   

    
    return (
      <>
          {
              sectionsList[activeSection]==props.ques_name?(<>
                    <div className='pageTitle mt-0'>
                        <p>ANSWER FEW QUESTIONS</p>
                      {activeSection>0?<button type='button' className="btn-back" onClick={props.back}></button>
                          :''}
                    </div>
                    
                    <div className='form-group'>
                        <div className='form-group__input'>
                        </div>
                      <div className='form-group__input'>
                          <button type='button' className="btn btn-orange w-100" onClick={props.toggleAutoQc}>Auto Detect My PC Qc</button>
                      </div>
                  </div>
                  {props.ques_value.answers.map(function(answer){
                      if(!isAppleHiddenQuestion(answer))
                          return <div className='form-group' key={answer.ans_id}>
                              <div className='form-group__input'>
                                  <p className='mb-0'>{answer.ans_title}</p>
                                  <p className='text-muted mb-0'>{answer.ans_description}</p>
                              </div>
                              <div className='form-group__input'>
                                  {
                                     (autoQCData && location.href.search(autoQCData.variant_slug) != -1 && autoQCData[answer.ans_param_name]) ? (<input className='form-control' type="text" value={answersSet[answer.ans_param_name] ?? ''} readOnly />) : (  
                                        <>
                                            {/* <Select options={
                                                answer.ans_param_value.split(',').map((option)=>{
                                                    return{
                                                        label:option, value:option 
                                                    }
                                                })
                                            }
                                            onChange={(event) => handleSelect(event.value, answer.ans_param_name)}
                                            /> */}



                                              {/* {  checkForAppleLaptop() ? (displayAppleSections(answer)):(
                                                <Selectbox options={
                                                    answer.ans_param_value.split(',').map(function(option){
                                                        return {
                                                            label:option, value:option
                                                        }
                                                    })
                                                } value={ 
                                                    {label : answer.ans_param_value.split(',')[0]??''}
                                                    }
                                                    ans_param_name={answer.ans_param_name}
                                                    onChangeHandler={(event) => handleSelect(event.value, answer.ans_param_name}
                                                /> 
                                              )
                                            }  */}
                                             
                                            <Selectbox 
                                                options ={
                                                    checkForAppleLaptop() ? (displayAppleSections(answer)):(
                                                        answer.ans_param_value.split(',').map(function(option){
                                                            return {
                                                                label:option, value:option
                                                            }
                                                        })
                                                    )
                                                }  
                                                defaultValue = {
                                                    checkForAppleLaptop() ? (appleSectionDefaultValue(answer)):
                                                    (answer.ans_param_value.split(',')[0]??'')
                                                }                                
                                                isSearchable={true}
                                                onChangeHandler={(event) => handleSelect(event.value, answer.ans_param_name)}
                                            />
                                           

                                        </>
                                     )
                                   }
                                      
                              </div>                              
                          </div>
                      else
                          return ''

                  })}
                  <div className='next-btn'>
                      <button type='button' className={`btn btn-orange ${disableNext? "disabled_next":''}`} onClick={()=>props.next(props.ques_value.answers)}>Next</button>
                    
                  </div>
              </>):''
          }
    </>
  )
}

export default DropdownQuestionsComponent;