import React, { Component } from 'react';

const MAX_DESC_LENGTH = 130;
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
          <div style={{clear: 'both'}}></div>
        </div>

        <p className={"payText"}>{this.props.pay}</p>
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
