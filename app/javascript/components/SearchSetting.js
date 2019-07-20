import React from "react"
import PropTypes from "prop-types"
import Search from "./Search";

class SearchSetting extends React.Component {
  constructor(props){
    super(props);
  }
  handleToProfilePage = () => {
    this.props.history.push('/apps')
  }
  render () {
    return (
      <React.Fragment>
        <div class='apps_header'>
          <button onClick={() => { this.handleToProfilePage(); }}>
            <i class="material-icons">account_circle</i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchSetting
