import React, { Component } from 'react';
import ratings from '../rating.PNG';

class Review extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
      <div style={reviewBoxStyle}>
        <h2 style={reviewTitle}>{this.props.reviewDetails.job.reviews[this.props.index].title}</h2>
        <img src={ratings} style={starRating}/>
      </div>
      <p style={reviewDescription}>{this.props.reviewDetails.job.reviews[this.props.index].cons + " " + this.props.reviewDetails.job.reviews[this.props.index].pros }</p>
      </div>
    );
  }
}

const reviewBoxStyle = {
  display: 'flex',
}

const starRating = {
  marginTop: '19px',
  width: '4%',
  height: '4%',
}

const reviewDescription = {
  marginTop: '0px',
}

const reviewTitle = {
  color: "#8e28c9",
  marginRight: '160px',
};

export default Review;
