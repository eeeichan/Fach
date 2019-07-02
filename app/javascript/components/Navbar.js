import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

const propTypes = {
  dataFlg: PropTypes.func,
};

class Navbar extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    dataFlg: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleToAboutPage () {
    this.props.history.push('/app/Edit')
    return this.props.dataFlg();
  }

  render () {
    return (
      <React.Fragment>

          <div class='upload col s4'>
            <button>
              <Link to='/app/Upload'><i class="material-icons">camera_enhance</i></Link>
            </button>
            <p>画像を追加する</p>
          </div>
          <div class='profile_edit col s4'>
            <button>
              <Link to='/app/Setting'><i class="material-icons">settings</i></Link>
            </button>
            <p>設定</p>
          </div>
          <div class='user_setting col s4'>
            <button onClick={() => { this.handleToAboutPage(); }}>
            <i class="material-icons">assignment_ind</i>
            </button>
            <p>情報を編集</p>
          </div>


      </React.Fragment>
    );
  }
}

Navbar.propTypes = propTypes;
export default withRouter(Navbar)
