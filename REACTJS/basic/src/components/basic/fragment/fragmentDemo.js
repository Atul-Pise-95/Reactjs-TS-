import React, { Component, Fragment } from "react";
class FragmentDemo extends Component {
  render() {
    return (
      // <div style={{backgroundColor:"cyan",padding:20}}>
      //     <h1>Toppers Skills</h1> <p>Aqure Genuine Knowledge!</p>
      // </div>
      //     <Fragment>
      //     <h1>Toppers Skills</h1> <p>Aqure Genuine Knowledge!</p>
      // </Fragment>
      <>
        <h1>Toppers Skills</h1> <p>Aqure Genuine Knowledge!</p>
      </>
    );
  }
}

export default FragmentDemo;
