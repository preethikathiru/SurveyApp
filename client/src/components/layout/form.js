import React from "react";
import * as data from './data.json';

class XForm extends React.Component {
    render(){
        return (
            <div>
                <h4>Form - {data.questionnaire.name} </h4>
                <p> Decsription - {data.questionnaire.description} </p>
                <form>{
                    data.questionnaire.questions.map((question, i) => {
                        if(question.question_type === "text" && question.multiline === "false"){
                            return(
                                <div>
                                    <label for={ question.identifier }>{ question.headline }</label>
                                    <p>{ question.description? question.description : ""}</p>
                                    <input type="text" id={ question.identifier } name={ question.identifier } placeholder="Type your answer"/>
                                </div>
                            );
                        }else if(question.question_type === "text" && question.multiline === "true"){
                            return(
                                <div>
                                    <label for={ question.identifier }>{ question.headline }</label>
                                    <p>{ question.description? question.description : ""}</p>
                                    <textarea id={ question.identifier } name={ question.identifier } placeholder="Type your answer"/>
                                </div>
                            );
                        }else if(question.question_type === "multiple-choice" && question.multiple === "false"){
                            return(
                                <div>
                                    <label for={ question.identifier }>{ question.headline }</label>
                                    <p>{ question.description? question.description : ""}</p>
                                    {
                                        question.choices.map((choice, j) => {
                                            return(
                                            <div>
                                                <input type="radio" checked={(choice.checked === "true")} value={choice.value}/> {choice.value}
                                            </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        }else if(question.question_type === "multiple-choice" && question.multiple === "true"){
                            return(
                                <div>
                                    <label for={ question.identifier }>{ question.headline }</label>
                                    <p>{ question.description? question.description : ""}</p>
                                    {
                                        question.choices.map((choice, j) => {
                                            return(
                                            <div>
                                                <input type="checkbox" checked={(choice.checked === "true")} value={choice.value}/> {choice.value}
                                            </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        }
                    })
                    
                    
                }
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "110px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "2rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  SUBMIT
                </button>
              
              </div></form>
            </div>
        )
    }
}

export default XForm;
