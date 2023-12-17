import axios from "axios";
import axiosInstance from "./axiosInstance";
import { JOBS_ENDPOINT } from "../constants";

export const dataService = {
  getData: async (url) => axios(url).then((response) => response.data),  
  postJob: (jobInfo) => axiosInstance.post(JOBS_ENDPOINT, jobInfo),
  updateJob: (id, jobInfo) =>
    axiosInstance.put(`${JOBS_ENDPOINT}/${id}`, jobInfo),
};
