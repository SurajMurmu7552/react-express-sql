import React, { Component } from "react";

export class AddData extends Component {
  state = {
    student: {
      roll: "",
      name: "",
      cls: "",
      birthdate: "",
      email: "",
      contact: "",
    },
  };

  rollChange = (e) => {
    this.setState({
      student: { ...this.state.student, roll: e.target.value },
    });
  };

  nameChange = (e) => {
    this.setState({
      student: { ...this.state.student, name: e.target.value },
    });
  };

  clsChange = (e) => {
    this.setState({
      student: { ...this.state.student, cls: e.target.value },
    });
  };

  birthdateChange = (e) => {
    this.setState({
      student: { ...this.state.student, birthdate: e.target.value },
    });
  };

  emailChange = (e) => {
    this.setState({
      student: { ...this.state.student, email: e.target.value },
    });
  };

  contactChange = (e) => {
    this.setState({
      student: { ...this.state.student, contact: e.target.value },
    });
  };

  addData = (e) => {
    fetch(
      `http://localhost:4000/data/${this.props.branch}/add?roll=${this.state.student.roll}&name=${this.state.student.name}&cls=${this.state.student.cls}&birthday=${this.state.student.birthdate}&email=${this.state.student.email}&contact=${this.state.student.contact}`
    )
      .then(this.props.getData)
      .then(alert(`student ${this.state.student.roll} created`))
      .then(this.setState({student:{
        roll: "",
        name: "",
        cls: "",
        birthdate: "",
        email: "",
        contact: "",
      }}))
      .catch((err) => console.log(err));
      e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Add data</h3>
        <form>
          <label>
            roll
            <input
              type="text"
              value={this.state.student.roll}
              onChange={this.rollChange}
            />
          </label>
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

export default AddData;
