import React from 'react';
import { Route, Redirect } from 'react-router';

import * as routes from '../constants/routes';

const PrivateRoute = (props) => {
  const { accessToken } = props;

  if (accessToken) {
    return <Route {...props} />;
  }

  return <Redirect to={routes.LOGIN} />;
}

export default PrivateRoute;
