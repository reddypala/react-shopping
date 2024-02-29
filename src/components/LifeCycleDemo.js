import React from 'react'
class SuccessComponent extends React.Component{

    componentDidMount(){
        alert('Success Component will render');
    }
    componentWillUnmount(){
        alert('Success component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Login Success...</h2>
            </div>
        )
    }
}
class ErrorComponent extends React.Component{
    componentDidMount(){
        alert('Error Component will render');
    }
    componentWillUnmount(){
        alert('Error component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Invalid Login</h2>
            </div>
        )
    }
}

export default class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserDetails:{
                UserName:"john_nit",
                Password:'john@11'
            },
            formDetails:{
                UserName:'',
                Password:''
            },
            result:''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUserName(event){
        this.setState({
            formDetails:{
                UserName:event.target.value,
                Password:this.state.formDetails.Password
            }
        })
    }
    handlePassword(event){
        this.setState({
            formDetails:{
                UserName:this.state.formDetails.UserName,
                Password:event.target.value
            }
        })
    }
    handleLoginClick(){
        if(this.state.formDetails.UserName===this.state.UserDetails.UserName && this.state.formDetails.Password===this.state.UserDetails.Password )
        {
            this.setState({
                result:<SuccessComponent/>
            })
        }else{
            this.setState({
                result:<ErrorComponent/>
            })
        }
    }




    render(){
        return(
            <div>
            <dl>
                <dt>UserName</dt>
                <dd><input type='text' onChange={this.handleUserName}></input></dd>
                <dt>Password</dt>
                <dd><input type='password' onChange={this.handlePassword}></input></dd>
            </dl>
            <button onClick={this.handleLoginClick}>Login</button>
            <div>
                {this.state.result}
            </div>
        </div>
        )
    }
}