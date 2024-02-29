import React from "react";

export default class TwoWayClassDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName:'John'
        }
        // Binding event to state at the time of component instantiation
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    handleUserChange(e){
        this.setState({
            UserName: e.target.value
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>User Details</h2>
                <input type="text" onChange={this.handleUserChange}/>
                <br/>
                <p>Hello!{this.state.UserName}</p>
            </div>
        )
    }
}