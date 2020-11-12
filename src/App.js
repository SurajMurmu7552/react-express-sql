import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddData from "./components/AddData";
import UpdateData from "./components/UpdateData";
import DelData from "./components/DelData";
import StudentSection from "./components/StudentSection";
import Header from "./components/Header";
import CreateDb from "./components/CreateDb";

export class App extends Component {
  state = {
    studentinfo: [],
    branch: "",
    button: "",
  };

  branchChange = (e) => {
    this.setState({ branch: e.target.value });
  };

  getData = (e) => {
    fetch(`http://localhost:4000/data/${this.state.branch}`)
      .then((res) => res.json())
      .then((res) => this.setState({ studentinfo: res.data }));
    e.preventDefault();
  };

  readInfo = ({ roll, name, cls, birthdate, email, contact }) => {
    return (
      <div>
        <tbody>
          <tr>
            <td style={{ padding: "10px" }}>{roll}</td>
            <td style={{ padding: "10px" }}>{name}</td>
            <td style={{ padding: "10px" }}>{cls}</td>
            <td style={{ padding: "10px" }}>{birthdate}</td>
            <td style={{ padding: "10px" }}>{email}</td>
            <td style={{ padding: "10px" }}>{contact}</td>
          </tr>
        </tbody>
      </div>
    );
  };
  handleBtn = (e) => {
    e.preventDefault();
    this.setState({ button: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/">
            <CreateDb />
          </Route>
          <Route exact path="/student">
            <StudentSection branch={this.state.branch} />
          </Route>
          <Route exact path="/teacher">
            <h2>student info</h2>
            <form onSubmit={this.getData}>
              <label>
                Branch
                <input
                  type="text"
                  value={this.state.branch}
                  onChange={this.branchChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>

            <div>{this.state.studentinfo.map(this.readInfo)}</div>
            

            <AddData branch={this.state.branch} getData={this.getData} />
            <UpdateData branch={this.state.branch} getData={this.getData} />
            <DelData branch={this.state.branch} getData={this.getData} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
