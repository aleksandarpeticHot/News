import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Articles from '../src/pages/Articles'
import MainMenu from '../src/components/MainMenu'
import { RouteTypes } from './Constants'

const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'} component={MainMenu} />
      <Route exact path={RouteTypes.TOP_NEWS} component={Articles} />
    </Switch>
  </BrowserRouter>
}

export default Router
