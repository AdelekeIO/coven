import React, { Component } from 'react'
import Redirect from 'react-router-dom'


 class Login extends Component {
    state ={
        username:"",
        password:"",
        defaultP:"demo",
        message:"",
        messageType:0

    }
 login=(e)=> {

     e.preventDefault();
     let {defaultP,username,password} = this.state;
     console.log(this.state);
     if (username===defaultP && password===defaultP) {
      this.props.history.push('/dashboard')
     }else{
       alert("Invalid Username/Password");
     }
     
}

onChange = (e)=>{

    this.setState({[e.target.name]: e.target.value});
    
    
}
    render() {
        return (
            <div>
                  <div>
        <div className="login-page">
  <div className="form">
    <form className="register-form">
      <input type="text" placeholder="name"  />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className="login-form">

          
      <input type="text" placeholder="username" name="username"onChange = {this.onChange}/>
      <input type="password" placeholder="password" name="password" onChange = {this.onChange}/>
      <button onClick={this.login}>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
      </div>

            </div>
        )
    }
}
export default Login;