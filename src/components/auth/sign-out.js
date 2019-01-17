import React, { Component } from 'react';
import { auth } from '../../services/firebase-service';

class SignOut extends Component {
  render() {
    return (
      <div className="SignOut">
        <button onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
}

export default SignOut;
