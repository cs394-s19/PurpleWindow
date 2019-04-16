import React, { Component } from 'react';
import JobContainer from './JobContainer';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {jobList: this.props.jobs.slice()};
  }

  filterJobs = () => {
      let terms = document.getElementById("searchTerms").value.toLowerCase();
      if (terms) {
          let filtered = this.props.jobs.filter(job => (job.description.toLowerCase().includes(terms)||job.title.toLowerCase().includes(terms)));
          this.setState({jobList: filtered.slice()});
      } else {
          this.setState({jobList: this.props.jobs.slice()});;
      }
  }

  render() {
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"}>Purple Window</p>
        </div>
        <div className={"searchContainer"}>
          <input className={"searchBox"} placeholder={"Search opportunities..."} onKeyUp={this.filterJobs} id={"searchTerms"}/>
        </div>
        {
          this.state.jobList.map((j, i) => {
            return <JobContainer key={i} title={j.title} rating={j.rating} pay={j.pay} tags={j.tags} description={j.description} selectJob={e => this.props.selectJob(j)} />
          })
        }
      </div>
    );
  }
}

export default HomeScreen;
