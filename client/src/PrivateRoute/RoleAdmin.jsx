import { Navigate } from "react-router-dom";
import { createContext, useReducer , useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const RoleAdmin = (props) => {
  const { component: Component } = props;
  const { state } = useContext(AuthContext)

  const isLoggedIn = !!localStorage.getItem('accessToken');

  const checkRole = (role) => {
    return role == "admin" 
  }

  if (isLoggedIn && checkRole(state?.role)) {
    return <Component />;
  }

  return <Navigate to="/admin/warning" />;
};
export default RoleAdmin;
