import React, { Component } from 'react'
import firebase from 'firebase/app';
import Navbar from './Navbar';

export default class Signup extends Component {
  state= {
    email: "",
    password: ""
  }

  newAccount = e =>{
    e.preventDefault();
    const {email, password} = this.state;

     firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          console.log(error);
        });
    }

  changeEmail = e =>{
    this.setState({
      email:e.target.value
    })
  }

  changePassword = e =>{
    this.setState({
      password: e.target.value
    })
  }

  render() {
    const {email, password} = this.state;
    return (
      <div>
        <Navbar/>
        <div className="col-md-4 offset-md-4">
          <h1>Sign Up</h1>
        <form onSubmit={this.newAccount}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              placeholder="email"
              value={email}
              onChange={this.changeEmail}
               />
               <input 
              type="password" 
              className="form-control" 
              placeholder="password"
              value={password}
              onChange={this.changePassword}
               />
            <button type="submit" className="btn btn-dark btn-block">
              Sign up!</button>
          </div>
        </form>
        </div>
       
      </div>
    )
  }
}
