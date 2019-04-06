import React, { Component } from 'react';
import JobContainer from './JobContainer';

// const JOBS = [
//   {title: "Job Title", rating: "3.4", pay: "$10k - $15k", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"},
//   {title: "Job Title", rating: "3.4", pay: "$10k - $15k", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"},
// ];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div style={headerContainer}>
          <p style={headerText}>Purple Window</p>
        </div>
        {
          this.props.jobs.map((j, i) => {
            return <JobContainer key={i} title={j.title} rating={j.rating} pay={j.pay} description={j.description} selectJob={e => this.props.selectJob(j)} />
          })
        }
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

export default HomeScreen;
