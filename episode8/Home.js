import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import logo from "./Capture.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      para: {
        textAlign: "center",
        backgroundColor: "lightcoral",
        color: "black",
        padding: "4px",
        margin: "auto",
        width: "80vw",
        marginTop: "10px",
        fontSize: "20px",
      },
      center: { textAlign: "center", marginBlock: "20px" },
    };
  }

  componentDidMount() {
    const stop = setInterval(() => {
      console.log("Did mount");
    });
    console.log("componenet did mount");
  }
  componentWillUnmount() {
    clearInterval(stop);
    console.log("component will unmount");
  }
  render() {
    const { para, center } = this.state;
    return (
      <>
        <div style={center}>
          <h2>Welcome !! are you here...</h2>
          <h3>To know about 'Class Components'</h3>
          <p style={para}>
            Class components is a react normal javascript class.Class components
            is older way to create in react.Now a days we used a functional
            components.
          </p>
          <p style={para}>
            The difference b/w class and functional components are <br />
            In class component , we are class keyword to defined comp. and
            extend keyword to inherit ReactComponent. we has a redner method
            ,inside this method we return a some piece of jsx code.
            <br />
            In functional com. We declare normal js function or arrow func , and
            return some piece of Jsx code.
          </p>
          <p style={para}>
            And ,If we have send a props in class comp so we first create a
            constuctor method and pass a parameter into this method and call
            super() then we access a props.
            <br />
            we some time use super() and super(props).
          </p>
          <p>
            componentDidMount() is invoked immediately after a component is
            mounted (inserted into the tree). Initialization that requires DOM
            nodes should go here. If you need to load data from a remote
            endpoint, this is a good place to instantiate the network request.
            in this place we make a api calls.
            <img src={logo} />
          </p>
          <p>Component will UnMount is clean up function.</p>
        </div>
        <div style={(center, para)}>
          parent Constructor called
          <br />
          parent render called
          <br />
          <br />
          first child constructor
          <br />
          first child render
          <br />
          second child constructor
          <br />
          second child render
          <br />
          <br />
          frist child componentdidMount
          <br />
          second child componentdidMount
          <br />
          <br />
          parent componentdidMount
        </div>
        <About align={center} />
        <Contact align={center} />
      </>
    );
  }
}
export default Home;
