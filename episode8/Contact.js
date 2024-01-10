import React, { useState } from "react";

class Contact extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    console.log("componenet did mount");
  }
  render() {
    return (
      <div style={this.props.align}>
        <h1> Contact Us</h1>
        <p>To touch with me..</p>
        <p>
          Github Link-
          <a href="https//github.com/saravan-patidar">Click On here!!</a>
        </p>
      </div>
    );
  }
}
export default Contact;
