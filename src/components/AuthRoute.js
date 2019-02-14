import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import * as routes from '../constants/routes';

/**
 * Component that checks for accessToken and renders auth routes.
 *
 * @param {object} props
 */
const AuthRoute = (props) => {
  const { accessToken, location } = props;

  if (accessToken) {
    return <Redirect to={{ ...location, pathname: routes.HOME }} />;
  }

  return <Route {...props} />;
};

AuthRoute.propTypes = {
  location: PropTypes.string,
  accessToken: PropTypes.string
};

export default AuthRoute;
