import React, { Component } from 'react';
import JobContainer from './JobContainer';
import RankDropDownButton from './RankDropDownButton';
import SortStateContainer from './SortStateContainer';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: this.props.jobs.slice(),
      ranked: true
    };
  }
  
  filterJobs = () => {
      let terms = document.getElementById("searchTerms").value;
      if (terms) {
          let filtered = this.props.jobs.filter(job => job.description.includes(terms));
          this.setState({jobList: filtered.slice()});
      } else {
          this.setState({jobList: this.props.jobs.slice()});;
      }
  }

  isRankedByWhat = (rank) => {
    if (rank == "Ratings") {
      let output = [...this.state.jobList];
      output.sort(function(a, b){return b.rating - a.rating});
      this.setState({ranked: true, jobList: output});
    } else {
      this.setState({
        ranked: false, jobList: this.props.jobs.slice()
      });
    } 
  }

  render() {
    // let output = [...this.state.jobList];
    // if (this.state.ranked) {
    //   output.sort(function(a, b){return b.rating - a.rating});
    // }
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"}>Purple Window</p>
        </div>
        <div className={"searchContainer"}> 
          <input className={"searchBox"} placeHolder={"Search opportunities..."} onKeyUp={this.filterJobs} id={"searchTerms"}/>
        </div>
        <RankDropDownButton isRankedByWhat={this.isRankedByWhat}/>
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
