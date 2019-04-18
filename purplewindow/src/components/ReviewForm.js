import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      recommend: true,
      pros: '',
      cons: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;

    // Grab the value/checked of the form element
    const value = target.type === "checked" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Thank you for you review of ' + this.props.job.title);
    event.preventDefault();

    // Do some DB stuff with firebase
  }

  render() {
    return (
      <div>
        <div className={"headerContainer"}>
          <p className={"headerText"}>Purple Window</p>
        </div>
        <div style={{padding: 15}}>
          <div onClick={() => this.props.goBack()}>
            <img src="./images/back-01.png" style={{width: 15, height: 15, float: 'left'}} />
            <p className="backButtonText">Back</p>
          </div>
          <div style={{width: "100%", height: 1, backgroundColor: "#3e3e3e", opacity: "0.2"}}></div>
          <p className={"jobTitleText2"} style={{cursor: 'default'}}><b>Review {this.props.job.title}</b></p>
          <form>
            <label>
              Title: <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Pros: <input name="pros" type="text" value={this.state.pros} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Cons: <input name="cons" type="text" value={this.state.cons} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
            Would you recommend?: <input name="recommend" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;
