import React, { Component } from "react";

export class StudentSection extends Component {
  state = {
    studentinfo: {},
    roll: "",
    email: "",
    branch: "",
  };

  rollChange = (e) => {
    e.preventDefault();
    this.setState({ roll: e.target.value });
  };

  emailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  branchChange = (e) => {
    e.preventDefault();
    this.setState({ branch: e.target.value });
  };

  onClick = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/data/${this.state.branch}/singlestudent?roll=${this.state.roll}&email=${this.state.email}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ studentinfo: res.data[0] }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Roll
            <input
              type="text"
              value={this.state.roll}
              onChange={this.rollChange}
            />
          </label>
          <label>
            branch
            <input
              type="text"
              value={this.state.branch}
              onChange={this.branchChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={this.state.email.toString()}
              onChange={this.emailChange}
            />
          </label>

          <input type="submit" value="Submit" onClick={this.onClick} />
        </form>

        <div>
          <tbody>
            <tr>
              <td style={{ padding: "10px" }}>{this.state.studentinfo.roll}</td>
              <td style={{ padding: "10px" }}>{this.state.studentinfo.name}</td>
              <td style={{ padding: "10px" }}>{this.state.studentinfo.cls}</td>
              <td style={{ padding: "10px" }}>
                {this.state.studentinfo.birthdate}
              </td>
              <td style={{ padding: "10px" }}>
                {this.state.studentinfo.email}
              </td>
              <td style={{ padding: "10px" }}>
                {this.state.studentinfo.contact}
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    );
  }
}

export default StudentSection;
