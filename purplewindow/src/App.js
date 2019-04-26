import React, {Component} from 'react';
import HomeScreen from './components/HomeScreen';
import JobScreen from './components/JobScreen';
import ReviewForm from './components/ReviewForm';
import ProfileScreen from './components/ProfileScreen';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD26AQhzl73lJeBzGZ4EsSOKcpICv2FA1o",
    authDomain: "purplewindow-3acf0.firebaseapp.com",
    databaseURL: "https://purplewindow-3acf0.firebaseio.com",
    projectId: "purplewindow-3acf0",
    storageBucket: "purplewindow-3acf0.appspot.com",
    messagingSenderId: "794968149806"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
// const ref = db.ref("purplewindow-3acf0");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
      currentSelectedJob: {},
      currentJobNo: 0,
      jobs: [],
      user: null, // assume user has properties name (str), email (str), img (str), and arrays for jobs
    }
  }

  componentDidMount() {
    var ref = firebase.app().database().ref();
    var jobRef = ref.child('jobs');

    var jobs = [];
    jobRef.once("value", (snapshot) => {
      snapshot.forEach(function(child) {
        var job = child.val();
        jobs.push(job);
      });
      this.setState({ jobs: jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  selectJob = (num, job) => {
    this.setState({currentPageIndex: 1, currentSelectedJob: job, currentJobNo: num});
  }

  selectReviewJob = (job) => {
      this.setState({currentPageIndex: 2, currentSelectedJob: job});
  }

    goBack = () => {
        this.setState({currentPageIndex: this.state.currentPageIndex - 1});
    }

    goHome = () => {
      this.setState({currentPageIndex: 0});
    }

    clickProfile = () => {
        this.setState({currentPageIndex: 3});
    }
    
    identifyUser = (userObject) => {
        this.setState({user: userObject});
    }

  render() {
    if (this.state.jobs.length == 0) {
      return <div></div>;
    } else {
      switch (this.state.currentPageIndex) {
          case 0:
              return <HomeScreen selectJob={this.selectJob} jobs={this.state.jobs} clickProfile={this.clickProfile} goHome={this.goHome} user={this.state.user}/>
          case 1:
              return <JobScreen job={this.state.currentSelectedJob} goBack={this.goBack}
                                selectReviewJob={this.selectReviewJob} clickProfile={this.clickProfile} goHome={this.goHome} user={this.state.user}/>
          case 2:
              return <ReviewForm job={this.state.currentSelectedJob} goBack={this.goBack}
                                 jobNo={this.state.currentJobNo} goHome={this.goHome} user={this.state.user}/>
          case 3:
              if (this.state.user) {
                  return <ProfileScreen goBack={this.goBack} clickProfile={this.clickProfile} goHome={this.goHome} user={this.state.user}/>
              } else {
                  return <ProfileScreen goBack={this.goBack} clickProfile={this.clickProfile} goHome={this.goHome} identifyUser={this.identifyUser}/> // need LogIn screen, it returns user data
              }
          default:
              return <HomeScreen selectJob={this.selectJob} jobs={this.state.jobs} clickProfile={this.clickProfile} goHome={this.goHome} user={this.state.user}/>
      }
    }
  }
}

export default App;
