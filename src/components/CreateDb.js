import React, { Component } from "react";

export class CreateDb extends Component {
  state = {
    branch: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ branch: e.target.value });
  };

  createDb = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/createdb`)
      .then(console.log("database created"))
      .catch((err) => console.log(err));
  };

  createBranch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/createtable/${this.state.branch}`)
      .then(console.log(`branch ${this.state.branch} is created`),alert(`branch ${this.state.branch} is created`))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* <form>
          <label>Create Database</label>
          <input type="submit" value="Create" onClick={this.createDb} />
        </form> */}
        <form>
          <label>
            Create Branch
            <input
              type="text"
              value={this.state.branch}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="Create" onClick={this.createBranch} />
        </form>
      </div>
    );
  }
}

export default CreateDb;
