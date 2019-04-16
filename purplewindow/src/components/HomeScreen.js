import React, { Component } from 'react';
import JobContainer from './JobContainer';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {jobList: this.props.jobs.slice()};
  }
  
  filterJobs = () => {
      let terms = document.getElementById("searchTerms").value;
      if (terms) {
          let filtered = this.props.jobs.filter(job => job.description.includes(terms));
          this.setState({jobList: filtered.slice()});
          console.log(this.state.jobList);
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
          <input className={"searchBox"} placeHolder={"Search opportunities..."} onKeyUp={this.filterJobs} id={"searchTerms"}/>
        </div>
        {
          this.state.jobList.map((j, i) => {
            return <JobContainer key={i} title={j.title} rating={j.rating} pay={j.pay} description={j.description} selectJob={e => this.props.selectJob(j)} />
          })
        }
      </div>
    );
  }
}

export default HomeScreen;
