import React, { Component } from 'react';
import CurrentUser from './current-user';
import SignIn from './sign-in';
import SignOut from './sign-out';

import { auth } from '../../services/firebase-service';
import { connect } from 'react-redux';
import { userAuthenticated } from '../../actions';

import './auth.css'

class Auth extends Component {

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.props.userAuthenticated(currentUser);
    });
  }

  render() {
    const { currentUser } = this.props;
    console.log("USER", currentUser);
    return (
      <div>
       {!currentUser && <SignIn />}
       {currentUser && <div><CurrentUser user={currentUser}/><SignOut /></div>}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};

const mapDispatchToProps = {
    userAuthenticated
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
