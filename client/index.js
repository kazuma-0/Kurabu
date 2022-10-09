import axios from 'axios'

const backendClient  = axios.create({
  baseURL:process.env.BACKEND,
})
const frontendClient = axios.create({
  baseURL: process.env.FRONTEND || 'https://club-frontend.app.mh1.us/api'
})
export {
  backendClient,frontendClient
}
