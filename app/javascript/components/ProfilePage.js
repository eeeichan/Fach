import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Upload from './Upload';
import Setting from './Setting';
import Edit from './Edit';

class ProfilePage extends React.Component {
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
                <Navbar /><hr/>
                <Route path='/Upload' component={Upload}/>
                <Route path='/Setting' component={Setting}/>
                <Route path='/Edit' component={Edit}/>
              </Router>
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
