import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom';
import { Router, Redirect, Route, Switch } from 'react-router';

import Upload from './Upload';
import Setting from './Setting';
import Edit from './Edit';
import ProfilePage from './ProfilePage';

// const store = createStore(
//   reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

class App extends React.Component {

  render () {
    this.csrf_token = this.props.csrf_token
    this.user_photo = this.props.user_photo
    this.user_name = this.props.user_name;
    this.photo_id = this.props.photo_id;
    this.user_profile = this.props.user_profile;
    this.user_birth = this.props.user_birth;
    this.user_job = this.props.user_job;
    this.user_personality = this.props.user_personality;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/apps' 
            render={props => <ProfilePage user_photo={this.user_photo} user_name={this.user_name} photo_id={this.photo_id} user_profile={this.user_profile} {...props} />}
          />
          <Route exact path='/apps/upload' 
            render={props => <Upload csrf_token={this.csrf_token} {...props} />}
          />
          <Route exact path='/apps/setting' component={Setting}/>
          <Route exact path='/apps/edit' 
            render={props => <Edit csrf_token={this.csrf_token} 
            user_nickname={this.user_name} user_birth={this.user_birth} user_job={this.user_job} 
            user_personality={this.user_personality} user_profile={this.user_profile}
            {...props} />}
          />
          {/* <Route exact component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App
