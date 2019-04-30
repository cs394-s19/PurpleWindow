import React, {Component} from 'react';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    toggle(event) {
        event.currentTarget.classList.toggle("active");
        var panel = event.currentTarget.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        let toggle = this.toggle.bind(this);
        return (
            <div>
                <div className={"headerContainer"}>
                    <p className={"headerText"} onClick={() => this.props.goHome()}>Purple Window</p>
                    <i className={"fas fa-user profileIcon"} onClick={() => this.props.clickProfile()}></i>
                </div>
                <div style={{padding: 15}}>
                    <div className={"userInfo"}>
                        <div className={"profilePicture"}>
                            <i className={"fas fa-user"}></i>
                        </div>
                        <div className={"nameContainer"}>
                            <h3 className={"fullname"}>{this.props.users.name}</h3>
                            <h5 className={"email"}>{this.props.users.email}</h5>
                        </div>
                    </div>
                    <div className={"jobAccordion"}>
                        <button className={"accordion"} onClick={toggle}> Jobs Saved ({this.props.users.saved.length}) </button>
                        <div className={"panel"}> {this.props.users.saved} </div>
                        <button className={"accordion"} onClick={toggle}>Jobs Reached Out To ({this.props.users.contacted.length}) </button>
                        <div className={"panel"}> Example </div>
                        <button className={"accordion"} onClick={toggle}>Jobs Heard Back From ({this.props.users.heardBack.length}) </button>
                        <div className={"panel"}> Example</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileScreen;
