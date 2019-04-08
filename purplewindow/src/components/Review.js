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
          <div style={{marginTop: 10}}>
            <a className={"jobTitleText"} onClick={() => this.props.selectJob()}><b>{review.title}</b></a>
            <div className={"ratingContainer"} style={{float: 'right'}}>
              <img className="ratingStar"  src="./images/star-01.png" />
              <p className={"ratingText"}>{review.total}</p>
            </div>
          </div>
          <p><b>Pros</b></p>
          <p style={reviewDescription}>{review.pros}</p>
          <p><b>Cons</b></p>
          <p style={reviewDescription}>{review.cons}</p>
          <div style={{width: "100%", height: 1, backgroundColor: "#3e3e3e", opacity: "0.2"}}></div>
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
