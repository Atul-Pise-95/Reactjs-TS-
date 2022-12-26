import React, { createRef } from "react";
class ClassComp extends React.Component {
  inputRef = createRef();
  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <>
        <h2>Function Component</h2>
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}

export default ClassComp;
