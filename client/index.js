import axios from "axios";

const backendClient = axios.create({
  baseURL: process.env.BACKEND,
});
const frontendClient = axios.create({});
export { backendClient, frontendClient };
