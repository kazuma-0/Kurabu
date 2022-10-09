import axios from 'axios'

const backendClient  = axios.create({
  baseURL:process.env.BACKEND,
})
const frontendClient = axios.create({
  baseURL: process.env.FRONTEND || 'https://tmc.kazuma.in/api'
})
export {
  backendClient,frontendClient
}
