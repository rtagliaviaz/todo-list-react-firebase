import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    
    return(
      <div className="container my-4">
        <div className="jumbotron">
          <h1 className="display-4">To-Do List</h1>
          <p className="lead">Simple To-Do list made it with React + Firebase</p>
          <hr className="my-4" />
          <a className="btn btn-dark btn-lg mx-3" href="/login" role="button">Login</a>
          <a className="btn btn-dark btn-lg mx-3" href="/signup" role="button">Sign Up</a>
        </div>
      </div>
    )
  }
}
