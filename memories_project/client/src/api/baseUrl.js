import axios from "axios";
export const API = axios.create({ baseURL: "http://localhost:5000/" });
// axios.defaults.baseURL = "http://localhost:5000/";
