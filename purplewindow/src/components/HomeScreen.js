import React, { Component } from 'react';
import JobContainer from './JobContainer';
import RankDropDownButton from './RankDropDownButton';

function tagsContain(tagsArray,terms){
  for(var i = 0; i<tagsArray.length; i++){
    if(terms.includes(tagsArray[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}

function searchContains(title, description, terms){
  title = title.toLowerCase();
  description = description.toLowerCase();
  var termArray = terms.toLowerCase().split(' ');
  if (termArray.length === 0){
    return false;
  }
  for(var i = 0; i<termArray.length; i++){
    if((!title.includes(termArray[i]))&&(!description.includes(termArray[i]))){
      return false;
    }
  }
  return true;
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {jobList: this.props.jobs.slice()};
    this.toggle = this.toggle.bind(this);
    this.state = {
      jobList: this.props.jobs.slice(),
      ranked: true
    };
  }

  filterJobs = () => {
      let terms = document.getElementById("searchTerms").value.toLowerCase();
      if (terms) {
          let filtered = this.props.jobs.filter(
            job => (job.description.toLowerCase().includes(terms)
                    ||job.title.toLowerCase().includes(terms)
                    ||searchContains(job.title,job.description,terms)
                    ||tagsContain(job.tags,terms)
                   ));
          this.setState({jobList: filtered.slice()});
      } else {
          this.setState({jobList: this.props.jobs.slice()});
      }
  }

  toggle() {
      document.getElementById("dropdown").classList.toggle("show");
  }

  isRankedByWhat = (rankCriteria) => {
    if (rankCriteria === "Ratings") {
      let output = [...this.state.jobList];
      output.sort(function(a, b){return b.rating - a.rating});
      this.setState({ranked: true, jobList: output});
    } 
    
    else if (rankCriteria === "Hourly Wages (Minimum)") {
      let output = [...this.state.jobList];
      output.sort((a,b) => {
        return (b.pay.slice(1,6) - a.pay.slice(1,6))
      })
      this.setState({ranked: true, jobList: output})
    }

    else {
      this.setState({
        ranked: true, jobList: this.props.jobs.slice()
      });
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
          <div className={"filterContainer"}>
              <p onClick={this.toggle} className={"dropBtn"}>Filter <i className="fas fa-angle-down"></i></p>
              <div id={"dropdown"} className={"dropContent"}>
                  Info
                  Some more Info
                  Some more 
              </div>
          </div>
        <RankDropDownButton isRankedByWhat={this.isRankedByWhat}/>
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
