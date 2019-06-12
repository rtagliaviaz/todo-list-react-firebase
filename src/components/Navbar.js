import React from 'react';
import firebase from 'firebase/app';

const Navbar = () => {
  const userName = firebase.auth().currentUser;

   // logout
   const logout = () =>{
    firebase.auth().signOut()
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">To-Do List</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {/* if the user is logged then show logout, if isn't logged in then show login and signup */}
            { userName !== null ? 
            <a className="nav-item nav-link" href="/login" onClick={logout}>Logout</a> : 
            <React.Fragment>
            <a className="nav-item nav-link" href="/login">Login</a> 
            <a className="nav-item nav-link" href="/signup">Sign Up</a>
            </React.Fragment> }
          </div>
        </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar
