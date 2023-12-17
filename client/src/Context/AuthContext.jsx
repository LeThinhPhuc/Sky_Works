import { createContext, useReducer , useContext , useEffect } from "react";
export const AuthContext = createContext();

import jwt_decode from "jwt-decode";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken") && true,
  role: null,
  username: null,
};

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN': {
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        ...payload,
      };
    }
    case 'VERIFY_TOKEN': {
      return {
        ...state,
        role: payload.role,
        username: payload.username,
      };
    }
    default:
      return state;
  }
};

const AuthState = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const token = localStorage.getItem('accessToken');

  const verifyToken = () => {
    try {
      const decoded = jwt_decode(token);
      dispatch({
        type: 'VERIFY_TOKEN',
        payload: decoded,
      })
    }
    catch(error) {
      console.log("er", error);
    }
  }

  useEffect(()=> {
    if(token) {
      verifyToken()
    }
  },[token])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )};
export default AuthState;

