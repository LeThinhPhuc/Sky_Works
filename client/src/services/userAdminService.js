import axios from "axios";
import { ADMIN_ENDPOINT } from "../constants";

const userAdminService = {
  loginAdmin: (user) => axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 5000,
  }).post(`${ADMIN_ENDPOINT}/login`, user),

  registerAdmin: (user) => axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 5000,
  }).post(`${ADMIN_ENDPOINT}/register`, user),
};

export default userAdminService;
