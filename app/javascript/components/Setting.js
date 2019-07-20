import React from "react"
import PropTypes from "prop-types"
class Setting extends React.Component {
  constructor(props) {
    super(props);
  }
  handleToProfilePage = () => {
    this.props.history.push('/apps')
  }
  render () {
    return (
      <React.Fragment>
        <div>
          <button onClick={() => { this.handleToProfilePage(); }}>
            <i class="material-icons">account_circle</i>
          </button>
          <h1>Setting...</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Setting
