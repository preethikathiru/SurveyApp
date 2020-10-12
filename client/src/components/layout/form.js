import React from "react";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import * as data from "./data.json";

class XForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      //text
      handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
     }
     //radio
     handlevalue(i, event) {
      let values = [...this.state.values];
      values[i] = event;
      this.setState({ values });
   }

   handleSubmit(event) {
       alert('submitted values'+this.state.values.join(','));
       event.preventDefault();
    }
  render() {
    return (
      <div>
        <h4>Form: {data.questionnaire.name} </h4>
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <p>
            <b>Decsription - {data.questionnaire.description}</b>
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          {data.questionnaire.questions.map((question, i) => {
            if (
              question.question_type === "text" &&
              question.multiline === "false"
            ) {
              return (
                <div>
                  <label
                    for={question.identifier}
                    style={{
                      fontSize: "1rem",
                      color: "blue",
                      fontStyle: "oblique",
                    }}
                  >
                    {question.headline}
                  </label>
                  <p>{question.description ? question.description : ""}</p>
                  <input
                    type="text"
                    style={{ width: "25rem" }}
                    id={question.identifier}
                    name={question.identifier}
                    placeholder="Type your answer"
                    onChange={this.handleChange.bind(this, i)}
                  />
                </div>
              );
            } else if (
              question.question_type === "text" &&
              question.multiline === "true"
            ) {
              return (
                <div>
                  <label
                    for={question.identifier}
                    style={{ fontSize: "1rem", color: "blue" }}
                  >
                    {question.headline}
                  </label>
                  <p>{question.description ? question.description : ""}</p>
                  <textarea
                    style={{ width: "25rem", height: "10rem" }}
                    id={question.identifier}
                    name={question.identifier}
                    placeholder="Type your answer"
                    onChange={this.handleChange.bind(this, i)}
                  />
                </div>
              );
            } else if (
              question.question_type === "multiple-choice" &&
              question.multiple === "false"
            ) {
              return (
                <div>
                  <label
                    for={question.identifier}
                    style={{ fontSize: "1rem", color: "blue" }}
                  >
                    {question.headline}
                  </label>
                  <p>{question.description ? question.description : ""}</p>
                  <RadioGroup onChange={this.handlevalue.bind(this, i)} style={{ width: "25rem",margin:"auto" }} >
                    {question.choices.map((choice, j) => {
                      return (
                        <RadioButton value={choice.value} key={j} 
                        style={{ width: "2rem", height: "1rem" }} >
                          {choice.value}
                        </RadioButton>
                      );
                    })}
                  </RadioGroup>
                </div>
              );
            } 
            //checkbox
          })}
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "110px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default XForm;
