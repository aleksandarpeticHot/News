import api from './api'
import { apiKey } from '../../Constants'

export const getSearchResults = (query) => api.get(`/top-headlines?q=${query}&apiKey=${apiKey}`)

