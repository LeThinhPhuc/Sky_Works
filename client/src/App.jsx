import { BrowserRouter as Router } from "react-router-dom";
import AuthState from "./Context/AuthContext";
import { AppProvider } from "./Context/CareersContext";
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";

import AnimateRoute from "./components/AnimateRoute/AnimateRoute";

function App() {
  return (
    <AuthState>
      <AppProvider>
        <Router>
          {window.location.href.includes("/admin") ? "" : <CareerHeader />}
          <AnimateRoute />
          {window.location.href.includes("/admin") ? "" : <CareerFooter />}
        </Router>
      </AppProvider>
    </AuthState>
  );
}

export default App;
