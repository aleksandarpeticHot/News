import api from './api'
import { apiKey } from '../../Constants'
import { categories } from '../../Constants'


export const getAllCategories = (country, pageSize = 5) => api.all(categories.map(category => {
  return api.get(`/top-headlines?country=${country}&category=${category.id}&pageSize=${pageSize}&apiKey=${apiKey}`)
}))
