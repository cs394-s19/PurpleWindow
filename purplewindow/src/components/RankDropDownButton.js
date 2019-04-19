import React, { Component } from 'react';

class RankDropDownButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: "None",
      displayMenu: false,
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
        value: "None"
      });
    }
    else if (clicked == 'Ratings') {
      this.setState({
        value: "Ratings"
      });
    }

    else if (clicked == '"Hourly Wages (Minimum)"'){
      this.setState({
        value: "Hourly Wages (Minimum)"
      })
    }

    this.props.isRankedByWhat(clicked);

  }
 
  render() {
    return (
      <div>
        <div className="button" style = {{background:"purple",width:"200px"}} onClick={(e) => {this.showDropdownMenu(e)}}> Rank by: {this.state.value} </div>
        {
          this.state.displayMenu ? (
            <ul>
              <li><p id="None" onClick={(e) => {this.handleOptionClick(e)}}>None</p></li>
              <li><p id="Ratings" onClick={(e) => {this.handleOptionClick(e)}}>Ratings</p></li>
              <li><p id="Hourly Wages (Minimum)" onClick={(e) => {this.handleOptionClick(e)}}>Hourly Wages (Minimum)</p></li>
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