import React from 'react';
import { Redirect } from '@reach/router';
import { func } from 'prop-types';

import { localStorageKey } from './api';

function PrivateRoute({ as: Comp }) {
  if (window.localStorage.getItem(localStorageKey)) return <Comp />;
  return <Redirect to="/login" noThrow />;
}

PrivateRoute.propTypes = {
  as: func.isRequired,
};

function AuthRoute({ as: Comp }) {
  if (window.localStorage.getItem(localStorageKey))
    return <Redirect to="/dashboard" noThrow />;
  return <Comp />;
}
AuthRoute.propTypes = {
  as: func.isRequired,
};

export { PrivateRoute, AuthRoute };
