import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import TopNews from '../src/pages/TopNews'
import MainMenu from '../src/components/MainMenu'
import { RouteTypes } from './Constants'

const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'} component={MainMenu} />
      <Route exact path={RouteTypes.TOP_NEWS} component={TopNews} />
    </Switch>
  </BrowserRouter>
}

export default Router
