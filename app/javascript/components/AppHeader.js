import React from "react"
import PropTypes from "prop-types"


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToSearchSetting = () => {
    this.props.history.push('/apps/search/setting')
  }

  render () {
    return (
      <React.Fragment>
        <div class="app_header col s1">
          <a href="/apps">
            <button>
              <i class="material-icons">account_circle</i>
            </button>
          </a>
          <button onClick={() => { this.handleToSearchSetting(); }}>
            <i class="material-icons">add_circle_outline</i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AppHeader
