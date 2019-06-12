import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

//hooks 
const PrivateRoute = ({ component: RouteComponent, ...rest }) =>{
  const {currentUser} = useContext(AuthContext);
  return(

    //if the user is not logged in the user will be redirect to /login, if the user is logged in the user can access the privateRoute
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ): (
          <Redirect to={"/login"} />
        )}
    />
  );
};

export default PrivateRoute;