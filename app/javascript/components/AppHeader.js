import React from "react"
import PropTypes from "prop-types"


class AppHeader extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div class="app_header col s1">
          <a href="/apps">
            <button>
              <i class="material-icons">account_circle</i>
            </button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default AppHeader
