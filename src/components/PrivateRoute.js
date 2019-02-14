import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import * as routes from '../constants/routes';

/**
 * Component that checks for accessToken and renders protected routes.
 *
 * @param {object} props
 */
const PrivateRoute = (props) => {
  const { accessToken } = props;

  if (accessToken) {
    return <Route {...props} />;
  }

  return <Redirect to={routes.LOGIN} />;
};

PrivateRoute.propTypes = {
  accessToken: PropTypes.string
};

export default PrivateRoute;
