import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import * as routes from './constants/routes';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import PageNotFound from './views/PageNotFound';

import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';


const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* Redirect all routes ending multiple slash with single slash */}
      <Redirect strict from="//" to="/" />

      <AuthRoute exact path={routes.LOGIN} component={Login} />
      <PrivateRoute path={routes.HOME} component={Dashboard} />

      <Route exact path="/index.html" render={() => <Redirect to={{ pathname: routes.HOME }} />} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
