import React, { Component } from 'react';

class FilterButton extends Component {
    render(){
        return (
            <div className={"filterContainer"}>
                <p onClick={this.props.onClick} className={"dropBtn"}>Filter <i className="fas fa-angle-down"></i></p>
                <div id={"dropdown2"} className={"dropContent"}>  
                    <form>
                        <b>Location</b><br/>
                        <input type="checkbox" id="oncampustrue" name="onCampus" value={true} onChange={(e) => {this.props.filterJobsByButtons(e)}}/>On-Campus<br />
                        <input type="checkbox" id="oncampusfalse" name="onCampus" value={false} onChange={(e) => {this.props.filterJobsByButtons(e)}}/>Off-Campus<br />
                        <br/>
                        <b>Academic Requirements</b><br/>
                        <input type="checkbox" id="undergrad" name="tags" value="Undergrad" onChange={(e) => {this.props.filterJobsByButtons(e)}}/>Undergraduate<br />
                        <input type="checkbox" id="grad" name="tags" value="Graduate" onChange={(e) => {this.props.filterJobsByButtons(e)}}/>Graduate<br />
                    </form>
                </div>
            </div>
        )
    }
}
  
export default FilterButton;