import React, { useState } from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ArticlesList from '../src/pages/Articles/ArticlesList'
import Article from '../src/pages/Articles/Article'
import MainMenu from '../src/components/MainMenu'
import CategoriesList from '../src/pages/Categories/CategoriesList'
import SearchComponent from '../src/pages/Search/SearchComponent'
import { RouteTypes, rightSideMenu } from './Constants'
import Notifications from 'react-notify-toast'

const Router = (props) => {

  const defaultLanguage = rightSideMenu.find(language => language.id === 'gb')
  const [language, setLanguage] = useState(defaultLanguage)

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => window.location.pathname !== '/'
          ? <Component {...props} language={language} />
          : <Redirect to={{
            pathname: RouteTypes.TOP_NEWS
          }} />}
      />
    )
  }

  const onLanguageChange = (data) => {
    setLanguage(data)
  }

  return <BrowserRouter>
    <Notifications options={{ timeout: 5000, zIndex: 5000 }} />
    <MainMenu language={language} onLanguageChange={onLanguageChange} {...props}></MainMenu>
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
