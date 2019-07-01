import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
  render () {
    return (
      <React.Fragment>

          <div class='upload col s4'>
            <button>
              <Link to='/Upload'><i class="material-icons">camera_enhance</i></Link>
            </button>
            <p>画像を追加する</p>
          </div>
          <div class='profile_edit col s4'>
            <button>
              <Link to='/Setting'><i class="material-icons">settings</i></Link>
            </button>
            <p>設定</p>
          </div>
          <div class='user_setting col s4'>
            <button>
              <Link to='/Edit'><i class="material-icons">assignment_ind</i></Link>
            </button>
            <p>情報を編集</p>
          </div>


      </React.Fragment>
    );
  }
}

export default Navbar
