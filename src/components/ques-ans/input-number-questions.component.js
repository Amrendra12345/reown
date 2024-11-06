import {FaRegArrowAltCircleLeft} from "react-icons/fa";
import React, {useContext} from "react";
import {QuestionAnswersContext} from "@/context/question-answers.context";
import VerifyUserComponent from "@/components/ques-ans/verify-user.component";
import { Button, Col, Form, Row } from "react-bootstrap";

const InputNumberQuestionsComponent = (props) => {

    const {activeSection, sectionsList} = useContext(QuestionAnswersContext)

    return ( sectionsList[activeSection]==props.ques_name?
        <>{
            (props.ques_name == 'Enter your mobile number')?<VerifyUserComponent {...props}/>:(<div className="cards">
                
                        {activeSection>0?<h6 className={styles.title}><span> ANSWER FEW QUESTIONS </span>
                            <button type='button'  className="btn-back" onClick={props.back}></button>
                        </h6>:''}
                
                {props.ques_value.answers.map(function(answer){
                        return <Row className='mt-3' key={answer}>
                            <Col md={7}>
                                <p className='mb-0'>{answer.ans_title}</p>
                                <p className='text-muted mb-0'>{answer.ans_description}</p>
                            </Col>
                            <Col md={5}>
                                <Row>
                                    <Col>
                                        <Form.Control type="text" />
                                    </Col>
                                </Row>
                            </Col>
                    </Row>
                        
                        }
                   )
                }
                <Row className='mt-4'>
                    <Col className='ps-3'>
                        <Button type='button' className={styles.btn} variant='danger' onclick={()=>props.next(props.ques_value.answers)}>Next</Button>
                    </Col>
                </Row>
            </div>)
        }
        </>:''
    )

}


export default InputNumberQuestionsComponent