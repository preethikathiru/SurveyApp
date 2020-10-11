import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import './app.css';

class Table extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  constructor(props) {
     super(props)
     this.state = {
      //   students: [
      //      { id: 1, name: 'Wasiffgeywfbyertebereytrerereqwyedwtqiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', age: 21, email: 'wasif@email.com' },
      //      { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
      //      { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
      //      { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
      //   ]
      "data": [
         {
             "_id": "5f80738feb9a75309454b790",
             "students": [
                 {
                     "headline": "Möchtest Du bei einem Schadensfall einen Teil selbst bezahlen?",
                     "description": "",
                     "answer": "Nein",
                     "_id": "5f80738feb9a75309454b791",
                     "identifier": "list_12110965"
                 },
                 {
                     "headline": "Hast Du aktuell schon eine Privathaftpflichtversicherung?",
                     "description": "",
                     "answer": "Ja",
                     "_id": "5f80738feb9a75309454b792",
                     "identifier": "list_12111717"
                 }
             ],
             "submittedBy": "5f7eecae6913ea59dc2ac771",
             "submittedByName": "preethi",
             "date": "2020-10-09T14:28:31.255Z",
             "__v": 0
         }
     ]
 
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.data[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.data.map((data, index) => {
        const { _id, headline, submittedBy, students, submittedByName,date } = data //destructuring
        return (
           <tr key={_id}>
              <td>{_id}</td>
              <td>{headline}</td>
              <td>{submittedBy}</td>
              <td>{submittedByName}</td>
              <td>{date}</td>
           </tr>
        )
     })
  }

  render() {
    const { user } = this.props.auth;

     return (
       
        <div>
           <h1 id='title'>React Dynamic Table</h1>
           <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a tr full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}
Table.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Table);
//export default Table;







// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// class Dashboard extends Component {
//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };
// render() {
//     const { user } = this.props.auth;
// return (
//       <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <h4>
//               <b>Hey there,</b> {user.name.split(" ")[0]}
//               <p className="flow-text grey-text text-darken-1">
//                 You are logged into a tr full-stack{" "}
//                 <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
//               </p>
//             </h4>
//             <button
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px",
//                 marginTop: "1rem"
//               }}
//               onClick={this.onLogoutClick}
//               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth
// });
// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);