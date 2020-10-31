import api from './api'
import { apiKey } from '../../Constants'

export default {
  getEntertainment: (pageSize = 5) => api.get(`/top-headlines?category=entertainment&pageSize=${pageSize}&apiKey=${apiKey}`),
  getGeneral: (pageSize = 5) => api.get(`/top-headlines?category=general&pageSize=${pageSize}&apiKey=${apiKey}`),
  getHealth: (pageSize = 5) => api.get(`/top-headlines?category=health&pageSize=${pageSize}&apiKey=${apiKey}`),
  getScience: (pageSize = 5) => api.get(`/top-headlines?category=science&pageSize=${pageSize}&apiKey=${apiKey}`),
  getSport: (pageSize = 5) => api.get(`/top-headlines?category=sport&pageSize=${pageSize}&apiKey=${apiKey}`),
  getTechnology: (pageSize = 5) => api.get(`/top-headlines?category=technology&pageSize=${pageSize}&apiKey=${apiKey}`)
}
