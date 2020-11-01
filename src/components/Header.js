import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/student">STUDENT</Link> | <Link to="/teacher">TEACHERS</Link>
      </header>
    );
  }
}

export default Header;
