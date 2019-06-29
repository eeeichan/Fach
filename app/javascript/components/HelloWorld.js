import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Users/index</h3>
        <h4>It is {new Date().toLocaleTimeString()}.</h4>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
}

export default HelloWorld
