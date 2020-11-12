import React, { Component } from "react";

export class DelData extends Component {
  state = {
    roll: "",
  };

  delData = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/data/${this.props.branch}/delete?roll=${this.state.roll}`
    )
      .then(this.props.getData).then(`student ${this.state.roll} deleted`)
      .catch((err) => console.log(err));
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ roll: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>delete data</h3>
        <form>
          <label>
            Roll
            <input
              type="text"
              value={this.state.roll}
              onChange={this.onChange}
            />
          </label>
          <input type="submit" value="SUbmit" onClick={this.delData} />
        </form>
      </div>
    );
  }
}

export default DelData;
