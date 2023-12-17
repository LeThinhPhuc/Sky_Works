import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component } = props;

  const isLoggedIn = !!localStorage.getItem('accessToken');

  if (isLoggedIn) {
    return <Component />;
  }

  return <Navigate to="/admin/login" />;
};
export default PrivateRoute;
