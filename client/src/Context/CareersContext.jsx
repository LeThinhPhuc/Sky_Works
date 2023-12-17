import { useState, useEffect, useRef, createContext, useContext } from "react";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
// phuc them vai
import useFetchAllUser from "../hooks/useFetchAllUser";
import { dataService } from "../services/dataService";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
export const CareersContext = createContext({});
import { AuthContext } from "./AuthContext";

export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const { employee, setEmploysData } = useFetchAllEmploy();
  const prevState = useRef(true);

  // phuc them vao
  const { user, setUserData } = useFetchAllUser();
  // console.log("user ben context : ", user)

  const { state } = useContext(AuthContext);

  const handleFetchJobs = async () => {
    const response = await dataService.getData(`${BASE_URL}${JOBS_ENDPOINT}`);
    setJobsData(response.data);
  };

  const onUpdateJobs = (newJob) => {
    console.log("newJob/updated job: ", newJob);
    handleFetchJobs();
  };

  // solve useEffect being called twice
  useEffect(() => {
    if (prevState.current) {
      prevState.current = false;
      handleFetchJobs();
    }
  }, []);

  useEffect(() => {
    if (prevState.current) {
      prevState.current = false;
      handleFetchJobs();
    }
  }, [state]);

  return (
    <CareersContext.Provider
      value={{
        jobsData,
        employee,
        setEmploysData,
        onUpdateJobs,
        setJobsData,
        user,
        setUserData,
      }}
    >
      {children}
    </CareersContext.Provider>
  );
};
