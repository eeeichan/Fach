import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom';
import { Router, Redirect, Route, Switch } from 'react-router';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

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
    this.user_name = this.props.user_name;
    this.photo_id = this.props.photo_id;
    this.user_profile = this.props.user_profile;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/apps/index' 
            render={props => <ProfilePage user_name={this.user_name} photo_id={this.photo_id} user_profile={this.user_profile} {...props} />}
          />
          <Route exact path='/apps/Upload' component={Upload}/>
          <Route exact path='/apps/Setting' component={Setting}/>
          <Route exact path='/apps/Edit' component={Edit}/>
          {/* <Route exact component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App
