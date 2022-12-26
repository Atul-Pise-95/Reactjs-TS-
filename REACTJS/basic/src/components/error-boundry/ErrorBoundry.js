import React, { Component } from "react";
class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }
  render() {
    return this.state.hasError ? (
      <h2 style={{ color: "red" }}>Somethindg went Wrong</h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
