import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import ProfileScreen from './ProfileScreen';

const firebaseApp = firebase.initializeApp(firebaseConfig);


console.log(firebaseApp);

class SignIn extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    var profile;

    if(user){ //if there is a sign in
      if((user.email).includes('.northwestern.edu')){ //if the user has an NU email
        profile = ( //actually sign in
        <div>
          {ProfileScreen}
        </div>
        );
      }
      else{
        profile = ( //if it's another email domain, don't sign in
          <div>
            <p>{signOut}</p>
            <p>Please Use Your Northwestern Email</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        );
      }
    }
    else{ //if there's no sign in, show sign in button
      profile = (
      <div>
        <p>Please Sign In</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
      );
    }

    return (
      <div>
        {profile}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);