import { useState, useEffect , useContext } from "react";
import { json, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import EmployService from "../services/employSevice";

const useFetchAllEmploy = (props) => {
  const [employee, setEmployee] = useState([]);

  const { state } = useContext(AuthContext)

  useEffect(() => {
    fetchEmploy();
  }, [state]);

  const setEmploysData = (newContacts) => setEmployee(newContacts);

  const fetchEmploy = async () => {

    try {
      const employResponse = await EmployService.getAll();
      const employData = employResponse.data.data;
      setEmployee(employData);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return { employee , setEmploysData};
};

export default useFetchAllEmploy;
