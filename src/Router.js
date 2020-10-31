import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ArticlesList from '../src/pages/Articles/ArticlesList'
import Article from '../src/pages/Articles/Article'
import MainMenu from '../src/components/MainMenu'
import CategoriesList from '../src/pages/Categories/CategoriesList'
import SearchComponent from '../src/pages/Search/SearchComponent'
import { RouteTypes } from './Constants'
import Notifications from 'react-notify-toast'

const Router = (props) => {

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => window.location.pathname !== '/'
          ? <Component {...props} />
          : <Redirect to={{
            pathname: RouteTypes.TOP_NEWS
          }} />}
      />
    )
  }

  return <BrowserRouter>
    <Notifications options={{ timeout: 5000, zIndex: 5000 }} />
    <MainMenu {...props}></MainMenu>
    <Switch>
      <PrivateRoute exact path={'/'} />
      <PrivateRoute exact path={RouteTypes.TOP_NEWS} component={ArticlesList} />
      <PrivateRoute exact path={RouteTypes.ARTICLE} component={Article} />
      <PrivateRoute exact path={RouteTypes.CATEGORIES} component={CategoriesList} />
      <PrivateRoute exact path={RouteTypes.SEARCH} component={SearchComponent} />
    </Switch>
  </BrowserRouter>
}

export default Router
