import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ArticlesList from '../src/pages/Articles/ArticlesList'
import Article from './pages/Articles/Article/ArticlePage'
import CategoriesList from '../src/pages/Categories/CategoriesList'
import SearchComponent from '../src/pages/Search/SearchComponent'
import { RouteTypes } from './Constants'
import Notifications from 'react-notify-toast'
import ErrorPage from './pages/Error/ErrorPage'

const Router = () => {

  return (
    <BrowserRouter>
      <Notifications options={{ timeout: 5000, zIndex: 20 }} />
      <Switch>
        {/* Home Page */}
        <Route exact path={'/'} component={ArticlesList} />

        {/* Articles List Page */}
        <Route exact path={RouteTypes.TOP_NEWS} component={ArticlesList} />

        {/* Article Page */}
        <Route exact path={RouteTypes.ARTICLE} component={Article} />

        {/* Categorie Page */}
        <Route exact path={RouteTypes.CATEGORIES} component={CategoriesList} />

        {/* Search Page */}
        <Route exact path={RouteTypes.SEARCH} component={SearchComponent} />

        {/* Error */}
        <Route path={'/*'} component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
