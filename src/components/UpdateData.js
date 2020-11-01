import React, { Component } from "react";

export class UpdateData extends Component {
  state = {
    roll: "",
    student: {},
  };

  rollChange = (e) => {
    this.setState({
      student: { ...this.state.student, roll: e.target.value },
    });
    e.preventDefault();
  };

  rollChanges = (e) => {
    this.setState({
      roll: e.target.value,
    });
    e.preventDefault();
  };

  nameChange = (e) => {
    this.setState({
      student: { ...this.state.student, name: e.target.value },
    });
    e.preventDefault();
  };

  clsChange = (e) => {
    this.setState({
      student: { ...this.state.student, cls: e.target.value },
    });
    e.preventDefault();
  };

  birthdateChange = (e) => {
    this.setState({
      student: { ...this.state.student, birthdate: e.target.value },
    });
    e.preventDefault();
  };

  emailChange = (e) => {
    this.setState({
      student: { ...this.state.student, email: e.target.value },
    });
    e.preventDefault();
  };

  contactChange = (e) => {
    this.setState({
      student: { ...this.state.student, contact: e.target.value },
    });
    e.preventDefault();
  };

  addData = (e) => {
    fetch(
      `http://localhost:4000/data/${this.props.branch}/update?roll=${this.state.roll}&name=${this.state.student.name}&cls=${this.state.student.cls}&birthday=${this.state.student.birthdate}&email=${this.state.student.email}&contact=${this.state.student.contact}`
    )
      .then(this.props.getData)
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  getSingleData = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/data/${this.props.branch}/single?roll=${this.state.roll}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ student: res.data[0] }));
  };

  render() {
    return (
      <div>
        <h3>Update data</h3>
        <form>
          <label>
            Enter roll to update
            <input
              type="text"
              value={this.state.roll}
              onChange={this.rollChanges}
            />
          </label>
          <input type="submit" value="Enter" onClick={this.getSingleData} />
        </form>
        <form>
          <label>
            name
            <input
              type="text"
              value={this.state.student.name}
              onChange={this.nameChange}
            />
          </label>
          <label>
            class
            <input
              type="text"
              value={this.state.student.cls}
              onChange={this.clsChange}
            />
          </label>
          <label>
            birthdate
            <input
              type="date"
              value={this.state.student.birthdate}
              onChange={this.birthdateChange}
            />
          </label>
          <label>
            email
            <input
              type="email"
              value={this.state.student.email}
              onChange={this.emailChange}
            />
          </label>
          <label>
            contact
            <input
              type="text"
              value={this.state.student.contact}
              onChange={this.contactChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.addData} />
        </form>
      </div>
    );
  }
}

export default UpdateData;
