import React from "react"
import PropTypes from "prop-types"

import { Link } from 'react-router-dom';


const path = location.pathname ;

class ProfilePage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      session_flg: true
    };
  }
  flgFunc() {
    this.setState({ session_flg: false });
  }
  handleToAboutPage = () => {
    this.props.history.push('/apps/Edit')
  }

  render () {
    return (
      <React.Fragment>
        <div class='row'>
          <div class='col s3'></div>
            <div class='profile_body col s6 m6'>
              <div class='profile_photo'>
                {this.props.photo_id}
              </div>
              <h4>{this.props.user_name}</h4>
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
              <div class='profile_info'>
                {this.props.user_profile}
              </div>
            </div>
          <div class='col s3'></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfilePage
