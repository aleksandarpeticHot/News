import api from './api'
import { apiKey } from '../../Constants'

export default {
  getCategorie: (category, pageSize = 5) => api.get(`/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`)
}
