import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../services/firebase-service';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign In
        </button>
      </div>
    );
  }
}

export default SignIn;
