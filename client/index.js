import axios from "axios";

const backendClient = axios.create({
  baseURL: process.env.BACKEND,
});
const frontendClient = axios.create({
  // baseURL: "http://localhost:3001/api",
//    baseURL: "/api"
});
export { backendClient, frontendClient };
