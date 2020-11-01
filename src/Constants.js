
export const RouteTypes = Object.assign({
  TOP_NEWS: '/articles-list',
  CATEGORIES: '/categories',
  SEARCH: '/search',
  ARTICLE: '/article/:articleGroup/:articleId/:index'
})

export const apiKey = '66ab60b83a2a49a3958178b548b3f904'

//should be defined is some config file coming from the api
export const leftSideMenu = [
  { name: 'Top News', url: '/articles-list' },
  { name: 'Categories', url: '/categories' },
  { name: 'Search', url: '/search' }
]

export const rightSideMenu = [
  {
    name: 'GB',
    id: 'gb',
    country: 'Great Britain'
  },
  {
    name: 'US',
    id: 'us',
    country: 'USA'
  }
]

export const categories = [
  {
    title: 'Entertainment',
    id: 'entertainment'
  },
  {
    title: 'General',
    id: 'general'
  },
  {
    title: 'Health',
    id: 'health'
  },
  {
    title: 'Science',
    id: 'science'
  },
  {
    title: 'Sport',
    id: 'sport'
  },
  {
    title: 'Technology',
    id: 'technology'
  }
]
