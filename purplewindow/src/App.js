import React, {Component} from 'react';
import HomeScreen from './components/HomeScreen';
import JobScreen from './components/JobScreen';
import ReviewForm from './components/ReviewForm';
import ProfileScreen from './components/ProfileScreen';
import SignIn from './components/SignIn';
import './App.css';
import firebase from './firebaseConfig';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
      currentSelectedJob: {},
      currentJobNo: 0,
      jobs: [],
      users: {name: "Adeline Rohrbach",
              email: "adelinerohrbach2020@u.northwestern.edu",
              saved: [],
              contacted: [],
              heardBack: [],
             }

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

    changePin = (title) => {
        let listIndex = this.state.users.saved.indexOf(title);
        if (listIndex >= 0) {
            let dup_list = this.state.users.saved.slice();
            if (dup_list.length > 1) {
                dup_list.splice(listIndex, 1);
            } else {
                dup_list = [];
            }
            let new_user_obj = {name: this.state.users.name,
                               email: this.state.users.email,
                               saved: dup_list,
                               contacted: this.state.users.contacted,
                               heardBack: this.state.users.heardBack,};
            let update_user = Object.assign(this.state.users, new_user_obj);
            this.setState({users: update_user});
        } else {
            let updated_list = this.state.users.saved.slice();
            updated_list.push(title);
            let new_user_obj = {name: this.state.users.name,
                               email: this.state.users.email,
                               saved: updated_list,
                               contacted: this.state.users.contacted,
                               heardBack: this.state.users.heardBack,};
            let update_user = Object.assign(this.state.users, new_user_obj);
            this.setState({users: update_user});
        }
    }

    addContact = () => {
        let duped = this.state.users.contacted.slice();
        let newly_contacted = this.state.currentSelectedJob.title;
        duped.push(newly_contacted);
        let new_user_obj = {name: this.state.users.name,
                            email: this.state.users.email,
                            saved: this.state.users.saved,
                            contacted: duped,
                            heardBack: this.state.users.heardBack,};
        let update_user = Object.assign(this.state.users, new_user_obj);
        this.setState({users: update_user});
        alert("You have contacted the " + this.state.currentSelectedJob.employer + " about " + newly_contacted + ".");
    }

  render() {
    if (this.state.jobs.length == 0) {
      return <div></div>;
    } else {
      switch (this.state.currentPageIndex) {
          case 0:
              return <HomeScreen selectJob={this.selectJob} jobs={this.state.jobs} clickProfile={this.clickProfile} goHome={this.goHome} saved={this.state.users.saved} changePin={this.changePin}/>

          case 1:
              return <JobScreen job={this.state.currentSelectedJob} goBack={this.goBack}
                                selectReviewJob={this.selectReviewJob} clickProfile={this.clickProfile} goHome={this.goHome} users={this.state.users} addContact={this.addContact}/>
          case 2:
              return <ReviewForm job={this.state.currentSelectedJob} goBack={this.goBack}
                                 jobNo={this.state.currentJobNo} goHome={this.goHome} users={this.state.users}/>
          case 3:
              //return <ProfileScreen users={this.state.users} goBack={this.goBack} clickProfile={this.clickProfile} goHome={this.goHome}/>
              return <SignIn goBack={this.goBack} clickProfile={this.clickProfile} goHome={this.goHome}/>
          default:
              return <HomeScreen selectJob={this.selectJob} jobs={this.state.jobs} clickProfile={this.clickProfile} goHome={this.goHome} users={this.state.users}/>
      }
    }
  }
}

export default App;
