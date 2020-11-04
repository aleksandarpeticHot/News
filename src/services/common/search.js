import api from './api'
import { apiKey } from '../../Constants'

export const getSearchResults = (country, query) => api.get(`/top-headlines?country=${country}&q=${encodeURIComponent(query)}&apiKey=${apiKey}`)


