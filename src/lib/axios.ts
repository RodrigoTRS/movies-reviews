import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.watchmode.com/v1/',
})

export const backend = axios.create({
  baseURL: 'http://localhost:8000'
})
