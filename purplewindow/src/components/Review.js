import React, { Component } from 'react';
import ratings from '../rating.PNG';

class Review extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const reviews = this.props.reviewDetails.job.reviews
    const reviewList = reviews.map(review => {
      return (
        <div key={Math.random()}>
          <div style={reviewBoxStyle}>
            <h2 style={reviewTitle}>{review.title}</h2>
            <img src={ratings} style={starRating}/>
          </div>
          <p><b>Pros</b></p>
          <p style={reviewDescription}>{review.pros}</p>
          <p><b>Cons</b></p>
          <p style={reviewDescription}>{review.cons}</p>
        </div>
      )
    })
    return (

      <div>
      {reviewList}
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
