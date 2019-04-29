import React, { Component } from 'react';

const MAX_DESC_LENGTH = 130;
class JobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
  }

  parseDate = (stringDate) => {
    return stringDate.substring(4, 6) + "/" + stringDate.substring(6, 8) + "/" + stringDate.substring(0, 4)
  }
  
  showPin = (user) => {
      if (user && user.saved.indexOf(this.props.title) >= 0) {
          return "./images/pin-full.png"
      } else {
          return "./images/pin-empty.png"
      }
  } // needs onClick to add / remove job from saved list
  
  listHours = (hoursText) => {
      if (!(hoursText)) {
          return "TBD"
      } else if (String(hoursText).indexOf("hour") >= 0 || String(hoursText).indexOf("hr") >= 0) {
          return hoursText
      } else {
          return hoursText + " hrs/week"
      }
  }

  render() {
    return (
      <div className={"jobContainer"} onClick={() => this.props.selectJob()}>
        <div>
            <div className={"jobTitleDiv"}>
                <img className={"pinIcon"} src={this.showPin(this.props.user)} />
                <a className={"jobTitleText"}>
                    <b>{this.props.title}</b>
                </a>
                <p className={"dateText"}>Added {this.parseDate(this.props.date)}</p>
            </div>
          <div className={"ratingContainer"} style={{float: 'right'}}>
            <img className="ratingStar"  src="./images/star-01.png" />
            <p className={"ratingText"}>{this.props.rating}</p>
          </div>
          <div style={{clear: 'both'}}></div>
        </div>
        <div className={"infoContainer"}>
            <div className={"payContainer"}>
                <img className="payIcon" src="./images/cash-icon.png"/>
                <p className={"payText"}>{this.props.pay}</p>
            </div>
            <div className={"time Container"}>
                <img className="timeIcon" src="./images/time-icon.png"/>
                <p className={"timeText"}>{this.listHours(this.props.hours)}</p>
            </div>
        </div>
        {
          this.props.description.length > MAX_DESC_LENGTH ?
          (
            <div>
              <p>{this.props.description.substring(0, MAX_DESC_LENGTH)}
              { this.state.showText ?
                (<span>
                  <span>{this.props.description.substring(MAX_DESC_LENGTH)}
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
        <div style={{display: 'flex', marginTop: 8}}>
          {
            this.props.tags.map((t, i) => {
              return (
                <div key={i} style={{width: 90, height: 30, backgroundColor: "#979AE6", textAlign: 'center', marginRight: 8}}>
                  <p className={"tagText"}>{t}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default JobContainer;