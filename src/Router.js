import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ArticlesList from '../src/pages/Articles/ArticlesList'
import Article from '../src/pages/Articles/Article'
import MainMenu from '../src/components/MainMenu'
import CategoriesList from '../src/pages/Categories/CategoriesList'
import SearchComponent from '../src/pages/Search/SearchComponent'
import { RouteTypes } from './Constants'

const Router = (props) => {

  console.log(props, window.location, RouteTypes.TOP_NEWS_ARTICLE)
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
    <MainMenu {...props}></MainMenu>
    <Switch>
      <PrivateRoute exact path={'/'} />
      <PrivateRoute exact path={RouteTypes.TOP_NEWS} component={ArticlesList} />
      <PrivateRoute exact path={RouteTypes.TOP_NEWS_ARTICLE} component={Article} />
      <PrivateRoute exact path={RouteTypes.CATEGORIES} component={CategoriesList} />
      <PrivateRoute exact path={RouteTypes.SEARCH} component={SearchComponent} />
    </Switch>
  </BrowserRouter>
}

export default Router
