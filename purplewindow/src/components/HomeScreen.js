import React, { Component } from 'react';
import JobContainer from './JobContainer';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"}>Purple Window</p>
        </div>
        {
          this.props.jobs.map((j, i) => {
            return <JobContainer key={i} title={j.title} rating={j.rating} pay={j.pay} tags={j.tags} description={j.description} selectJob={e => this.props.selectJob(j)} />
          })
        }
      </div>
    );
  }
}

export default HomeScreen;
