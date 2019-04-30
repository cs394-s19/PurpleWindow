import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import firebase from '../firebaseConfig';
import ProfileScreen from './ProfileScreen';

const firebaseAppAuth = firebase.auth();
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
          <ProfileScreen user={user} goBack={this.props.goBack} clickProfile={this.props.clickProfile} goHome={this.props.goHome}/>
        </div>
        );
      }
      else{
        profile = ( //if it's another email domain, don't sign in
          <div>
            <div className={"headerContainer"} onClick={() => this.props.goHome()}>
              <p className={"headerText"}>Purple Window</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className={"messageText"}>Please Use Your Northwestern Email</p>
              <button className={"signInButton"} onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
          </div>
        );
      }
    }
    else{ //if there's no sign in, show sign in button
      profile = (
      <div>
        <div className={"headerContainer"} onClick={() => this.props.goHome()}>
          <p className={"headerText"}>Purple Window</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <p className={"messageText"}>Please Sign In</p>
          <button className={"signInButton"} onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
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

console.log(firebase);

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);
