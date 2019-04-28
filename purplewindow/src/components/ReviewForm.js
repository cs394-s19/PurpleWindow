import React, { Component } from 'react';
import firebase from 'firebase';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      pros: '',
      cons: '',
      total: 0,
      recommend: true,
      employee: false,
      flexible: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your review of ' + this.props.job.title);

    // Create new review object
    //justin checking if he is at the head
    const timestamp = (new Date()).getTime();
    const newReview = {
      title: this.state.title,
      pros: this.state.pros,
      cons: this.state.cons,
      recommend: this.state.recommend,
      currentEmployee: this.state.employee,
      flexible: this.state.flexible,
      total: this.state.total,
      date: timestamp
    }

    // Connect to firebase DB and update our Job object.
    var ref = firebase.app().database().ref();
    var jobRef = ref.child('jobs').child(this.props.jobNo);
    jobRef.once('value')
     .then(function (snapshot) {

       // Get all reviews from job and add in new one.
       var revs = snapshot.val()["reviews"];
       revs.push(newReview);

       // Update reviews array for this specific job.
       jobRef.update({
         'reviews': revs
       }).catch(function(err) {
         console.log("Update Reviews for " + [this.props.job.title] + " failed.");
       }).then(function(val) {
         this.props.goBack();
       }.bind(this));

     }.bind(this));
  }

  render() {
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"} onClick={() => this.props.goHome()}>Purple Window</p>
        </div>
        <div style={{padding: 15}}>
          <div onClick={() => this.props.goBack()}>
            <img src="./images/back-01.png" style={{width: 15, height: 15, float: 'left'}} />
            <p className="backButtonText">Back</p>
          </div>
          <div style={{width: "100%", height: 1, backgroundColor: "#3e3e3e", opacity: "0.2"}}></div>
          <p className={"jobTitleText2"} style={{cursor: 'default'}}><b>Review: {this.props.job.title}</b></p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p className="sectionText" style={{marginBottom: 0}}>Title</p>
              <input className={"reviewInput"} name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
            </label> <br />
            <label>
              <p className="sectionText" style={{marginBottom: 0}}>Pros</p>
              <input className={"reviewInput"} name="pros" type="text" value={this.state.pros} onChange={this.handleInputChange} />
            </label> <br />
            <label>
              <p className="sectionText" style={{marginBottom: 0}}>Cons</p>
              <input className={"reviewInput"} name="cons" type="text" value={this.state.cons} onChange={this.handleInputChange} />
            </label> <br />
            <label>
              <p className="sectionText" style={{marginBottom: 0}}>Total (1-5)</p>
              <input className={"reviewInput"} name="total" type="number" value={this.state.total} onChange={this.handleInputChange} />
            </label> <br />
            <label>
              <div style={{display: 'flex', marginBottom: 0}}>
                <p className="sectionText">Are you a current employee?</p>
                <input style={{width: 20, height: 20, marginTop: 25, marginLeft: 20}} name="employee" type="checkbox" checked={this.state.employee} onChange={this.handleInputChange} />
              </div>
            </label> <br />
            <label>
              <div style={{display: 'flex', marginBottom: 0}}>
                <p className="sectionText">Was this job flexible?</p>
                <input style={{width: 20, height: 20, marginTop: 25, marginLeft: 20}} name="flexible" type="checkbox" checked={this.state.flexible} onChange={this.handleInputChange} />
              </div>
            </label> <br />
            <label>
              <div style={{display: 'flex', marginBottom: 0}}>
                <p className="sectionText">Would you recommend?</p>
                <input style={{width: 20, height: 20, marginTop: 25, marginLeft: 20}} name="recommend" type="checkbox" checked={this.state.recommend} onChange={this.handleInputChange} />
              </div>
            </label> <br />
            <button type="submit" className={"contactButton"}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;
