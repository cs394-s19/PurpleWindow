import React, { Component } from 'react';

class RankDropDownButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: "None",
      displayMenu: false,
      rankJobs: false,
    }
  }

  showDropdownMenu = (e) => {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = (e) => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleOptionClick = (e) => {
    let clicked = e.target.id;

    if (clicked == 'None') {
      this.setState({
        rankJobs: false,
        value: "None"
      });
    }
    else if (clicked == 'Ratings') {
      this.setState({
        rankJobs: true,
        value: "Ratings"
      });
    }

    this.props.isRankedByWhat(clicked);

  }
 
  render() {
    return (
      <div>
        <div className="button" style = {{background:"purple",width:"200px"}} onClick={(e) => {this.showDropdownMenu(e)}}> Options </div>
        {
          this.state.displayMenu ? (
            <ul>
              <li><p id="None" onClick={(e) => {this.handleOptionClick(e)}}>None</p></li>
              <li><p id="Ratings" onClick={(e) => {this.handleOptionClick(e)}}>Ratings</p></li>
            </ul>
            ) : (
              null
            )
        }
      </div>
    )
  }
}
  
export default RankDropDownButton;