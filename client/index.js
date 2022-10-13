import axios from "axios";

const backendClient = axios.create({
  baseURL: process.env.BACKEND,
});
const frontendClient = axios.create({
  baseURL: "https://tmc.kazuma.in/api",
  // baseURL: "http://localhost:3001/api",
});
export { backendClient, frontendClient };
