import React, { Component } from 'react';

class JobContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={jobContainer}>
        <p>{this.props.title}</p>
        <p>{this.props.rating}</p>
        <p>{this.props.pay}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

const jobContainer = {
  width: "80%",
  borderColor: "#8e28c9",
  borderStyle: "solid",
  borderWidth: "3px",
  margin: "0 auto",
  marginTop: "10px",
};

export default JobContainer;
