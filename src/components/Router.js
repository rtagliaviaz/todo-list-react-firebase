import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";

//components
import App from "../App";
import Login from './Login';
import Signup from './Signup';
import Todos from './Todos';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <PrivateRoute path="/todos" exact component={Todos} />
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

export default Router;