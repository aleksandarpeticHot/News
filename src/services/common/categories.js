import api from './api'
import { apiKey } from '../../Constants'

export default {
  getEntertainment: (country, pageSize = 5) => api.get(`/top-headlines?country=${country}&category=entertainment&pageSize=${pageSize}&apiKey=${apiKey}`),
  getGeneral: (country, pageSize = 5) => api.get(`/top-headlines?country=${country}category=general&pageSize=${pageSize}&apiKey=${apiKey}`),
  getHealth: (country, pageSize = 5) => api.get(`/top-headlines?country=${country}category=health&pageSize=${pageSize}&apiKey=${apiKey}`),
  getScience: (country, pageSize = 5) => api.get(`/top-headlines?country=${country}category=science&pageSize=${pageSize}&apiKey=${apiKey}`),
  getSport: (country, pageSize = 5) => api.get(`/top-headlines?country=${country}category=sport&pageSize=${pageSize}&apiKey=${apiKey}`),
  getTechnology: (country, pageSize = 5) => api.get(`/top-headlines?country=${country}category=technology&pageSize=${pageSize}&apiKey=${apiKey}`)
}
