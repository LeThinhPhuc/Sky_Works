import axiosInstance from "./axiosInstance";
import { APPLY_ENDPOINT } from "../constants";

const EmployService = {
  getAll: () => axiosInstance.get(APPLY_ENDPOINT),
  getById: (id) => axiosInstance.get(`${APPLY_ENDPOINT}/${id}`),
  postApply: (employ) => axiosInstance.post(APPLY_ENDPOINT, employ),
  create: (employ) => axiosInstance.post(APPLY_ENDPOINT, employ),
  UpdateById: (id, employ) => axiosInstance.put(`${APPLY_ENDPOINT}/${id}`, employ),
  DeleteById: (id) => axiosInstance.delete(`${APPLY_ENDPOINT}/${id}`),
};

export default EmployService;
