import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

import { PropTypes } from "prop-types";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  
  if(loading){
    return <progress className="progress w-56"></progress>
  }

  if(user?.email){
    return children;
  }

  return <Navigate to='/login' replace></Navigate>
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute;