import React, { Component } from 'react';
import JobContainer from './JobContainer';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {jobList: this.props.jobs.slice()};
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
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

  toggle() {
      this.setState(state => ({ collapse: !state.collapse }));
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
        <div className={"filterContainer"}>
          <p className={"filterHeader"} onClick={this.toggle}>Filter <i class="fas fa-chevron-down down_arrow"></i> </p>
          <Collapse className={"filterContent"} isOpen={this.state.collapse}>
            Sample Info
          </Collapse>
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
