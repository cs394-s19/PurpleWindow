import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"}>Purple Window</p>
        </div>
        <div style={{padding: 15}}>
          <div onClick={() => this.props.goBack()}>
            <img src="./images/back-01.png" style={{width: 15, height: 15, float: 'left'}} />
            <p className="backButtonText">{this.props.job.title}</p>
          </div>
          <div style={{width: "100%", height: 1, backgroundColor: "#3e3e3e", opacity: "0.2"}}></div>
        </div>
      </div>
    )
  }
}

export default ReviewForm;
