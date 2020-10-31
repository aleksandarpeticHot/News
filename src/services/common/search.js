import api from './api'
import { apiKey } from '../../Constants'
import AwesomeDebouncePromise from 'awesome-debounce-promise';


export const getSearchResults = (query) => api.get(`/top-headlines?q=${query}&apiKey=${apiKey}`)
export const searchAPIDebounced = (query) => AwesomeDebouncePromise(getSearchResults(query), 500)

