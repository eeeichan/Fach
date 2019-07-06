import React from "react"
import PropTypes from "prop-types"
import { Router, Route, browserHistory, Link } from 'react-router';
import { render } from 'react-dom';
import Edit from './Edit';
import App from './App';

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

  handleToAboutPage = () => {
    this.props.history.push('/app/Edit')
    return this.props.dataFlg();
  }

  render () {
    return (
      <React.Fragment>
              <div class='row'>
                  <div class='upload col s4'>
                    <Link to='/apps/Upload'><button>
                      <i class="material-icons">assignment_ind</i>
                    </button></Link>
                    <p>画像を追加する</p>
                  </div>
                  <div class='profile_edit col s4'>
                    <Link to='/apps/Setting'><button>
                      <i class="material-icons">assignment_ind</i>
                    </button></Link>
                    <p>設定</p>
                  </div>
                  <div class='user_setting col s4'>
                    <button onClick={() => { this.handleToAboutPage(); }}>
                      <i class="material-icons">assignment_ind</i>
                    </button>
                    <p>情報を編集</p>
                  </div>
              </div>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = propTypes;
export default Navbar
