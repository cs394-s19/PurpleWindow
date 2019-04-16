import React, { Component } from 'react';

class SortStateContainer extends Component {

  render() {
    let output = (this.props.ranked) ? (
        <div className="Sort by:">Sort State Container: </div>
        ) : (
        <div className="Sort by:">Sort State Container: {this.props.criteria}</div>
        );

    return (
        <div>
          {
            output
          }
          
        </div>
      );
  }
}



  
export default SortStateContainer