import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const ErrorScreen = this.props.fallback || DefaultErrorScreen;
    if (this.state.errorInfo) {
      return (
        <ErrorScreen
          error={this.state.error}
          errorInfo={this.state.errorInfo}
        />
      );
    }
    return this.props.children;
  }
}

function DefaultErrorScreen({ error, errorInfo }) {
  return (
    <div>
      <h2>Error!!</h2>
      <details style={{ whiteSpace: "pre-wrap" }}>
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </details>
    </div>
  );
  /* ErrorBoundary는 다음과 같은 에러는 잡아주지 않는다!
  1. Event Handler
  2. Asynchronous Code
  3. Server Side Rendering
  4. Errors that occur in the Error Boundary itself, not in the child.
  */
}
