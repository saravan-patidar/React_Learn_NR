import React from "react";
class About extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    // console.log("First child");
  }
  componentDidMount() {
    console.log("componenet did mount");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div style={this.props.align}>
        <h1>About us </h1>
        <p>
          I am student , I recently Graduated B.Tech degree(IT) from SVCE . I am
          also a webdeveloper .
        </p>
      </div>
    );
  }
}
export default About;
