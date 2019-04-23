import React, { Component } from 'react';
import JobContainer from './JobContainer';
import RankDropDownButton from './RankDropDownButton';
import FilterButton from './FilterButton';

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

function booleanToString(boolInput){
  return boolInput 
    ? 'true'
    : 'false';
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
    state = {
      jobList: this.props.jobs.slice(),
      filters: {

      }
    }

  filterJobsBySearch = () => {
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

  toggle = () => {
      document.getElementById("dropdown").classList.toggle("show");
  }

<<<<<<< HEAD
  toggle2 = (e) => {
    document.getElementById("dropdown2").classList.toggle("show");
  }

  isRankedByWhat = (rankCriteria) => {
    if (rankCriteria === "Ratings") {
      let output = [...this.state.jobList];
      output.sort(function(a, b){return b.rating - a.rating});
      this.setState({jobList: output});
    } 
    
    else if (rankCriteria === "Hourly Wages (Minimum)") {
      let output = [...this.state.jobList];
      output.sort((a,b) => {
        return (b.pay.slice(1,6) - a.pay.slice(1,6))
      })
      this.setState({jobList: output})
    }

    else {
=======
  parseDate = (stringDate) => {
    return stringDate.substring(4, 6) + "/" + stringDate.substring(6, 8) + "/" + stringDate.substring(0, 4)
  }

  isRankedByWhat = (rank) => {
    if (rank == "Ratings") {
      let output = [...this.state.jobList];
      output.sort(function(a, b){return b.rating - a.rating});
      this.setState({ranked: true, jobList: output});
    } else if (rank == "Pay") {
      let output = [...this.state.jobList];
      output.sort(function(a, b){return parseFloat(b.pay.replace("$", "").replace("/hr", "")) - parseFloat(a.pay.replace("$", "").replace("/hr", ""))});
      this.setState({ranked: true, jobList: output});
    } else if (rank == "Recent") {
      let output = [...this.state.jobList];
      output.sort((a, b) => {return new Date(this.parseDate(b.date)) - new Date(this.parseDate(a.date))});
      this.setState({ranked: true, jobList: output});
    } else {
>>>>>>> 0dca33f9f84a5e3680dbcff260854d5c255a7101
      this.setState({
        jobList: this.props.jobs.slice()
      });
    }
  }

  isChecked = (e) => {
    let checked = document.getElementById(e.target.id);
    return checked.checked
  }

  filterJobsByButtons = (e) => {
    let newFilters = JSON.parse(JSON.stringify(this.state.filters));
    console.log(typeof(e.target.value));
    if (!this.isChecked(e)) {
      let index = newFilters[e.target.name].indexOf(e.target.value);
      newFilters[e.target.name].splice(index,1);
    }

    else if (newFilters[e.target.name] === undefined){
        newFilters[e.target.name] = [];
        newFilters[e.target.name].push(e.target.value);
    }
    
    else if (newFilters[e.target.name].includes(e.target.value) === false){
        newFilters[e.target.name].push(e.target.value);
    }

    this.setState({
        filters: newFilters
    })

    let filtered = this.props.jobs.filter(
      job => this.checkFilters(newFilters,job)
    )

    this.setState({
      jobList: filtered
    })

  }

  checkFilters = (filters, job) => {
    console.log('job is ', job['title']);
    let shouldInclude = true 

    for (let category in filters){
      console.log(filters[category], job[category]);

      
      if (Array.isArray(job[category])){
        let included = filters[category].every((value) => job[category].includes(value))
        // console.log('value of included is', included);
        if (included === false){
          shouldInclude = false 
        }
      }
      else {
        // console.log('filters[category] includes job[category]', filters[category].includes(job[category]))
        if (!filters[category].includes(booleanToString(job[category]))){
          shouldInclude = false  
        }
      }

    }

    console.log('should be included', shouldInclude);
    return shouldInclude;
  }


  render() {
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"} onClick={() => this.props.goHome()}>Purple Window</p>
            <i className={"fas fa-user profileIcon"} onClick={() => this.props.clickProfile()}></i>
        </div>
        <div className={"searchContainer"}>
          <input className={"searchBox"} placeholder={"Search opportunities..."} onKeyUp={this.filterJobsBySearch} id={"searchTerms"}/>
        </div>
        <FilterButton onClick={this.toggle2} className="dropBtn" filterJobsByButtons={this.filterJobsByButtons}/>
        <RankDropDownButton isRankedByWhat={this.isRankedByWhat}/>
        {
          this.state.jobList.map((j, i) => {
            return <JobContainer key={i} title={j.title} date={j.date} rating={j.rating} pay={j.pay} tags={j.tags} description={j.description} selectJob={e => this.props.selectJob(i, j)} />
          })
        }

      </div>
    );
  }
}


export default HomeScreen;
