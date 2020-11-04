import api from './api'
import { apiKey } from '../../Constants'
import { categories } from '../../Constants'


export const getAllCategories = (country, pageSize = 5) => api.all(categories.map(categorie => {
  return api.get(`/top-headlines?country=${country}&category=${categorie.id}&pageSize=${pageSize}&apiKey=${apiKey}`)
}))
