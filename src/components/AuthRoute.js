import React from 'react';
import { Route, Redirect } from 'react-router';

import * as routes from './constants/routes';

/**
 * Component that checks for accessToken and renders auth routes.
 */
const AuthRoute = (props) => {
  const { accessToken } = props;

  if (accessToken) {
    return <Redirect to={{ ...props.location, pathname: routes.HOME }} />;
  }

  return <Route {...props} />;
};

export default AuthRoute;
