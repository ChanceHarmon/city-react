import React from 'react';

class Error extends React.Component {
  render() {
    console.log(this.props.handleError)
    return (
      <>
        <h2>Server Error</h2>
        <p>{this.props.handleError.message}</p>
      </>
    )
  }
}

export default Error;