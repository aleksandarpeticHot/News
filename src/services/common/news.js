import api from './api'
import { apiKey } from '../../Constants'

export default {
  getTopNews: (country = 'us') => api.get(`/top-headlines?country=${country}&apiKey=${apiKey}`),
  getArticle: (country, articleGroup, articleId) => api.get(`/top-headlines?country=${country}&${articleGroup}=${articleId}&apiKey=${apiKey}`)
}
