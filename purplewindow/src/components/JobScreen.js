import React, { Component } from 'react';
import Review from './Review';
class JobScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={headerContainer}>
          <p style={headerText}>Purple Window</p>
        </div>
        <p>{this.props.job.title}</p>
        <p>{this.props.job.rating}</p>
        <Review reviewDetails={this.props} index='0'/>
        {/* NOTE: CHECK APP.JS TO SEE WHAT OTHER JOB INFORMATION WAS PASSED DOWN */}
      </div>
    );
  }
}

const headerContainer = {
  height: 50,
  backgroundColor: "#8e28c9",
  width: "100%",
  textAlign: 'center',
};

const headerText = {
  fontSize: "15px",
  color: "#e8e8e6",
  margin: "0 auto",
  lineHeight: 3,
};

export default JobScreen;
