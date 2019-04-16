import React, { Component } from 'react';

class JobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
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
          this.props.description.length > 100 ?
          (
            <div>
              <p>{this.props.description.substring(0, 100)}
              { this.state.showText ?
                (<span>
                  <span>{this.props.description.substring(100)}
                    <a onClick={() => this.setState({ showText: !this.state.showText })} className={"seeMore"}> See less...</a>
                  </span>
                </span>)
                :
                (<a onClick={() => this.setState({ showText: !this.state.showText })} className={"seeMore"}> See more... </a>)
              }
              </p>
            </div>
          ) : (
            <p>{this.props.description}</p>
          )
        }
      </div>
    );
  }
}

export default JobContainer;
