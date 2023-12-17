// import axiosInstance from "./axiosInstance";
// import { USER_ENDPOINT } from "../constants";
// const userService = {
//     getAll:()=>axiosInstance.get(`admin/${USER_ENDPOINT}`),
// }
// export default userService;



import axios from "axios";
import { ADMIN_ENDPOINT } from "../constants";

const userService = {
  getAll: () => axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/x-www-form-urlencoded, text/plain",
        ...(localStorage.getItem("accessToken") && {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}),
      },
  }).get(`${ADMIN_ENDPOINT}/users`),
  getById: (id) => axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/x-www-form-urlencoded, text/plain",
        ...(localStorage.getItem("accessToken") && {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}),
      },
  }).get(`${ADMIN_ENDPOINT}/users/${id}`),

  UpdateById: (id,user) => axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/x-www-form-urlencoded, text/plain",
        ...(localStorage.getItem("accessToken") && {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}),
      },
  }).put(`${ADMIN_ENDPOINT}/users/${id}`,user),

  DeleteById: (id) => axios.create({
    baseURL: "http://localhost:8001/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/x-www-form-urlencoded, text/plain",
        ...(localStorage.getItem("accessToken") && {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}),
      },
  }).delete(`${ADMIN_ENDPOINT}/users/${id}`),
};

export default userService;
