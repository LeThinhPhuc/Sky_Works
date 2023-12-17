import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ApplyPage from "../../pages/ApplyPage/ApplyPage";
import JobDetail from "../../components/JobDetail";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import CareerPage from "../../components/CareerPage/CareerPage";

//admin
import AdminPage from "../../pages/AdminPage";
import CandidatesPage from "../../pages/AdminPage/CandidatesPage";
import Jobs from "../../pages/AdminPage/Jobs/Jobs";
import JobCreatorPage from "../../pages/AdminPage/JobCreatorPage/JobCreatorPage";
import UpdateJobPage from "../../pages/AdminPage/UpdateJobPage/UpdateJobPage";
import Overview from "../../pages/AdminPage/Overview/Overview";
import CandidatesDetail from "../../pages/AdminPage/CandidatesPage/CandidatesDetail/CandidatesDetail";
import LoginRegisterPage from "../../pages/AdminPage/AdminLoginPage/LoginRegisterPage";
import WarningPage from "../../pages/AdminPage/WarningPage/WarningPage";
import Employee from "../../pages/AdminPage/Employee/Employee";
import EmployeeDetail from "../../pages/AdminPage/Employee/EmployeeDetail/EmployeeDetail";
// Check Role
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import RoleContentJob from "../../PrivateRoute/RoleContentJob";
import RoleCandidate from "../../PrivateRoute/RoleCandidate";
import RoleAdmin from "../../PrivateRoute/RoleAdmin";

import { AnimatePresence } from "framer-motion";

// create the motion transition page for Route
const AnimateRoute = () => {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<CareerPage />} />
        <Route exact path="/careers" element={<CareerPage />} />
        <Route exact path="/careers/:id" element={<JobDetail />} />
        <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/admin/login" element={<LoginRegisterPage />} />
        <Route
          exact
          path="/admin"
          element={<PrivateRoute component={AdminPage} />}
        >
          <Route exact path="/admin" element={<Overview />} />
          <Route
            exact
            path="/admin/candidates"
            element={<RoleCandidate component={CandidatesPage} />}
          />
          <Route
            exact
            path="/admin/candidates/:id/edit"
            element={<CandidatesDetail />}
          />
          <Route
            exact
            path="/admin/employee"
            element={<RoleAdmin component={Employee} />}
          />
          <Route
            exact
            path="/admin/employee/:id/edit"
            element={<EmployeeDetail />}
          />
          <Route
            exact
            path="/admin/jobs"
            element={<RoleContentJob component={Jobs} />}
          />
          <Route
            exact
            path="/admin/create-job"
            element={<RoleContentJob component={JobCreatorPage} />}
          />
          <Route
            exact
            path="/admin/update-job/:id"
            element={<UpdateJobPage />}
          />
          <Route exact path="/admin/warning" element={<WarningPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoute;
