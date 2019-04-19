import React, { Component } from 'react';


const FilterButton = ({onClick}) => {
    return (
        <div className={"filterContainer"}>
            <p onClick={onClick} className={"dropBtn"}>Filter <i className="fas fa-angle-down"></i></p>
            <div id={"dropdown2"} className={"dropContent"}>  
                <b>Location</b><br/>
                <input type="radio" name="location" value="oncampus"/> On Campus<br />
                <input type="radio" name="location" value="offcampus" /> Off Campus<br />
            </div>
        </div>
    )
  
  };
  
export default FilterButton;