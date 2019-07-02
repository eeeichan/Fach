import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Upload from './Upload';
import Setting from './Setting';
import Edit from './Edit';

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
              <Router>
                <Navbar  dataFlg={() => { this.flgFunc(); }}/><hr/>
                <Route path='/app/Upload' component={Upload}/>
                <Route path='/app/Setting' component={Setting}/>
                <Route path='/app/Edit' component={Edit}/>
              </Router>
            </div>
            {
              (() => {
                if (this.state.session_flg === true){
                  console.log(path);
                  console.log(this.state.session_flg);
                  return <Comments />                  
                }
              })()
            }
          </div>
          <div class='col s3'></div>
        </div>
      </React.Fragment>
    );
  }
}
class Comments extends React.Component {
  render() {
    return (
      <React.Fragment>
                    <div class='profile_info'>
              {this.props.user_profile}
            </div>
      </React.Fragment>
    );
  }
}

export default ProfilePage
