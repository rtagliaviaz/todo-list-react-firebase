import React, { useState, useContext }from 'react';
import {Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { AuthContext } from './Auth';
import Navbar from './Navbar'


const Login = () => {
  //state hooks
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SignIn = e => {
    e.preventDefault()
    //sign in
     firebase
        .auth()
        .signInWithEmailAndPassword(email, password)     
        .catch((error) => {
          console.log(error);
        });   
    }

    const { currentUser } = useContext(AuthContext);

      if (currentUser) {
        return <Redirect to="/todos" />
      }

  return (
    <div>
      <Navbar/>
        <div className="col-md-4 offset-md-4">
          <h1>Login!</h1>
        <form onSubmit={SignIn}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
               <input 
              type="password" 
              className="form-control" 
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
               />
            <button type="submit" className="btn btn-dark btn-block">
              Login!</button>
          </div>
        </form>
        </div>
       
      </div>
  )
}

export default Login
