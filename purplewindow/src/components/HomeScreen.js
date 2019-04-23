import React, { Component } from 'react';
import JobContainer from './JobContainer';
import RankDropDownButton from './RankDropDownButton';
import SortStateContainer from './SortStateContainer';

function tagsContain(tagsArray,termsArray){
  for(var i = 0; i<tagsArray.length; i++){
    for(var j = 0; j<termsArray.length; j++){
      var tag = tagsArray[i].toLowerCase().trim();
      var term = termsArray[j].toLowerCase().trim();
      if(tag.includes(term)
        && term.length > 0) {
        console.log(tagsArray[i].trim().length);
        console.log(termsArray[j].trim().length);
        return true;
      }
    }
  }
  return false;
}

function searchContains(title, description, terms){
  title = title.toLowerCase();
  description = description.toLowerCase();
  var termArray = terms.toLowerCase().split(' ');
  if (termArray.length == 0){
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
                    ||tagsContain(job.tags,terms.split(" "))
                   ));
          this.setState({jobList: filtered.slice()});
      } else {
          this.setState({jobList: this.props.jobs.slice()});
      }
  }

  toggle() {
      document.getElementById("dropdown").classList.toggle("show");
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
            <i className={"fas fa-user profileIcon"} onClick={() => this.props.clickProfile()}></i>
        </div>
        <div className={"searchContainer"}>
          <input className={"searchBox"} placeholder={"Search opportunities..."} onKeyUp={this.filterJobs} id={"searchTerms"}/>
        </div>
          <div className={"filterContainer"}>
              <p onClick={this.toggle} className={"dropBtn"}>Filter <i className="fas fa-angle-down"></i></p>
              <div id={"dropdown"} className={"dropContent"}>
                <div id={"filter"}>
                  Info
                  Some more Info
                  Some more
                </div>
                <br></br>
                <div id={"sort"}>
                  <RankDropDownButton isRankedByWhat={this.isRankedByWhat}/>
                </div>
              </div>
          </div>
        {
          this.state.jobList.map((j, i) => {
            return <JobContainer key={i} title={j.title} rating={j.rating} pay={j.pay} tags={j.tags} description={j.description} selectJob={e => this.props.selectJob(i, j)} />
          })
        }

      </div>
    );
  }
}


export default HomeScreen;
