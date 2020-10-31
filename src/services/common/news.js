import api from './api'
import { apiKey } from '../../Constants'

export default {
  getTopNews: (country = 'us') => api.get(`/top-headlines?country=${country}&apiKey=${apiKey}`),
  getArticle: (articleGroup, articleId) => api.get(`/top-headlines?${articleGroup}=${articleId}&apiKey=${apiKey}`)
}
