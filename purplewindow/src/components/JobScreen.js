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
        <button onClick={() => this.props.goBack()}>Jobs</button>
        <p>{this.props.job.title}</p>
        <p>{this.props.job.rating}</p>
        <p>Northwestern University - Evanston, IL</p>
        <p>$10/hour     ;       10hrs/week</p>
        <p><b>Description</b></p>
        <p>The Research Aide will provide research and administrative support for several studies related to educational policy conducted by Professor Cynthia Coburn. This position begins in Spring 2019, with the possibility to renew. Duties include: coding interview transcripts and surveys, entering data into qualitative and quantitative software programs, reviewing literature, and performing other administrative duties. We are looking for a commitment of 8 to 10 hours per week.</p>
        <p><b>Reviews</b></p>
        <Review reviewDetails={this.props} index= {0}/>
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
