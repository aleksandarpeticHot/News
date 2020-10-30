
export const RouteTypes = Object.assign({
  TOP_NEWS: '/topNews',
  CATEGORIES: '/categories',
  SEARCH: '/search'
})

export const apiKey = 'e810bd78d59d4aaa98d7830352ee1742'

//should be defined is some config file coming from the api
export const leftSideMenu = [
  { name: 'Top News', url: '/topNews' },
  { name: 'Categories', url: '/categories' },
  { name: 'Search', url: '/search' }
]

export const rightSideMenu = [
  'GB',
  'US'
]
