import React, { Component } from 'react';

class JobContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"jobContainer"}>
        <div>
            <div className={"jobTitleDiv"}><a className={"jobTitleText"} onClick={() => this.props.selectJob()}><b>{this.props.title}</b></a></div>
          <div className={"ratingContainer"} style={{float: 'right'}}>
            <img className="ratingStar"  src="./images/star-01.png" />
            <p className={"ratingText"}>{this.props.rating}</p>
          </div>
        </div>
        <p className={"payText"}>{this.props.pay}</p>
        {
          this.props.description.length > 300 ?
          (
            <p>{this.props.description.substring(0, 300) + "..."}</p>
          ) : (
            <p>{this.props.description}</p>
          )
        }
      </div>
    );
  }
}

export default JobContainer;
