import React, { Component } from "react";
import "./app.css";

class Landing extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/forms/get')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ data: data })
    })
    .catch((err) => console.log(err))
  }

  render() {
    if(this.state.data.data != null)
      return (
        <div>
          <br></br>
          <table id='responses'>
            <tbody>
              <tr>
                <th key='userName'> User Name </th>
                {
                  this.state.data.data[0].totalResponse.map((questions, i) => {
                    return (
                      <th key={questions.identifier}>{questions.headline.toUpperCase()}</th>
                    )
                  })
                }
              </tr>
              {
                this.state.data.data.map((response, i) => {
                  return (
                  <tr key={response._id}>
                    <td>{response.submittedByName}</td>
                    {
                      response.totalResponse.map((data, j) => {
                        return (
                          <td>{(data.answer)? data.answer: "-"}</td>
                        )
                      })
                    }
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      );
    else{
      return (
        <div>

        </div>
      )
    }
  }
}
export default Landing;