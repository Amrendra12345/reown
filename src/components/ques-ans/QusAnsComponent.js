import React, {useContext, useEffect, useState} from 'react'
import CardQuestionsComponent from "@/components/ques-ans/card-questions.component";
import DropdownQuestionsComponent from "@/components/ques-ans/dropdown-questions.component";
import InputNumberQuestionsComponent from "@/components/ques-ans/input-number-questions.component";
import {QuestionAnswersContext} from "@/context/question-answers.context";
import VariantImageSpecsComponent from "@/components/ques-ans/VariantImageSpecsComponent";
import QcSoftwareComponent from "@/components/ques-ans/auto-qc.component";
import DeviceValueComponent from "@/components/ques-ans/DeviceValueComponent";
import {isAppleHiddenQuestion} from "@/components/ques-ans/apple-section-details";

const QusAnsComponent = (props) => {
    const {activeSection, setActiveSection, sectionsList, setSectionsList, setsDisplayStatus, setSetsDisplayStatus, childParent, setChildParent, answersSet, quoteGenerated, setVariantSlug, setExchangeMethod} = useContext(QuestionAnswersContext)
    const [autoQC, setAutoQC] = useState(false)

    useEffect(()=>{
        let sections = []
        let sets_display_status = {}
        let child_parent_new = {};
        props.question_answer_sets.map(function(question_set){
            sets_display_status[question_set.set_name] = true
            question_set.set_value.map(function(question){
                sections.push(question.ques_name)
                child_parent_new[question.ques_name] = question_set.set_name
            })
        })
        setSectionsList(sections)
        setSetsDisplayStatus(sets_display_status)
        setChildParent(child_parent_new)
        setVariantSlug(props.variant_slug)
        setExchangeMethod(props.exchange_method)
    }, [])

    /**
     * set display true/false to section before maxSection
     */
    const skipSection = (sets_display_status, maxSection) => {
        let new_display_status = Object.assign({}, sets_display_status)
        props.question_answer_sets.map(function(question_set){
            question_set.set_value.map(function(question){
                if(sectionsList.indexOf(question['ques_name']) <= maxSection){
                    question.ques_value.answers.map(function(answer){
                        if(answer['child_ques_name']){
                            if (answer['child_ques_rule'] == 'checked') {
                                if (!(answersSet[answer['ans_param_name']] && answersSet[answer['ans_param_name']] == answer['ans_param_value'])) {
                                    new_display_status[answer['child_ques_name']] = false;
                                    setSetsDisplayStatus(new_display_status)
                                }
                            }else{
                                if (!(!answersSet[answer['ans_param_name']] || answersSet[answer['ans_param_name']] != answer['ans_param_value'])){
                                    new_display_status[answer['child_ques_name']] = false;
                                    setSetsDisplayStatus(new_display_status)
                                }
                            }
                        }
                    })
                }
            })
        })
        return new_display_status;
    }

    /**
     * set display true to all sections after maxSection
     * set display true/false to section before maxSection
     */
    const resetSkipSection =(sets_display_status, maxSection)=>{
        let new_display_status = Object.assign({}, sets_display_status)
        props.question_answer_sets.map(function(question_set){
            question_set.set_value.map(function(question){
                question.ques_value.answers.map(function(answer){
                    if(answer['child_ques_name']){
                        new_display_status[answer['child_ques_name']] = true
                    }
                })
            })
        })
        setSetsDisplayStatus(new_display_status)
        return skipSection(new_display_status, maxSection)
    }

    /**
     * Function to handle next button click
     */
    const handleNext = (answers) => {
        let sets_display_status = skipSection(setsDisplayStatus, activeSection)
        for(let i=0;i<answers.length;i++){
            if(!isAppleHiddenQuestion(answers[i]) && answers[i]['ans_required'] && !answersSet[answers[i]['ans_param_name']]){
                return
            }
        }
        if(activeSection < sectionsList.length-1){
            let counter = 1
            while(sectionsList[activeSection + counter] && sets_display_status[childParent[sectionsList[activeSection + counter]]]==false)
                counter++
            setActiveSection(activeSection + counter)
        }
    }

    /**
     * Function to handle back button click
     */
    const handleBack = () => {
        let sets_display_status = skipSection(setsDisplayStatus, activeSection)
        if(activeSection > 0){
            let counter = 1
            while(sectionsList[activeSection - counter] && sets_display_status[childParent[sectionsList[activeSection - counter]]]==false)
                counter++
            setActiveSection(activeSection-counter)
            resetSkipSection(sets_display_status, activeSection-counter)
        }
    }

    /**
     * Toggle auto qc
     */
    const toggleAutoQc = () => {
        setAutoQC(!autoQC)
    }
        
    return (
      <>
            {
            
          !quoteGenerated?<>{!autoQC?<div className="row questions">
                  <div className='col-Left'>
                      <VariantImageSpecsComponent {...props.variant_details}/>
                  </div>
                  <div className='col-Right'>
                      {
                          props.question_answer_sets.map(function(question_set){
                              return (!setsDisplayStatus[question_set.set_name] || setsDisplayStatus[question_set.set_name]==true)?(<div key={question_set.set_name} className={`${question_set.set_name}`}>
                                      {
                                          question_set.set_value.map(function(question){
                                              switch(question.ques_value.ques_type){
                                                  case 'cards': return <CardQuestionsComponent {...question} next = {handleNext} back={handleBack} key={question.ques_name}/>
                                                  case 'dropdown': return <DropdownQuestionsComponent {...question} next = {handleNext} back={handleBack} toggleAutoQc={toggleAutoQc} key={question.ques_name}/>
                                                  case 'input-number': return <InputNumberQuestionsComponent {...question} next = {handleNext} back={handleBack} key={question.ques_name}/>
                                                  default: return <div></div>
                                              }
                                          })
                                      }</div>
                              ):''})
                      }
                  </div>
              
          </div>:<>
              <QcSoftwareComponent toggleAutoQC={toggleAutoQc} variant_slug={props.variant_slug}/>
          </>}</>:(<div className='row deviceReport'>
                        <div className='col-Left'>
                          <VariantImageSpecsComponent {...props.variant_details} device_report={quoteGenerated.device_report}/>
                        </div>                      
                      <div className='col-Right'>
                          <DeviceValueComponent/>
                      </div>
          </div>)
      }
      </>
  )
}

export default QusAnsComponent