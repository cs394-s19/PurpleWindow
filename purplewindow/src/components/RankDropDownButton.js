import React, { Component } from 'react';

const sort_options = ['Default', 'Ratings', 'Pay', 'Recent'];

class RankDropDownButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: "Default",
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

    if (clicked == 'Default') {
      this.setState({
        rankJobs: false,
        value: "Default"
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
        <div className={"filterHeader"} onClick={(e) => {this.showDropdownMenu(e)}}>Sort by:</div>
        <div style={{display: 'flex', marginTop: 5}}>
          {
            this.state.value == 'Default' ? (
              <div style={{backgroundColor: "#8e28c9", width: 100, height: 30, textAlign: 'center'}}>
                <p style={{color: '#ffffff', margin: '0 auto', marginTop: 4}} id="Default" onClick={(e) => {this.handleOptionClick(e)}}>Default</p>
              </div>
            ) : (
              <div style={{borderColor: "#8e28c9", borderWidth: 2, borderStyle: 'solid', width: 100, height: 30, textAlign: 'center'}}>
                <p style={{color: '#8e28c9', margin: '0 auto', marginTop: 4}} id="Default" onClick={(e) => {this.handleOptionClick(e)}}>Default</p>
              </div>
            )
          }

          {
            this.state.value == 'Ratings' ? (
              <div style={{backgroundColor: "#8e28c9", width: 100, height: 30, textAlign: 'center', marginLeft: 10}}>
                <p style={{color: '#ffffff', margin: '0 auto', marginTop: 4}} id="Ratings" onClick={(e) => {this.handleOptionClick(e)}}>Ratings</p>
              </div>
            ) : (
              <div style={{borderColor: "#8e28c9", borderWidth: 2, borderStyle: 'solid', width: 100, height: 30, textAlign: 'center', marginLeft: 10}}>
                <p style={{color: '#8e28c9', margin: '0 auto', marginTop: 4}} id="Ratings" onClick={(e) => {this.handleOptionClick(e)}}>Ratings</p>
              </div>
            )
          }

          {
            this.state.value == 'Pay' ? (
              <div style={{backgroundColor: "#8e28c9", width: 100, height: 30, textAlign: 'center', marginLeft: 10}}>
                <p style={{color: '#ffffff', margin: '0 auto', marginTop: 4}} id="Pay" onClick={(e) => {this.handleOptionClick(e)}}>pay</p>
              </div>
            ) : (
              <div style={{borderColor: "#8e28c9", borderWidth: 2, borderStyle: 'solid', width: 100, height: 30, textAlign: 'center', marginLeft: 10}}>
                <p style={{color: '#8e28c9', margin: '0 auto', marginTop: 4}} id="Pay" onClick={(e) => {this.handleOptionClick(e)}}>Pay</p>
              </div>
            )
          }

          {/* pay, time ; change none to*/}
        </div>
        <div style={{display: 'flex', marginTop: 5}}>
          {
            this.state.value == 'Recent' ? (
              <div style={{backgroundColor: "#8e28c9", width: 100, height: 30, textAlign: 'center'}}>
                <p style={{color: '#ffffff', margin: '0 auto', marginTop: 4}} id="Recent" onClick={(e) => {this.handleOptionClick(e)}}>Recent</p>
              </div>
            ) : (
              <div style={{borderColor: "#8e28c9", borderWidth: 2, borderStyle: 'solid', width: 100, height: 30, textAlign: 'center'}}>
                <p style={{color: '#8e28c9', margin: '0 auto', marginTop: 4}} id="Recent" onClick={(e) => {this.handleOptionClick(e)}}>Recent</p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default RankDropDownButton;
