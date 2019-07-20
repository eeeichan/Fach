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
  handleToEditPage = () => {
    this.props.history.push('/apps/edit')
  }
  handleToUploadPage = () => {
    this.props.history.push('/apps/upload')
  }
  handleToSettingPage = () => {
    this.props.history.push('/apps/setting')
  }
  handleToSearchSetting = () => {
    this.props.history.push('/apps/search/setting')
  }
  handleToSearch = () => {
    this.props.history.push('/apps/search')
  }

  render () {
    return (
      <React.Fragment>
        <div class='apps_header'>
          <button onClick={() => { this.handleToSearch(); }}>
            <i class="material-icons">search</i>
          </button>
        </div>
        <div class='row'>
          <div class='col s3'></div>
            <div class='profile_body col s6 m6'>
              <div class='profile_photo'>
                <img src={this.props.user_photo} width='200' height='200'></img>
              </div>
              <h4>{this.props.user_name}</h4>
              <div class='row'>
                <div class='setting col s3'>
                  <button onClick={() => { this.handleToSettingPage(); }}>
                    <i class="material-icons">settings</i>
                  </button>
                  <p>設定</p>
                </div>
                <div class='setting col s3'>
                  <button onClick={() => { this.handleToSearchSetting(); }}>
                    <i class="material-icons">description</i>
                  </button>
                  <p>検索設定</p>
                </div>
                <div class='upload col s3'>
                  <button onClick={() => { this.handleToUploadPage(); }}>
                    <i class="material-icons">add_circle_outline</i>
                  </button>
                  <p>画像を追加する</p>
                </div>
                <div class='user_edit col s3'>
                  <button onClick={() => { this.handleToEditPage(); }}>
                    <i class="material-icons">edit</i>
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
